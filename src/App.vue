<script setup lang="ts">
import TheWhyMe from './slides/TheWhyMe.vue';
import TheHello from './slides/TheHello.vue';
import ThePortfolio from './slides/ThePortfolio.vue';
import TheSkills from './slides/TheSkills.vue';
import TheBlog from './slides/TheBlog.vue';
import TheInterested from './slides/TheInterested.vue';
import TheBasementAndFooter from './slides/TheBasementAndFooter.vue';
import TheNavigator from './elements/TheNavigator.vue';
import TheCursor from './elements/TheCursor.vue';
import slide from './store/slide';
import CursorScript from '@/script/cursorScript';
import TheAdmin from './slides/TheAdmin.vue';
import { onMounted, ref } from 'vue';

let start = { x: 0, y: 0 };
let delta = { x: 0, y: 0 };
let isAdmin = ref(false);
let isShift = ref(false);
let token = ref("");

window.addEventListener('touchstart', (e) => {
  if (isAdmin.value) return;

  [start.y, start.x] = [e.touches[0].clientY, e.touches[0].clientX];
});
window.addEventListener('touchmove', (e) => {
  if (isAdmin.value) return;

  delta.y = -(e.touches[0].clientY - start.y);
  delta.x = -(e.touches[0].clientX - start.x);

  if ((slide.current === 3 && delta.x > 60) || (slide.current === 4 && delta.x < -60)) {
    slide.changeDelta(delta.x);
  } else {
    slide.changeDelta(delta.y);
  }
  slide.change();
});
// window.addEventListener('load', console.log);
window.addEventListener('wheel', (e) => {
  if (isAdmin.value) return;
  if (isShift.value) return;

  slide.changeDelta(e.deltaY);
  slide.change();
});
window.addEventListener('keydown', (e) => {
  if (isAdmin.value) return;

  const key = e.key.toUpperCase() as 'ARROWDOWN' | 'ARROWUP' | 'S' | 'W' | "SHIFT";
  if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA')
    return;

  switch (key) {
    case "ARROWDOWN":
    case "S": {
      slide.changeDelta(60);
      slide.change();
      return;
    }
    case "ARROWUP":
    case "W": {
      slide.changeDelta(-60);
      slide.change();
      return;
    }
    case "SHIFT": {
      isShift.value = true;
    }
  }
});
window.addEventListener('keyup', (e) => {
  if (isAdmin.value) return;

  const key = e.key.toUpperCase() as "SHIFT";
  if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA')
    return;

  switch (key) {
    case "SHIFT": {
      isShift.value = false;
    }
  }
});

onMounted(async () => {
  const cookies = document.cookie;
  if (cookies) {
    const parsed = Object.fromEntries(
      document.cookie.split(";").map(c => c.trim().split("="))
    );

    if (parsed.token && parsed.migawka) {

      const isOk = await fetch(import.meta.env.VITE_SERVER + "verify", {
        method: "POST",
        body: JSON.stringify({ token: parsed.token }),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => res.json()).then(res => "name" in res);

      if (isOk) {
        isAdmin.value = true;
        token.value = parsed.token;
      } else {
        CursorScript();
      }
    }
  } else {
    CursorScript();
  }
})

</script>
<template>
  <TheNavigator />
  <TheCursor />
  <main>
    <TheHello />
    <TheWhyMe />
    <ThePortfolio />
    <TheSkills />
    <TheBlog />
    <TheInterested />
    <TheBasementAndFooter />
  </main>
  <TheAdmin :token="token" v-if="isAdmin" />
</template>
<style lang="sass" scoped>
main
  max-width: 100vw
  max-height: 100vh
  overflow: hidden

article, #baseFooter
  display: none
#hello
  display: block
</style>
