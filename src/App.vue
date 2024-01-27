<script setup lang="ts">
import TheHello from './modules/TheHello.vue';
import TheHeader from './components/TheHeader.vue';
import TheWhyMe from './modules/TheWhyMe.vue';
import ThePortfolio from './modules/ThePortfolio.vue';
import TheSkills from '@/modules/TheSkills.vue';
import TheBlog from '@/modules/TheBlog.vue';
import TheIntrested from '@/modules/TheIntrested.vue';
import TheBasement from '@/modules/TheBasement.vue';
import TheFooter from './modules/TheFooter.vue';

let oldScrollY = window.scrollY;
let ind = 0;
let isScroll = false;

window.onscroll = () => {
  if (isScroll) return;
  isScroll = true;
  setTimeout(() => {
    isScroll = false;
    oldScrollY = window.scrollY;
  }, 1000);

  const hello = document.getElementById('hello');
  const whyMe = document.getElementById('whyMe')! as HTMLElement;
  const portfolio = document.getElementById('portfolio');
  const skills = document.getElementById('skillsSlide');

  const slider = document.querySelector('the-page-slider')!;
  const blogSlide = document.querySelector('#blogSlide')! as HTMLElement;
  const header = document.querySelector('header')! as HTMLElement;
  const headersBottomWave = document.querySelector('#headersBottomWave')! as HTMLElement;
  const intrested = document.querySelector('#intrested')! as HTMLElement;
  const basement = document.querySelector('#basement')! as HTMLElement;
  const footer = document.querySelector('#footer')! as HTMLElement;

  const slides = [hello, whyMe, portfolio, skills, null, intrested, basement, footer];
  const newScroll = window.scrollY;
  const direction = oldScrollY < newScroll ? 'down' : 'up';

  oldScrollY = newScroll;
  if ((ind === 1 || ind === 2) && direction === 'down') {
    if (slides[ind].getBoundingClientRect().y > 0) return;
    const scrolled = slides[ind].getBoundingClientRect().height + slides[ind].getBoundingClientRect().y;

    if (window.innerHeight < scrolled) return;
  }

  // if (slides[ind].getBoundingClientRect().y > 0) return;
  // const scrolled =
  //   slides[ind].getBoundingClientRect().height + slides[ind].getBoundingClientRect().y;

  // if (window.innerHeight < scrolled) return;

  direction === 'down' ? (ind += 1) : (ind -= 1);

  if (ind === 4 && direction === 'down') {
    header.animate(
      {
        transform: 'translateY(-128px)'
      },
      {
        duration: 250,
        fill: 'forwards'
      }
    );
    headersBottomWave.animate(
      {
        transform: 'rotate(180deg) translateY(128px)'
      },
      {
        duration: 250,
        fill: 'forwards'
      }
    );
    blogSlide?.animate(
      {
        transform: 'translate(calc(-100vw - 100px), 0)'
      },
      {
        duration: 750,
        fill: 'forwards'
      }
    );
    return;
  }
  if (ind === 3 && direction === 'up') {
    header.animate(
      {
        transform: 'translate(0px)'
      },
      {
        duration: 250,
        fill: 'forwards'
      }
    );
    headersBottomWave.animate(
      {
        transform: 'rotate(180deg) translateY(6px)'
      },
      {
        duration: 250,
        fill: 'forwards'
      }
    );
    blogSlide?.animate(
      {
        transform: 'translate(0, 0)'
      },
      {
        duration: 750,
        fill: 'forwards'
      }
    );
  }
  if (ind < 0) ind = 0;
  if (ind === 4 && direction === 'up') {
    window.scrollTo(0, window.scrollY - window.innerHeight);
    return;
  }

  slides[ind] ? (slides[ind] as HTMLElement).scrollIntoView() : null;
};

// document.addEventListener('scroll', () => {
// const el = document.querySelector('the-page-slider')!;
// const blogSlide = document.querySelector('#blogSlide')! as any;
// const skillsSlide = document.querySelector('#skillsSlide')! as any;
// const header = document.querySelector('header')! as any;
// const headersBottomWave = document.querySelector('#headersBottomWave')! as any;

// const { top, height } = el.getBoundingClientRect();

// if (top < 0) {
//   header.style.display = 'none';
//   headersBottomWave.style.display = 'none';
//   const progress = ((~top + 1) / height) * 2 * 100;
//   console.log(progress);
//   if (progress > 100) {
//     header.style.top = '0';
//     headersBottomWave.style.top = '0';

//     blogSlide.style = `transform: translate(-100%, 100%)`;
//     skillsSlide.style = `transform: translate(-100%, 100%)`;
//   } else {
//     const res = `translate(${-progress}%, ${progress}%)`;
//     console.log(res);
//     blogSlide.animate([{ transform: res }], { duration: 200 });
//     skillsSlide.animate([{ transform: res }], { duration: 200 });

//     header.style.top = '-100px';
//     headersBottomWave.style.display = 'none';
//   }
// } else {
//   blogSlide.style = `transform: translateX(0%)`;
//   skillsSlide.style = `transform: translateX(0%)`;
//   header.style.display = 'flex';
//   headersBottomWave.style.display = 'block';
// }
// });
</script>

<template>
  <main>
    <TheHello />
    <TheHeader />
    <TheWhyMe />
    <ThePortfolio />
    <the-page-slider>
      <TheSkills id="skillsSlide" />
      <TheBlog id="blogSlide" />
    </the-page-slider>
    <TheIntrested id="intrested" />
    <TheBasement id="basement" />
    <TheFooter />
  </main>
</template>

<style scoped lang="sass">
the-page-slider
  display: flex
  width: 100vw
  height: 200vh
  overflow: hidden
  background: #A3B96E
  position: sticky
  top: 0
  z-index: -2
#blogSlide
  height: 100vh
  min-width: 100vw // there must be position sticky
</style>
