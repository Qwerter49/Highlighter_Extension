<template>
    <div v-if="listOfContacts.length > 0" id="cards-container">
        <div v-for="singleContact in listOfContacts" :key="singleContact">
            <ContactCard :contact="singleContact"/>
        </div>
    </div>
    <div v-else>
        <h2>No contacts to display!</h2>
    </div>
</template>

<script>
import ContactCard from '@/components/ContactCard.vue'


export default {
    name: "ContactCardContainer",
    components: { ContactCard  },
    props: {
        listOfContacts: Array,
    }
};
</script>

<style>
#cards-container {
    height: 350px;
    overflow: overlay;
    padding-right: 8px;
}
</style>