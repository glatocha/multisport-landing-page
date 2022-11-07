<template>
  <div class="spinner-area">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>
</template>

<script setup></script>

<style scoped>
.spinner-area {
  width: 50%;
  height: 2rem;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;
}

.dot {
  position: absolute;
  height: 7px;
  width: 7px;
  border: 2px solid var(--color-primary);
  border-radius: 50%;
  /* translate by -50% so that the left positioning points to the middle of the circle */
  transform: translate(-50%);
  animation-duration: 1.2s;
  animation-direction: alternate-reverse;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

.dot:nth-of-type(1) {
  animation-name: slide-dot-1;
}
.dot:nth-of-type(2) {
  animation-name: slide-dot-2;
}
.dot:nth-of-type(3) {
  animation-name: slide-dot-3;
}

@keyframes slide-dot-1 {
  0% {
    left: 0%;
  }
  20% {
    left: 0%;
  }
  100% {
    left: 90%;
  }
}
@keyframes slide-dot-2 {
  0% {
    left: 5%;
  }
  10% {
    left: 5%;
  }
  90% {
    left: 95%;
  }
  100% {
    left: 95%;
  }
}
@keyframes slide-dot-3 {
  0% {
    left: 10%;
  }
  80% {
    left: 100%;
  }
  100% {
    left: 100%;
  }
}
</style>
