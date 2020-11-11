<template>
     <div v-if="listOfNotifications.length > 0" class="notification-cards-container">
        <div v-for="singleNotification in listOfNotifications" :key="singleNotification">
            <NotificationCard :notification="singleNotification"/>
        </div>
    </div>
    <div v-else class="notification-cards-container">
        <BlankNotificationCard />
    </div>
</template>

<script>
import NotificationCard from "./NotificationCard.vue"
import BlankNotificationCard from "./BlankNotificationCard.vue"


export default {
    name: "NotificationCardContainer",
    components: { NotificationCard, BlankNotificationCard },
    props: {
        listOfNotifications: Array,
    }
};
</script>

<style>
.notification-cards-container {
height: 350px;
overflow: overlay;
padding-right: 8px;
}

</style>