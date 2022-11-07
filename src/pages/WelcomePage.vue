<template>
  <MainText>WELCOME!</MainText>
  <SecondaryText
    >Thank you for registering the account on one of our applications. This
    account gives you access to any of the application mentioned
    below:</SecondaryText
  >
  <Suspense>
    <AppsRow />
    <template #fallback>...</template>
  </Suspense>
  <!-- <router-link to="/password">Go to Password</router-link>
  <router-link to="/welcome">Go to Other</router-link> -->
  <SecondaryText
    >You may now go back to your application and log-in.</SecondaryText
  >
</template>

<script setup>
import MainText from "../components/MainText.vue";
import AppsRow from "../components/AppsRow.vue";
import SecondaryText from "../components/SecondaryText.vue";
</script>

<style scoped></style>
