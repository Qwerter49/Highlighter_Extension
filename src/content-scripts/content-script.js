chrome.runtime.onMessage.addListener(
    function(request){
        if(request.text === "highlight this text"){
            let text = "";
            let parent;
            let activeEl = document.activeElement;
            let activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
            if (
                (activeElTagName == "textarea") || (activeElTagName == "input" &&
                /^(?:text|search|password|tel|url)$/i.test(activeEl.type)) &&
                (typeof activeEl.selectionStart == "number")
            ) {
                text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
            } else if (window.getSelection) {
                parent = window.getSelection().anchorNode.parentElement;
                text = window.getSelection().toString();
            }
            const highlight = `<div style="display: inline; background-color: yellow;">${text}</div>`
            parent.innerHTML = parent.innerHTML.replace(text, highlight)
        }
        else if(request.text === "go select some text to highlight"){
            let text = "";
            let parent;
            let activeEl = document.activeElement;
            let activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
            if (
                (activeElTagName == "textarea") || (activeElTagName == "input" &&
                /^(?:text|search|password|tel|url)$/i.test(activeEl.type)) &&
                (typeof activeEl.selectionStart == "number")
            ) {
                text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
            } else if (window.getSelection) {
                parent = window.getSelection().anchorNode.parentElement;
                text = window.getSelection().toString();
            }
            const highlight = `<div style="display: inline; background-color: yellow;">${text}</div>`
            parent.innerHTML = parent.innerHTML.replace(text, highlight)
        }
    }
)
