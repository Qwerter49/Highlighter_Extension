if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', afterDOMloaded)
} else {
    afterDOMloaded()
}

let isHighlighterSelected = false
let isEditorActive = false
const optionsContainer = document.createElement("div")
const saveButtonContainer = document.createElement("div")
const saveButton = document.createElement("button")
saveButton.textContent = "SAVE"
const highlightImage = document.createElement('img')
highlightImage.className = "highlight-button"
highlightImage.src = 'https://www.flaticon.com/svg/static/icons/svg/544/544319.svg'
const eraserButton = document.createElement('img')
eraserButton.className = 'eraser-button'
eraserButton.src = 'https://www.flaticon.com/svg/static/icons/svg/1046/1046352.svg'
saveButtonContainer.append(saveButton)
optionsContainer.className = "editor"
optionsContainer.append(eraserButton, highlightImage, saveButtonContainer)
document.body.append(optionsContainer)
optionsContainer.style.visibility = "hidden"
highlightImage.addEventListener('click', toggleHighlight)
eraserButton.addEventListener('click', toggleEraser)
saveButton.addEventListener('click', savePage)

function afterDOMloaded(){
    chrome.runtime.sendMessage("get url", function(response){
        chrome.storage.sync.get([response], function(result){
            if(result[response]){
                result[response].forEach(edit => {
                    document.querySelectorAll(edit.parentTag).forEach(potentialParent => {
                        if(potentialParent.textContent.includes(edit.text)){
                            const highlight = `<div class="snippit">${edit.text}</div>`
                            potentialParent.innerHTML = potentialParent.innerHTML.replace(edit.text, highlight)
                        }
                    })
                })
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
        optionsContainer.style.visibility = "visible"
    } else {
        optionsContainer.style.visibility = "hidden"
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
    if (window.getSelection().anchorOffset > 0 && window.getSelection().extentOffset > 0 ) {
        let text = "";
        let parent;
        // let activeEl = document.activeElement;
        //         let activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
        //         if (
        //             (activeElTagName == "textarea") 
        //             ||
        //             (activeElTagName == "input" && /^(?:text|search|password|tel|url)$/i.test(activeEl.type)) && (typeof activeEl.selectionStart == "number")
        //         ) {
        //             parent = activeEl
        //             text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
        //         } else
                parent = window.getSelection().anchorNode.parentElement;
                text = window.getSelection().toString();
            if(window.getSelection().anchorNode.parentElement !== window.getSelection().extentNode.parentElement){
                let firstText = window.getSelection().anchorNode.data.slice(window.getSelection().anchorOffset)
                let secondText =  window.getSelection().extentNode.data.slice(0, window.getSelection().extentOffset)
                console.log({firstText: firstText, secondText: secondText})
                let firstParent = window.getSelection().anchorNode.parentElement
                let secondParent = window.getSelection().extentNode.parentElement
                console.log({firstParent: firstParent, secondParent: secondParent})
                const firstSnippit = `<div class="snippit">${firstText}</div>`
                const secondSnippit = `<div class="snippit">${secondText}</div>`
                firstParent.innerHTML = firstParent.innerHTML.replace(firstText, firstSnippit)
                secondParent.outerHTML = secondParent.outerHTML.replace(secondText, secondSnippit)
            } else {
                const highlight = `<div class="snippit">${text}</div>`
                parent.innerHTML = parent.innerHTML.replace(text, highlight)
            }
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
                let oneEdit = {text: snippit.textContent, parentTag: snippit.parentElement.tagName.toLowerCase()}
                savedEdits.push(oneEdit)
            }
        })
        chrome.storage.sync.set({[response]: savedEdits}, function(){
            console.log('Chrome synced your data')
        })
        console.log(savedEdits)
    })
}
