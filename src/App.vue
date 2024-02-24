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
import TheBasementAndFooter from './slides/TheBasementAndFooter.vue';

let currentSlide = 0;
let isScroll = false;

let start = 0;
let deltaY = 0;

function scrollable(slideContentId: string, direction: 'up' | 'down') {
  // isScroll = false;
  const page = document.getElementById(slideContentId)!; // take directly
  const localScrolled = (page.scrollTop / (page.scrollHeight - window.innerHeight)) * 100;
  if (direction === 'down') {
    if (localScrolled < 95 && localScrolled !== -1) {
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
      const [w1, w2, w3] = slides[currentSlide].element.children[0].children;
      if (w1 && w2 && w3) {
        w1.animate(
          {
            left: '-200%'
          },
          {
            easing: 'cubic-bezier(.49,0,.64,1.06)',
            duration: 1500,
            fill: 'forwards'
          }
        );
        w2.animate(
          {
            left: '-200%'
          },
          {
            easing: 'cubic-bezier(.49,0,.64,1.06)',
            duration: 1700,
            fill: 'forwards'
          }
        );
        w3.animate(
          {
            left: '-200%'
          },
          {
            easing: 'cubic-bezier(.49,0,.64,1.06)',
            duration: 1900,
            fill: 'forwards'
          }
        );
        slides[currentSlide].element.children[1].animate({
          left: '-100%'
        }, {
          easing: 'cubic-bezier(.49,0,.64,1.06)',
            duration: 1700,
            fill: 'forwards'
        });
      }
      return;
    }
    if (slides[currentSlide]) {
      const [w1, w2, w3] = slides[currentSlide].element.children[0].children;
      if (w1 && w2 && w3) {
        w1.animate(
          {
            top: '-220%'
          },
          {
            easing: 'cubic-bezier(.2,.95,.38,.74)',
            duration: 1500,
            fill: 'forwards'
          }
        );
        setTimeout(() => {
          w2.animate(
            {
              top: '-220%'
            },
            {
              easing: 'cubic-bezier(.49,0,.64,1.06)',
              duration: 1500,
              fill: 'forwards'
            }
          );
        }, 100);
        setTimeout(() => {
          w3.animate(
            {
              top: '-220%'
            },
            {
              easing: 'cubic-bezier(.49,0,.64,1.06)',
              duration: 1750,
              fill: 'forwards'
            }
          );
        }, 200);
      }

      setTimeout(() => {
        slides[currentSlide].element.animate(
          {
            top: '0px'
          },
          {
            easing: 'cubic-bezier(.30,0,.64,1.10)',
            duration: 1500,
            fill: 'forwards'
          }
        );
      }, 200);
      return;
    }
  } else { // up
    if (slides[currentSlide + 1].direction === 'right') {
      const [w1, w2, w3] = slides[currentSlide + 1].element.children[0].children;
      if (w1 && w2 && w3) {
        w1.animate(
          {
            left: '100%'
          },
          {
            easing: 'cubic-bezier(.49,0,.64,1.06)',
            duration: 1500,
            fill: 'forwards'
          }
        );
        w2.animate(
          {
            left: '100%'
          },
          {
            easing: 'cubic-bezier(.49,0,.64,1.06)',
            duration: 1700,
            fill: 'forwards'
          }
        );
        w3.animate(
          {
            left: '100%'
          },
          {
            easing: 'cubic-bezier(.49,0,.64,1.06)',
            duration: 1900,
            fill: 'forwards'
          }
        );
        slides[currentSlide + 1].element.children[1].animate({
          left: '100%'
        }, {
          easing: 'cubic-bezier(.49,0,.64,1.06)',
            duration: 1700,
            fill: 'forwards'
        });
      }
      return;
    }
    if (slides[currentSlide + 1]) {
      const [w1, w2, w3] = slides[currentSlide + 1].element.children[0].children;
      if (w1 && w2 && w3) {
        w1.animate(
          {
            top: '100%'
          },
          {
            easing: 'cubic-bezier(.2,.95,.38,.74)',
            duration: 2000,
            fill: 'forwards'
          }
        );
        setTimeout(() => {
          w2.animate(
            {
              top: '100%'
            },
            {
              easing: 'cubic-bezier(.49,0,.64,1.06)',
              duration: 1000,
              fill: 'forwards'
            }
          );
        }, 100);
        setTimeout(() => {
          w3.animate(
            {
              top: '100%'
            },
            {
              easing: 'cubic-bezier(.49,0,.64,1.06)',
              duration: 1500,
              fill: 'forwards'
            }
          );
        }, 200);
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
      }, 200);
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
    { name: 'interested', element: interested, bonus: 0, direction: 'down' },
    { name: 'baseFooter', element: baseFooter, bonus: 0, direction: 'down' }
  ];

  if (deltaY > 0) {
    // down
    if (isScroll) return;
    isScroll = true;
    setTimeout(() => (isScroll = false), 1000);

    if (slides[currentSlide].name === 'whyMe') {
      if (scrollable('page', 'down') === false) return;
    }
    if (slides[currentSlide].name === 'portfolio') {
      if (scrollable('page1', 'down') === false) return;
    }
    if (slides[currentSlide].name === 'baseFooter') {
      if (scrollable('page2', 'down') === false) return;
    }

    currentSlide++;
    if (currentSlide >= slides.length) return (currentSlide = slides.length - 1);

    transition(slides, 'down');
  } else {
    // up
    if (isScroll) return;
    isScroll = true;
    setTimeout(() => (isScroll = false), 1000);

    if (currentSlide === 1) {
      if (scrollable('page', 'up') === false) return;
    }
    if (currentSlide === 2) {
      if (scrollable('page1', 'up') === false) return;
    }
    if (currentSlide === 6) {
      if (scrollable('page2', 'up') === false) return;
    }

    currentSlide--;
    if (currentSlide < 0) return (currentSlide = 0);
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

window.addEventListener('wheel', (e) => {
  changeSlide(e.deltaY);
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
