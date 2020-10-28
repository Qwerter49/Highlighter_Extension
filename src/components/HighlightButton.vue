<template>
  <div>
    <button @click="clickAfterHighlight">Highlight!</button>
    <button @click="clickBeforeHighlight">Select then highlight</button>
  </div>
</template>

<script>

export default {
  name: "HighlightButton",
  methods: {
    clickAfterHighlight: function(){
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {text: "highlight this text"});
      })
    },
    clickBeforeHighlight: function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {text: "go select some text to highlight"});
      })
    }
  }
};
</script>

<style>
    button {
        width: 100%;
        height: 100%;
    }
</style>