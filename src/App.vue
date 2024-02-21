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

  const slides = [
    {name: 'hello', element: hi, bonus: 0},
    {name: 'whyMe', element: whyMe, bonus: 96},
    {name: 'portfolio', element: portfolio, bonus: 0},
    {name: 'skills', element: skills, bonus: 0},
    {name: 'blog', element: blog, bonus: 0},
    {name: 'interested', element: interested, bonus: 0},
    {name: 'basement', element: basement, bonus: 0},
    {name: 'footer', element: footer, bonus: 0}];

  if (deltaY > 0) {
    // down
    if (isScroll) return;
    isScroll = true;
    setTimeout(() => (isScroll = false), 1000);

    if (scrolled.scrolled < 95 && scrolled.scrolled !== -1 && slides[currentSlide].element.id == 'whyMe') {
      return;
    } else {
      const page = document.getElementById('page')!;
      scrolled.changeScrolled(-1);
      page.scrollTo(0, page.scrollHeight);
    }

    currentSlide++;
    if (currentSlide >= slides.length) return (currentSlide = slides.length - 1);

    slides[currentSlide].element.animate(
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

    if (scrolled.scrolled > 1 && scrolled.scrolled !== -1 && slides[currentSlide].element.id == 'whyMe') {
      return;
    } else {
      const page = document.getElementById('page')!;
      page.scrollTo(0, 0);
      scrolled.changeScrolled(-1);
    }

    currentSlide--;

    if (currentSlide < 0) return (currentSlide = 0);
    slides[currentSlide + 1].element.animate(
      {
        top: 'calc(100% + ' + slides[currentSlide + 1].bonus + 'px)'
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
