<script setup lang="ts">
import TheWhyMe from './slides/TheWhyMe.vue';
import TheHello from './slides/TheHello.vue';
import ThePortfolio from './slides/ThePortfolio.vue';
import TheSkills from './slides/TheSkills.vue';
import TheBlog from './slides/TheBlog.vue';
import TheInterested from './slides/TheInterested.vue';
import TheBasement from './slides/TheBasement.vue';
import TheFooter from './slides/TheFooter.vue';
import TheBasementAndFooter from './slides/TheBasementAndFooter.vue';
import TheNavigator from './elements/TheNavigator.vue';
import TheCursor from './elements/TheCursor.vue';

import scrolled from './store/scrolled';
import slide from './store/slide';

let currentSlide = 0;
let isScroll = false;

let start = 0;
let deltaY = 0;

function scrollable(slideContentId: string, direction: 'up' | 'down') {
  // isScroll = false;
  const page = document.getElementById(slideContentId)!; // take directly
  const localScrolled = (page.scrollTop / (page.scrollHeight - window.innerHeight)) * 100;
  if (direction === 'down') {
    if (localScrolled < 80 && localScrolled !== -1) {
      return false;
    } else {
      scrolled.changeScrolled(-1);
      // page.scrollTo(0, 0);
    }
  } else {
    if (localScrolled > 5 && localScrolled !== -1) {
      return false;
    } else {
      scrolled.changeScrolled(-1);
      // page.scrollTo(0, page.scrollHeight);
    }
  }
}

