<template>
    <div class="container">
        <div>"{{ sortContacts }}"</div>
        <!-- <input class="search-bar" v-model="contacts" type="text" placeholder="search contacts"> -->
    <div v-if="listOfContacts.length > 0" class="cards-container">
        <div v-for="singleContact in listOfContacts" :key="singleContact">
            <ContactCard :contact="singleContact"/>
        </div>
    </div>
    <div v-else class="cards-container">
        <BlankContactCard />
    </div>
    </div>
</template>

<script>
import ContactCard from '@/components/ContactCard.vue'
import BlankContactCard from '@/components/BlankContactCard.vue'



export default {
    name: "ContactCardContainer",
    components: { ContactCard, BlankContactCard },
    data(){
        return {
            contacts: "",
        }
    },
    props: {
        listOfContacts: Array,
    },
    computed: {
        sortContacts: function() {
            let sortedList = []
            let i = 0
            while(i < this.listOfContacts.length){
                console.log(this.listOfContacts.length)
                // console.log(this.listOfContacts[i].names[0].displayName)
                i++
            }
            return sortedList
        }
    }
};
</script>

<style>
.cards-container {
    height: 350px;
    overflow: overlay;
    padding-right: 8px;
}

.search-bar {
    padding-left: 9px;
    margin-left: 8px;
    margin-bottom: 5px;
    background: #fff;
    width: 84%;
    height: 20px;
    border-radius: 7px;
}

.container { 
    flex-direction: column;
}
</style>