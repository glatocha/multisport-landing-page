<template>
  <a class="app-badge" :href="app.link" target="blank">
    <div class="icon-background">
      <img :src="app.icon" :alt="app.name" />
    </div>
    <p>{{ app.name }}</p>
  </a>
</template>

<script setup>
const props = defineProps({
  app: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.app-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
  border: none;
  text-decoration: none;
}

.app-badge:hover {
  scale: 1.05;
}

.icon-background {
  background-color: white;
  aspect-ratio: 1;
  height: 4em;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 80%;
  height: 80%;
}

p {
  font-family: Bungee;
  font-size: 0.8em;
  color: var(--color-primary);
  text-align: center;
  max-width: 90%;
  min-width: 130px;
  margin: 20 0;
}
</style>
