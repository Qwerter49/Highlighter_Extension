<template>
  <main>
    <header class="content-switcher">
      <h3>Contacts</h3>
      <h3>Notifications</h3>
    </header>
    <div class="contact-card-container">
      <div class="contact-card">
        <h5>Jay Oliver</h5>
      </div>
    </div>
  </main>
</template>

<script>

export default {
  name: "App",
  components: {  },
};

</script>

<style>
html {
  width: 250px;
  height: 350px;
}
.content-switcher {
  display: flex;
  justify-content: space-evenly;
}
</style>
