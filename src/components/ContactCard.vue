<template>
    <div class="contact-card card">
        <img :src="this.contact.photos[0].url" alt="photo">
        <div class="right-of-image">
        <h3>{{this.contact.names[0].displayName}}</h3>
        <button class="send-button" @click="sendPage">Send Context</button>
        </div>
    </div>
</template>

<script>

export default {
    name: "ContactCard",
    methods: {
        sendPage: function(){
            chrome.identity.getProfileUserInfo( (userInfo) => {     
                chrome.runtime.sendMessage("get url", (response) => {
                    chrome.storage.sync.get([response], (result) => {
                        const from_user = userInfo.email
                        const to_user = this.contact.emailAddresses[0].value
                        const data = result
                        const packedMessage = {from: from_user, to: to_user, data: data}
                        console.log(packedMessage)
                        let init = {
                            method: 'POST',
                            async: true,
                            headers: {
                                "Content-Type": 'application/json'
                            },
                            body: JSON.stringify(packedMessage),
                            'contentType': 'json'
                            };
                            fetch("https://in-context-backend.herokuapp.com/send-site", init)
                            alert(`Sent website to ${this.contact.names[0].displayName}`)
                    })
                })
            })
        }
    },
    props: {
        contact: Object,
    }
};
</script>

<style>
.contact-card {
    display: flex;
    flex-direction: row;
    margin: 10px;
    justify-content: space-evenly;
    background-color: #f6d83e;
    padding: 5px;
    box-shadow: 1px 1px 5px 1px black;
}
img {
    border-radius: 50px;
    height: 65px;
}
.right-of-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 20px;
}
.send-button {
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
.send-button:hover {
    background-color: #f7c2f9;
}

</style>