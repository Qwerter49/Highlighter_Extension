<template>
    <div v-if="listOfContacts.length > 0" class="cards-container">
        <div v-for="singleContact in listOfContacts" :key="singleContact">
            <ContactCard :contact="singleContact"/>
        </div>
    </div>
    <div v-else class="cards-container">
        <BlankContactCard />
    </div>
</template>

<script>
import ContactCard from '@/components/ContactCard.vue'
import BlankContactCard from '@/components/BlankContactCard.vue'



export default {
    name: "ContactCardContainer",
    components: { ContactCard, BlankContactCard },
    props: {
        listOfContacts: Array,
    }
};
</script>

<style>
.cards-container {
    height: 350px;
    overflow: overlay;
    padding-right: 8px;
}
</style>