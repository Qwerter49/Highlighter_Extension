<template>
     <main id="notification-cards-container">
        <div v-for="singleNotification in listOfNotifications" :key="singleNotification">
            <NotificationCard :notification="singleNotification"/>
        </div>
    </main>
</template>

<script>
import NotificationCard from "./NotificationCard.vue"

export default {
    name: "NotificationCardContainer",
    components: { NotificationCard  },
    props: {
        listOfNotifications: Array,
    }
};
</script>

<style>
    #notification-cards-container {
        height: 100%;
        width: 100%;
    }

</style>