if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', afterDOMloaded)
} else {
    afterDOMloaded();
}

let isHighlighterSelected = false
let isEditorActive = false
const optionsContainer = document.createElement("div")
const saveButtonContainer = document.createElement("div")
saveButtonContainer.className = "save-button-container"
const saveButton = document.createElement("img")
saveButton.src = "https://www.flaticon.com/svg/static/icons/svg/633/633735.svg"
saveButton.className = "save-button"
const highlightImage = document.createElement('img')
highlightImage.className = "highlight-button"
highlightImage.src = 'https://www.flaticon.com/svg/static/icons/svg/544/544319.svg'
const eraserButton = document.createElement('img')
eraserButton.className = 'eraser-button'
eraserButton.src = 'https://www.flaticon.com/svg/static/icons/svg/1046/1046352.svg'
saveButtonContainer.append(saveButton)
optionsContainer.className = "editor"
optionsContainer.append(eraserButton, highlightImage)
document.body.append(optionsContainer, saveButtonContainer)
optionsContainer.classList.add("hiding")
saveButtonContainer.classList.add("hiding")
highlightImage.addEventListener('click', toggleHighlight)
eraserButton.addEventListener('click', toggleEraser)
saveButton.addEventListener('click', savePage)

function afterDOMloaded(){
    chrome.runtime.sendMessage("get url", function(response){
        chrome.storage.sync.get([response], function(result){
            if(result[response]){
                result[response].forEach(edit => {
                    document.querySelectorAll(edit.parentTag).forEach(potentialParent => {
                        if(potentialParent.innerHTML.includes(edit.text)){
                            const highlight = `<span class="snippit">${edit.text}</span>`
                            potentialParent.innerHTML = potentialParent.innerHTML.replace(edit.text, highlight)
                        }
                    })
                })
                const aSnippit = document.querySelector(".snippit");
                aSnippit.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "nearest"
                });
            }
        })
    })
}

chrome.runtime.onMessage.addListener(
    function(request){
        if(request.text === "toggle highlight"){
            isEditorActive = !isEditorActive
            editorSwitcher()
        }
    }
)

function editorSwitcher(){
    if(isEditorActive){
        saveButtonContainer.classList.remove("hiding")
        optionsContainer.classList.remove("hiding")
        eraserButton.classList.remove("hiding")
        highlightImage.classList.remove("hiding")
    } else {
        saveButtonContainer.classList.add("hiding")
        optionsContainer.classList.add("hiding")
        eraserButton.classList.add("hiding")
        highlightImage.classList.add("hiding")
    }
}

function toggleHighlight(){
    isHighlighterSelected = !isHighlighterSelected
    if(isHighlighterSelected){
        document.onmouseup = highlightText
        highlightImage.className = 'highlightClicked'
        if(eraserButton.className === 'eraserClicked'){
            eraserButton.className = 'eraser-button'
        }
    } else {
        document.onmouseup = null
        highlightImage.className = 'highlight-button'
    }
}

function toggleEraser(){
    if(eraserButton.className === 'eraser-button'){
        eraserButton.className = 'eraserClicked'
        if(isHighlighterSelected){
            document.onmouseup = null
            highlightImage.className = 'highlight-button'
            isHighlighterSelected = !isHighlighterSelected
        }
        document.onmouseup = unHighlightText
    } else {
        eraserButton.className = 'eraser-button'
        document.onmouseup = null
    }
}

function highlightText(){
    if (window.getSelection().toString().length !== 0 ) {
        let range = window.getSelection().getRangeAt(0)
        let selectionContents = range.extractContents()
        const highlight = document.createElement('span')
        highlight.classList.add('snippit')
        highlight.appendChild(selectionContents)
        range.insertNode(highlight)
        window.getSelection().empty()
    }
}

function unHighlightText(){
    if(window.getSelection().anchorNode.parentElement.classList.value === "snippit"){
        let text = ''
        text = window.getSelection()
        text = window.getSelection().anchorNode.parentElement.textContent
        let parent = window.getSelection().anchorNode.parentElement
        parent.outerHTML = text
    }
}

function savePage(){
    chrome.runtime.sendMessage("get url", function(response){
        let savedEdits = []
        let snippits = document.querySelectorAll('.snippit')
        snippits.forEach(snippit => {
            if(snippit.textContent.length > 1){
                let oneEdit = {text: snippit.innerHTML, parentTag: snippit.parentElement.tagName.toLowerCase()}
                savedEdits.push(oneEdit)
            }
        })
        chrome.storage.sync.set({[response]: savedEdits}, function(){
            alert("Page has been saved!")
        })
    })
}
