<template>
  <MainText>PASSWORD</MainText>
  <SecondaryText
    >Seems like you have forgotten your password. No worries, just please type
    in the new one below</SecondaryText
  >
  <div class="fix-height">
    <form v-if="displayForm" @submit.prevent="SubmitForm">
      <input
        type="password"
        name="password1"
        id="password1"
        placeholder="password"
        class="password-input form-element"
      />
      <input
        type="password"
        name="password2"
        id="password2"
        placeholder="repeat password"
        class="password-input form-element"
      />
      <button class="button form-element" type="submit">Submit</button>
    </form>
    <div v-else>
      <SecondaryText>That was excellent - you are all done.</SecondaryText>
      <SecondaryText
        >You may now go back to your application and log-in.</SecondaryText
      >
    </div>
    <TheSpinner v-show="displaySpinner"></TheSpinner>
  </div>
</template>

<script setup>
import { ref } from "vue";
import MainText from "../components/MainText.vue";
import SecondaryText from "../components/SecondaryText.vue";
import TheSpinner from "../components/TheSpinner.vue";
const displayForm = ref(true);
const displaySpinner = ref(true);

function SubmitForm() {
  displaySpinner.value = true;
  setTimeout(() => {
    displayForm.value = false;
    displaySpinner.value = false;
  }, 3000);
}
</script>

<style scoped>
form {
  text-align: center;
}
.form-element {
  margin: 10px;
  font-size: 1.5rem;
  border: 2px solid var(--color-primary);
  border-radius: 1rem;
  padding: 5px 10px;
  background-color: var(--color-secondary);
}

.form-element:focus {
  outline: 2px solid var(--color-primary);
}

.button {
  background-color: var(--color-background);
  color: var(--color-primary);
  cursor: pointer;
  font-family: "Bungee";
}
.button:hover,
.button:focus {
  scale: 1.1;
}

.invisible {
  visibility: hidden;
}

.fix-height {
  min-height: 30%;
  text-align: center;
}
</style>
