chrome.runtime.onInstalled.addListener(
  function(){
    chrome.identity.getAuthToken({interactive: true}, function(token) {
      console.log(token)
    })
  }
)


chrome.commands.onCommand.addListener(
  function(command) {
    if(command === "toggle-highlight"){
      console.log(command)
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