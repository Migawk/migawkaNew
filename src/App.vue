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
import CursorScript from '@/script/CursorScript.vue'

let start = { x: 0, y: 0 };
let delta = { x: 0, y: 0 };


window.addEventListener('touchstart', (e) => {
  [start.y, start.x] = [e.touches[0].clientY, e.touches[0].clientX];
});
window.addEventListener('touchmove', (e) => {
  delta.y = -(e.touches[0].clientY - start.y);
  delta.x = -(e.touches[0].clientX - start.x);

  if ((slide.current === 3 && delta.x > 60) || (slide.current === 4 && delta.x < -60)) {
    slide.changeDelta(delta.x);
  } else {
    slide.changeDelta(delta.y);
  }
  slide.change();
});

window.addEventListener('load', console.log);
window.addEventListener('wheel', (e) => {
  slide.changeDelta(e.deltaY);
  slide.change();
});
window.addEventListener('keydown', (e) => {
  const key = e.key.toUpperCase() as 'ARROWDOWN' | 'ARROWUP' | 'S' | 'W';
  if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA')
    return;
  if (key === 'ARROWDOWN' || key === 'S') {
    slide.changeDelta(60);
    slide.change();
    return;
  };
  if (key === 'ARROWUP' || key === 'W') {
    slide.changeDelta(-60);
    slide.change();
    return
  };
});
</script>
<template>
  <CursorScript/>
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
