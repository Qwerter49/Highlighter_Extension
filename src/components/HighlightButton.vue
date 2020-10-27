<template>
    <button @click="sendMessage">Highlight!</button>
</template>

<script>
// import { MdButton } from 'vue-material/dist/components'

export default {
  name: "HighlightButton",
  methods: {
    sendMessage: function(){
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {text: "grab this text"});
      })
    },
    handleClick: function() {
      console.log("Ive been clicked! On the popup page!")
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