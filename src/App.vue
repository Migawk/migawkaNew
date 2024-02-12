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
let isChromeLike = false;

if (navigator.userAgent.indexOf('Chrome') !== -1) isChromeLike = true;
setTimeout(() => console.log(isChromeLike), 100);

document.addEventListener('wheel', (e) => {
  const hello = document.getElementById('hello');
  const whyMe = document.getElementById('whyMe')! as HTMLElement;
  const portfolio = document.getElementById('portfolio');
  const skills = document.getElementById('skillsSlide');
  const header = document.querySelector('header')! as HTMLElement;
  const headersBottomWave = document.querySelector('#headersBottomWave')! as HTMLElement;
  const intrested = document.querySelector('#intrested')! as HTMLElement;
  const basement = document.querySelector('#basement')! as HTMLElement;
  const footer = document.querySelector('#footer')! as HTMLElement;
  const slides = [hello, whyMe, portfolio, skills, null, intrested, basement, footer];
  console.log(e.deltaY);
});
// window.onscroll = () => {
//   const hello = document.getElementById('hello');
//   const whyMe = document.getElementById('whyMe')! as HTMLElement;
//   const portfolio = document.getElementById('portfolio');
//   const skills = document.getElementById('skillsSlide');
//   const header = document.querySelector('header')! as HTMLElement;
//   const headersBottomWave = document.querySelector('#headersBottomWave')! as HTMLElement;
//   const intrested = document.querySelector('#intrested')! as HTMLElement;
//   const basement = document.querySelector('#basement')! as HTMLElement;
//   const footer = document.querySelector('#footer')! as HTMLElement;
//   const slides = [hello, whyMe, portfolio, skills, null, intrested, basement, footer];

//   if (isChromeLike) {
//     if(isScroll) return;
//     isScroll = true;

//     setTimeout(() => {
//       isScroll = false;
//       oldScrollY = window.scrollY;
//     }, 1000);

//     const newScroll = window.scrollY;
//     const direction = oldScrollY < newScroll ? 'down' : 'up';

//     oldScrollY = newScroll;

//     if(direction === 'down') {
//       ind++;
//     } else {
//       ind--;
//     }
//     if (ind < 0) ind = 0;
//     if (ind > 7) ind = 7;

//     console.log(ind, slides[ind]);

//     return;
//   } else {
//     if (isScroll) {
//       if (ind === 1 || ind === 2 || ind === 4) return;
//       const scrollTo = Math.abs(
//         Math.round(window.scrollY + (slides[ind] as HTMLElement).getBoundingClientRect().top)
//       );
//       slides[ind] ? window.scrollTo(0, scrollTo) : null;
//       return;
//     }
//     isScroll = true;
//     setTimeout(() => {
//       isScroll = false;
//       oldScrollY = window.scrollY;
//     }, 1000);

//     const blogSlide = document.querySelector('#blogSlide')! as HTMLElement;
//     const [bW1, bW2] = [
//       document.querySelector('#blogWave1')!,
//       document.querySelector('#blogWave2')!
//     ];

//     const newScroll = window.scrollY;
//     const direction = oldScrollY < newScroll ? 'down' : 'up';
//     oldScrollY = newScroll;

//     if ((ind === 1 || ind === 2) && direction === 'down') {
//       if (slides[ind]!.getBoundingClientRect().y > 0) return;
//       const scrolled =
//         slides[ind]!.getBoundingClientRect().height + slides[ind]!.getBoundingClientRect().y;

//       if (window.innerHeight < scrolled) return;
//     }

//     direction === 'down' ? (ind += 1) : (ind -= 1);

//     console.log(ind, direction);

//     if (ind === 3 && direction === 'up') {
//       header.animate(
//         {
//           transform: 'translate(0px)'
//         },
//         {
//           duration: 250,
//           fill: 'forwards'
//         }
//       );
//       headersBottomWave.animate(
//         {
//           transform: 'rotate(180deg) translateY(6px)'
//         },
//         {
//           duration: 250,
//           fill: 'forwards'
//         }
//       );
//       blogSlide.animate(
//         {
//           transform: 'translate(0, 0)'
//         },
//         {
//           duration: 1000,
//           fill: 'forwards'
//         }
//       );
//       bW1.animate(
//         {
//           transform: 'translate(0px)'
//         },
//         {
//           duration: 4000,
//           fill: 'forwards'
//         }
//       );
//       bW2.animate(
//         {
//           transform: 'translate(0px)'
//         },
//         {
//           duration: 1000,
//           fill: 'forwards'
//         }
//       );
//     }
//     if (ind === 3 && direction === 'down') {
//       window.scrollTo(0, window.scrollY + (skills as HTMLElement).getBoundingClientRect().top);
//       return;
//     }
//     if (ind === 4 && direction !== 'down') {
//       window.scrollTo(0, window.scrollY + (skills as HTMLElement).getBoundingClientRect().top);
//       return;
//     }
//     if (ind === 4 && direction === 'down') {
//       window.scrollTo(0, window.scrollY + (skills as HTMLElement).getBoundingClientRect().top);
//       header.animate(
//         {
//           transform: 'translateY(-128px)'
//         },
//         {
//           duration: 250,
//           fill: 'forwards'
//         }
//       );
//       headersBottomWave.animate(
//         {
//           transform: 'rotate(180deg) translateY(128px)'
//         },
//         {
//           duration: 250,
//           fill: 'forwards'
//         }
//       );
//       blogSlide.animate(
//         {
//           transform: 'translate(calc(-100vw - 512px), 0)'
//         },
//         {
//           duration: 1000,
//           fill: 'forwards'
//         }
//       );
//       bW1.animate(
//         {
//           transform: 'translate(-128px)'
//         },
//         {
//           duration: 1000,
//           fill: 'forwards',
//           easing: 'cubic-bezier(1,.25,1,.25)'
//         }
//       );
//       bW2.animate(
//         {
//           transform: 'translate(-48px)'
//         },
//         {
//           duration: 1000,
//           fill: 'forwards'
//         }
//       );
//       return;
//     }

//     if (ind < 0) ind = 0;
//     if (ind > 7) ind = 7;

//     if (ind === 4 && direction === 'up') {
//       window.scrollTo(0, window.scrollY - window.innerHeight);
//       return;
//     }
//     const scrollTo = Math.abs(
//       Math.round(window.scrollY + (slides[ind] as HTMLElement).getBoundingClientRect().top)
//     );

//     slides[ind]
//       ? setTimeout(() => {
//           window.scrollTo(0, scrollTo);
//         }, 1)
//       : null;
//   }
// };
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

<style scoped lang="sass" v-if="!isChromeLike">
main
  max-width: 100vw
  min-height: 100vh
  box-sizing: content-box
  overflow: hidden
the-page-slider
  display: flex
  max-width: 100vw
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
<style lang="sass" v-if="isChromeLike">
main
  width: 100%
  max-height: 100%
  overflow: hidden
  position: absolute
#whyMe,
#portfolio
  position: absolute
</style>
