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

let start = 0;
let deltaY = 0;

window.addEventListener('touchstart', (e) => {
  start = e.touches[0].clientY;
});
window.addEventListener('touchmove', (e) => {
  deltaY = -(e.touches[0].clientY - start);
  slide.changeDelta(deltaY);
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
    slide.changeDelta(1);
    slide.change();
    return;
  };
  if (key === 'ARROWUP' || key === 'W') {
    slide.changeDelta(-1);
    slide.change();
    return};
});
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
</template>
<style lang="sass" scoped>
main
  max-width: 100vw
  max-height: 100vh
  overflow: hidden
</style>
