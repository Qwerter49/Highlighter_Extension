<template>
  <main>
    <nav id="tab-nav">
      <span class="contacts-tab tabnav" @click="showContacts">
        <h3>Contacts</h3>
      </span>
      <span class="notifications-tab tabnav" @click="showNotifications">
        <h3>Notifications</h3>
      </span>
    </nav>
      <!-- <ContactCardContainer :listOfContacts="this.listOfContacts"/> -->
      <!-- <div v-show="this.displayedContent === 'contacts'"> -->
        <ContactCardContainer v-show="this.displayedContent === 'contacts'" :listOfContacts="this.listOfContacts"/>
      <!-- </div> -->
      <div v-show="this.displayedContent === 'notifications'">
        <NotificationCardContainer :listOfNotifications="this.listOfNotifications" />
      </div>
  </main>
</template>

<script>
import ContactCardContainer from '@/components/ContactCardContainer.vue'
import NotificationCardContainer from '@/components/NotificationCardContainer.vue'


export default {
  name: "App",
  components: { ContactCardContainer, NotificationCardContainer },
  methods: {
    showContacts: function(){
      this.displayedContent = 'contacts';
    },
    showNotifications: function(){
      this.displayedContent = 'notifications'
    },
    fetchContacts: function(){
      chrome.identity.getAuthToken({interactive: true}, (token)  => {
        let init = {
          method: 'GET',
          async: true,
          headers: {
            Authorization: 'Bearer ' + token,
            "Content-Type": 'application/json'
          },
          'contentType': 'json'
        };
        fetch(
          `https://people.googleapis.com/v1/people/me/connections?personFields=names,photos,emailAddresses&key=${process.env.VUE_APP_APIKEY}`,
          init)
          .then((response) => response.json())
          .then((results) => {
            this.listOfContacts = results.connections
          })
      })
    },
    fetchNotifications: function(){
      chrome.identity.getProfileUserInfo( (userInfo) => {     
        const email = {email: userInfo.email}
        let init = {
            method: 'POST',
            async: true,
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(email),
            'contentType': 'json'
            };
            fetch("https://in-context-backend.herokuapp.com/shared-messages", init)
              .then(response => response.json())
              .then(results => {
                this.listOfNotifications = results
                if(this.listOfNotifications.length > 0){
                  chrome.browserAction.setBadgeText({text: this.listOfNotifications.length.toString()})
                  chrome.browserAction.setBadgeBackgroundColor({color: '#FF0000'})
                }
              })
      })
    }
  },
  data(){
    return {
      listOfContacts: [],
      listOfNotifications: [],
      displayedContent: "notifications"
    }
  },
  mounted(){
    this.fetchContacts();
    this.fetchNotifications();
  }
};

</script>

<style>
html {
  width: 250px;
  height: 250px;
  background-color: #78b7d2;
}
#tab-nav {
  display: flex;
  justify-content: space-evenly;
  background-color: #7b38d8;
  margin: -9px;
  margin-bottom: 5px;
}
#tab-nav span.tabnav {
  color: #fff;
  cursor: pointer;
}
#tab-nav h3 {
  color: #f6d83e;
}
::-webkit-scrollbar {
    width: 5px;
}
::-webkit-scrollbar-track {
    background-color: transparent;
}
::-webkit-scrollbar-thumb {
    background-color: #7b38d8;
    border-radius: 20px;
    border: -4px solid transparent;
    background-clip: content-box;
}
::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
}



</style>
