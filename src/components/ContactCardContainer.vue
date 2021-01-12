<template>
    <div class="container">
        <input class="search-bar" v-model="searchQuery" type="text" placeholder="search contacts">
    <div v-if="sortContacts.length > 0" class="cards-container">
        <div v-for="item in resultQuery" :key="item">
            <ContactCard :contact="item"/>
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
            searchQuery: "",
        }
    },
    props: {
        listOfContacts: Array,
    },
    computed: {
        sortContacts: function() {
            let sortedList = []
            let i = 0
            function compare(a, b) {
                const nameA = a.names[0].displayName.toUpperCase();
                const nameB = b.names[0].displayName.toUpperCase();

                let comparison = 0;
                if (nameA > nameB) {
                    comparison = 1;
                } else if (nameA < nameB) {
                    comparison = -1;
                }
                return comparison;
            }
            while(i < this.listOfContacts.length){
                if(this.listOfContacts[i].names){
                    sortedList.push(this.listOfContacts[i])
                }
                i++
            }
            return sortedList.sort(compare)
        },
        resultQuery: function() {
            if(this.searchQuery){
                return this.sortContacts.filter((item) => {
                    return this.searchQuery.toLowerCase().split(' ').every(v => item.names[0].displayName.toLowerCase().includes(v))
                })
            } else {
                return this.sortContacts
            }
        }
    }
};
</script>

<style>
.cards-container {
    height: 319px;
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