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