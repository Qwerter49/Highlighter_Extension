<template>
  <div>
    <button @click="checkStorage">Check Storage</button>
  </div>
</template>

<script>

export default {
  name: "HighlightButton",
  methods: {
    checkStorage: function(){
      chrome.storage.sync.get(['https://en.wikipedia.org/wiki/Existentialism#cite_note-Robert_C._Solomon_1974,_pp._1-4'], function(result){
        console.log(result)
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