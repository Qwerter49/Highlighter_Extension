// let amountOfNotifications = 0


chrome.commands.onCommand.addListener(
  function(command) {
    if(command === "toggle-highlight"){
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {text: "toggle highlight"});
      })
    }
  }
)

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse){
    if(request === "get url"){
      chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        sendResponse(url)
    })
    }
    return true;
  }
)

// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse){
//     if(request.message === "update notifications"){

//     }
//   }
// )