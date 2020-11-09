<template>
    <main id="cards-container">
        <div v-for="singleContact in listOfContacts" :key="singleContact">
            <ContactCard :contact="singleContact"/>
        </div>
    </main>
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
    height: 100%;
    width: 100%;
}

</style>