<script setup lang="ts">
import TheWhyMe from './slides/TheWhyMe.vue';
import TheHello from './slides/TheHello.vue';
import ThePortfolio from './slides/ThePortfolio.vue';
import TheSkills from './slides/TheSkills.vue';
import TheBlog from './slides/TheBlog.vue';
import TheInterested from './slides/TheInterested.vue';
import TheBasement from './slides/TheBasement.vue';
import TheFooter from './slides/TheFooter.vue';

let currentSlide = 0;
let isScroll = false;

let start = 0;
let deltaY = 0;

function changeSlide(deltaY: number = 0) {
  const hi = document.getElementById('hello')!;
  const whyMe = document.getElementById('whyMe')!;
  const portfolio = document.getElementById('portfolio')!;
  const skills = document.getElementById('skills')!;
  const blog = document.getElementById('blog')!;
  const interested = document.getElementById('interested')!;
  const basement = document.getElementById('basement')!;
  const footer = document.getElementById('footer')!;

  const slides = [hi, whyMe, portfolio, skills, blog, interested, basement, footer];

  if (deltaY > 0) {
    if (isScroll) return;
    isScroll = true;
    setTimeout(() => (isScroll = false), 1000);

    currentSlide++;

    if (currentSlide >= slides.length) return (currentSlide = slides.length - 1);

    slides[currentSlide].animate(
      {
        top: '0px'
      },
      {
        duration: 750,
        fill: 'forwards',
        easing: 'cubic-bezier(.49,0,.64,1.06)'
      }
    );
  } else {
    if (isScroll) return;
    isScroll = true;
    setTimeout(() => (isScroll = false), 1000);

    currentSlide--;

    if (currentSlide < 0) return (currentSlide = 0);
    slides[currentSlide + 1].animate(
      {
        top: '100%'
      },
      {
        duration: 750,
        fill: 'forwards',
        easing: 'cubic-bezier(.49,0,.64,1.06)'
      }
    );
  }
}

window.addEventListener('touchstart', (e) => {
  start = e.touches[0].clientY;
});
window.addEventListener('touchmove', (e) => {
  deltaY = -(e.touches[0].clientY - start);
  console.log(deltaY);
  changeSlide(deltaY);
});

window.addEventListener('wheel', (e) => {
  changeSlide(e.deltaY);
  // const hi = document.getElementById('hello')!;
  // const whyMe = document.getElementById('whyMe')!;
  // const portfolio = document.getElementById('portfolio')!;
  // const skills = document.getElementById('skills')!;
  // const blog = document.getElementById('blog')!;
  // const interested = document.getElementById('interested')!;
  // const basement = document.getElementById('basement')!;
  // const footer = document.getElementById('footer')!;

  // const slides = [hi, whyMe, portfolio, skills, blog, interested, basement, footer];

  // if (e.deltaY > 0) {
  //   if (isScroll) return;
  //   isScroll = true;
  //   setTimeout(() => (isScroll = false), 1000);

  //   currentSlide++;

  //   if (currentSlide >= slides.length) return (currentSlide = slides.length - 1);

  //   slides[currentSlide].animate(
  //     {
  //       top: '0px'
  //     },
  //     {
  //       duration: 750,
  //       fill: 'forwards',
  //       easing: 'cubic-bezier(.49,0,.64,1.06)'
  //     }
  //   );
  // } else {
  //   if (isScroll) return;
  //   isScroll = true;
  //   setTimeout(() => (isScroll = false), 1000);

  //   currentSlide--;

  //   if (currentSlide < 0) return (currentSlide = 0);
  //   slides[currentSlide + 1].animate(
  //     {
  //       top: '100%'
  //     },
  //     {
  //       duration: 750,
  //       fill: 'forwards',
  //       easing: 'cubic-bezier(.49,0,.64,1.06)'
  //     }
  //   );
  // }
});
</script>
<template>
  <main>
    <TheHello />
    <TheWhyMe />
    <ThePortfolio />
    <TheSkills />
    <TheBlog />
    <TheInterested />
    <TheBasement />
    <TheFooter />
  </main>
</template>
<style lang="sass" scoped>
main
  max-width: 100vw
</style>
