<script setup lang="ts">
import TheWhyMe from './slides/TheWhyMe.vue';
import TheHello from './slides/TheHello.vue';
import ThePortfolio from './slides/ThePortfolio.vue';
import TheSkills from './slides/TheSkills.vue';
import TheBlog from './slides/TheBlog.vue';
import TheInterested from './slides/TheInterested.vue';
import TheBasement from './slides/TheBasement.vue';
import TheFooter from './slides/TheFooter.vue';
import scrolled from './store/scrolled';

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
    // down
    if (isScroll) return;
    isScroll = true;
    setTimeout(() => (isScroll = false), 1000);

    if (scrolled.scrolled < 95 && scrolled.scrolled !== -1 && slides[currentSlide].id == 'whyMe') {
      console.log('quit');
      return;
    } else {
      console.log('passed');
      const page = document.getElementById('page')!;
      scrolled.changeScrolled(-1);
      page.scrollTo(0, page.scrollHeight);
    }

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
    // up
    if (isScroll) return;
    isScroll = true;
    setTimeout(() => (isScroll = false), 1000);

    if (scrolled.scrolled > 1 && scrolled.scrolled !== -1 && slides[currentSlide].id == 'whyMe') {
      return;
    } else {
      const page = document.getElementById('page')!;
      page.scrollTo(0, 0);
      scrolled.changeScrolled(-1);
    }

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
  changeSlide(deltaY);
});

window.addEventListener('wheel', (e) => {
  changeSlide(e.deltaY);
});
</script>
<template>
  <main>
    <TheComp1 />
    <TheComp2 />
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
