<template>
  <main class="container">
    <router-view></router-view>
    <TheCopyrigth class="copyrights" />
  </main>
</template>

<script setup>
import TheCopyrigth from "./components/TheCopyrigth.vue";
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.copyrights {
  position: fixed;
  right: 10px;
  bottom: 0;
}
</style>