function transition(slides: any[], direction: 'up' | 'down') {
  if (direction === 'down') {
    if (slides[currentSlide].direction === 'right') {
      const [w1, w2, w3] = slides[currentSlide].element.children[0].children[0].children;
      if (w1 && w2 && w3) {
        [w1, w2, w3].forEach((e) => {
          e.style.transform = 'translateX(0%)';
        });

        w1.animate(
          {
            transform: 'translateX(-255%)'
          },
          {
            easing: 'cubic-bezier(.49,0,.64,1.06)',
            duration: 1500,
            fill: 'forwards'
          }
        );
        w2.animate(
          {
            transform: 'translateX(-255%)'
          },
          {
            easing: 'cubic-bezier(.49,0,.64,1.06)',
            duration: 1700,
            fill: 'forwards'
          }
        );
        w3.animate(
          {
            transform: 'translateX(-255%)'
          },
          {
            easing: 'cubic-bezier(.49,0,.64,1.06)',
            duration: 1900,
            fill: 'forwards'
          }
        );
        setTimeout(() => {
          slides[currentSlide].element.children[0].children[1].animate(
            {
              left: '-100%'
            },
            {
              easing: 'cubic-bezier(.49,0,.64,1.06)',
              duration: 900,
              fill: 'forwards'
            }
          );
        }, 400);
      }
      return;
    }
    if (slides[currentSlide]) {
      const [w1, w2, w3] = slides[currentSlide].element.children[0].children;
      if (w1 && w2 && w3) {
        [w1, w2, w3].forEach((e) => {
          e.style.transform = 'translateY(0)';
        });
        w1.animate(
          {
            transform: 'translateY(-200%)'
          },
          {
            easing: 'cubic-bezier(.49,0,.64,1.06)',
            duration: 1100,
            fill: 'forwards'
          }
        );
        w2.animate(
          {
            transform: 'translateY(-200%)'
          },
          {
            easing: 'cubic-bezier(.49,0,.64,1.06)',
            duration: 1400,
            fill: 'forwards'
          }
        );
        w3.animate(
          {
            transform: 'translateY(-200%)'
          },
          {
            easing: 'cubic-bezier(.49,0,.64,1.06)',
            duration: 1750,
            fill: 'forwards'
          }
        );
      }

      setTimeout(() => {
        slides[currentSlide].element.animate(
          {
            top: '0px'
          },
          {
            easing: 'cubic-bezier(.30,0,.64,1.10)',
            duration: 800,
            fill: 'forwards'
          }
        );
      }, 400);
      return;
    }
  } else {
    // up
    if (slides[currentSlide + 1].direction === 'right') {
      const [w1, w2, w3] = slides[currentSlide + 1].element.children[0].children[0].children;
      if (w1 && w2 && w3) {
        [w1, w2, w3].forEach((e) => {
          e.style.transform = 'translateX(-255%)';
        });
        w1.animate(
          {
            transform: 'translateX(0%)'
          },
          {
            easing: 'cubic-bezier(.49,0,.64,1.06)',
            duration: 1400,
            fill: 'forwards'
          }
        );
        w2.animate(
          {
            transform: 'translateX(0%)'
          },
          {
            easing: 'cubic-bezier(.49,0,.64,1.06)',
            duration: 1700,
            fill: 'forwards'
          }
        );
        w3.animate(
          {
            transform: 'translateX(0%)'
          },
          {
            easing: 'cubic-bezier(.49,0,.64,1.06)',
            duration: 1900,
            fill: 'forwards'
          }
        );
        setTimeout(() => {
          slides[currentSlide + 1].element.children[0].children[1].animate(
            {
              left: '100%'
            },
            {
              easing: 'cubic-bezier(1,0,.64,1.06)',
              duration: 450,
              fill: 'forwards'
            }
          );
        }, 700);
      }
      return;
    }
    if (slides[currentSlide + 1]) {
      const [w1, w2, w3] = slides[currentSlide + 1].element.children[0].children;
      if (w1 && w2 && w3) {
        [w1, w2, w3].forEach((e) => {
          e.style.transform = 'translateY(-200%)';
        });

        w1.animate(
          {
            transform: 'translateY(0)'
          },
          {
            easing: 'cubic-bezier(.49,0,.64,1.06)',
            duration: 1100,
            fill: 'forwards'
          }
        );
        w2.animate(
          {
            transform: 'translateY(0)'
          },
          {
            easing: 'cubic-bezier(.49,0,.64,1.06)',
            duration: 1000,
            fill: 'forwards'
          }
        );
        w3.animate(
          {
            transform: 'translateY(0)'
          },
          {
            easing: 'cubic-bezier(.49,0,.64,1.06)',
            duration: 1500,
            fill: 'forwards'
          }
        );
      }
      setTimeout(() => {
        slides[currentSlide + 1].element.animate(
          {
            top: '100%'
          },
          {
            easing: 'cubic-bezier(.30,0,.64,1.10)',
            duration: 750,
            fill: 'forwards'
          }
        );
      }, 300);
      return;
    }
  }
}
function changeSlide(deltaY: number = 0) {
  const hi = document.getElementById('hello')!;
  const whyMe = document.getElementById('whyMe')!;
  const portfolio = document.getElementById('portfolio')!;
  const skills = document.getElementById('skills')!;
  const blog = document.getElementById('blog')!;
  const interested = document.getElementById('interested')!;
  const baseFooter = document.getElementById('baseFooter')!;

  const slides = [
    { name: 'hello', element: hi, bonus: 0, direction: 'down' },
    { name: 'whyMe', element: whyMe, bonus: 300, direction: 'down' },
    { name: 'portfolio', element: portfolio, bonus: 300, direction: 'down' },
    { name: 'skills', element: skills, bonus: 300, direction: 'down' },
    { name: 'blog', element: blog, bonus: 300, direction: 'right' },
    { name: 'interested', element: interested, bonus: 300, direction: 'down' },
    { name: 'baseFooter', element: baseFooter, bonus: 300, direction: 'down' }
  ];

  if (deltaY > 0) {
    // down
    if (isScroll) return;
    isScroll = true;
    setTimeout(() => (isScroll = false), 1000);

    if (slides[currentSlide].name === 'whyMe') {
      document.getElementById('page')?.focus();
      if (scrollable('page', 'down') === false) return;
    }
    if (slides[currentSlide].name === 'portfolio') {
      document.getElementById('page1')?.focus();
      if (scrollable('page1', 'down') === false) return;
    }
    if (slides[currentSlide].name === 'skills') {
      if (scrollable('pageSkills', 'down') === false) return;
    }
    if (slides[currentSlide].name === 'baseFooter') {
      document.getElementById('page2')?.focus();
      if (scrollable('page2', 'down') === false) return;
    }

    currentSlide++;
    if (currentSlide >= slides.length) return (currentSlide = slides.length - 1);
    slide.change(currentSlide);

    transition(slides, 'down');
  } else {
    // up
    if (isScroll) return;
    isScroll = true;
    setTimeout(() => (isScroll = false), 1000);

    if (currentSlide === 1) {
      document.getElementById('page')?.focus();
      if (scrollable('page', 'up') === false) return;
    }
    if (currentSlide === 2) {
      document.getElementById('page1')?.focus();
      if (scrollable('page1', 'up') === false) return;
    }
    if (slides[currentSlide].name === 'skills') {
      if (scrollable('pageSkills', 'up') === false) return;
    }
    if (currentSlide === 6) {
      document.getElementById('page2')?.focus();
      if (scrollable('page2', 'up') === false) return;
    }

    currentSlide--;
    if (currentSlide < 0) return (currentSlide = 0);
    slide.change(currentSlide);
    transition(slides, 'up');
  }
}

window.addEventListener('touchstart', (e) => {
  start = e.touches[0].clientY;
});
window.addEventListener('touchmove', (e) => {
  deltaY = -(e.touches[0].clientY - start);
  changeSlide(deltaY);
});

window.addEventListener('load', console.log);

window.addEventListener('wheel', (e) => {
  changeSlide(e.deltaY);
});
window.addEventListener('keydown', (e) => {
  const key = e.key.toUpperCase() as 'ARROWDOWN' | 'ARROWUP' | 'S' | 'W';
  if (key === 'ARROWDOWN' || key === 'S') return changeSlide(1);
  if (key === 'ARROWUP' || key === 'W') return changeSlide(-1);
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
    <!-- <TheBasement />
    <TheFooter /> -->
  </main>
</template>
<style lang="sass" scoped>
main
  max-width: 100vw
  max-height: 100vh
  overflow: hidden
</style>
