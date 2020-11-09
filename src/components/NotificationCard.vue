<template>
    <div class="notification-card">
        <div class="text-area">
            <h4>{{this.notification.from_user}} shared a website!</h4>
            <p>{{this.notification.url}}</p>
        </div>
        <button @click="goToSharedSite">See Context</button>
    </div>
</template>

<script>
export default {
    name: "NotificationCard",
    methods: {
        goToSharedSite: function(){
            console.log(this.notification)
            chrome.storage.sync.set({[this.notification.url]: this.notification.highlight})
            chrome.tabs.create({url: this.notification.url});
        }
    },
    props: {
        notification: Object,
    }
}
</script>

<style>
.notification-card {
    display: flex;
    flex-direction: column;
    margin: 10px;
    justify-content: space-evenly;
    background-color: #FAE8EB;
    padding: 5px;
    box-shadow: 1px 1px 5px 1px black;
}
button {
    border-radius: 10px;
    border: 4px  #cccccc;
    color: #eeeeee;
    background-color: #7b38d8;
    text-align: center;
    padding: 3px;
    transition: all 0.5s;
    cursor: pointer;
    padding-left: 9px;
    padding-right: 10px;
}
button:hover {
    background-color: #f7c2f9;
}

</style>