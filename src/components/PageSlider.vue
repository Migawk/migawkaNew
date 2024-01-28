<!-- Old code -->

<!-- <script setup lang="ts">
import TheBlog from '@/modules/TheBlog.vue';
import TheSkills from '@/modules/TheSkills.vue';
import { ref } from 'vue';

const isScrolled = ref<boolean>(false);

document.addEventListener('scroll', () => {
  const slider = document.getElementById('slider');
  const firstSlide = document.getElementById('firstSlide');
  const secondSlide = document.getElementById('secondSlide');

  return;

  if (!firstSlide || !secondSlide || !slider) return;
  if (firstSlide.getBoundingClientRect().y > 20) return;

  if (!isScrolled.value) {
    slider.animate(
      {
        transform: 'translateX(-100vw)'
      },
      {
        duration: 1000
      }
    );
    setTimeout(() => {
      slider.style.transform = 'translateX(-100vw)';
    }, 999);
  } else {
    slider.animate(
      {
        transform: 'translateX(0vw)'
      },
      {
        duration: 1000
      }
    );
    setTimeout(() => {
      slider.style.transform = 'translateX(0vw)';
    }, 999);
  }

  isScrolled.value = !isScrolled.value;
});
</script>

<template>
  <the-slider id="slider">
    <TheSkills id="firstSlide" />
    <TheBlog id="secondSlide" />
  </the-slider>
</template>

<style scoped lang="sass">
the-slider
    display: flex
    max-width: 100vw
    &>*
        min-width: 100vw
        min-height: 100vh

#secondSlide
  display: none
</style> -->
