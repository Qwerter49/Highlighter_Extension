<template>
    <div class="notification-card card">
        <button class="delete-button" @click="(event) => deleteNotification(event)">X</button>
        <div class="text-area">
            <h4>{{this.notification.from_user.split('@')[0]}} shared a website!</h4>
            <p>{{this.notification.url.split('https://')[1]}}</p>
        </div>
        <button class="notification-button" @click="goToSharedSite">See Context</button>
    </div>
</template>

<script>
export default {
    name: "NotificationCard",
    methods: {
        deleteNotification: function(event){       
                chrome.browserAction.getBadgeText({}, function(currentAmount){
                    let newAmount = currentAmount - 1
                    if(newAmount === 0){
                        chrome.browserAction.setBadgeText({text: ''})
                    } else {
                        chrome.browserAction.setBadgeText({text: newAmount.toString()})
                    }
                })
            const payload = JSON.stringify({user_id: this.notification.user_id, url: this.notification.url})
            let init = {
                method: 'DELETE',
                async: true,
                headers: {
                    "content-Type": "application/json"
                },
                body: payload,
                'contentType': 'json'
            };
            fetch("https://in-context-backend.herokuapp.com/delete-notification", init)
                .then(
                    event.target.parentElement.classList.add("hidden")
                )
        },
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
    background-color: #f6d83e;
    padding: 5px;
    box-shadow: 1px 1px 5px 1px black;
    position: relative;
}
.notification-button {
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
.notification-button:hover {
    background-color: #f7c2f9;
}
.notification-card:hover .delete-button{
    color: black;
}
.delete-button {
    position: absolute;
    width: 10px;
    top: 3px;
    right: 8px;
    background-color: transparent;
    color: transparent;
    border: none;
    cursor: pointer;
    transition: 0.2s;
}
h4 {
    margin-top: 8px;
}
.card {
    margin-top: 16px;
    padding-bottom: 9px;
    background-color: #f6d83e;
}
p {
    overflow-wrap: break-word;
}
.hidden {
    display: none;
}
.text-area{
    padding-top: 7px;
}

</style>