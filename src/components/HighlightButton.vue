<template>
  <div>
    <button @click="highlightHandler">Highlight!</button>
    <button @click="cancelHighlight">Stop!</button>
  </div>
</template>

<script>

export default {
  name: "HighlightButton",
  methods: {
    cancelHighlight: function(){
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {text: "stop"});
      })
    },
    highlightHandler: function() {
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