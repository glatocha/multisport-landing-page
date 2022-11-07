<template>
  <div class="apps-row">
    <AppIcon v-for="app in apps" :app="app" :key="app.id" />
  </div>
</template>

<script setup>
import AppIcon from "./AppIcon.vue";
import { supabase } from "../supabase.js";
const apps = [];

const { data, error } = await supabase.from("available-apps").select();
console.log("data :>> ", data);
data.forEach((ap) => {
  apps.push(ap);
});
</script>

<style scoped>
.apps-row {
  max-width: 80%;
  display: flex;
  gap: 50px;
  margin: 15px 0;
}
</style>
