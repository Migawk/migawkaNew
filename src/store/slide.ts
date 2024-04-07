import { reactive } from 'vue';
import scrolled from './scrolled';

function scrollable(slideContentId: string, direction: 'up' | 'down') {
  const page = document.getElementById(slideContentId)!; // take directly
  let localScrolled = (page.scrollTop / (page.scrollHeight - window.innerHeight)) * 100;

  if (direction === 'down') {
    if (Math.abs(page.scrollHeight - window.innerHeight) < 10) localScrolled = 100;
    if (localScrolled < 50 && localScrolled !== -1) {
      return false;
    } else {
      scrolled.changeScrolled(-1);
    }
  } else {
    if (localScrolled > 5 && localScrolled !== -1) {
      return false;
    } else {
      scrolled.changeScrolled(-1);
    }
  }
}
function transition(slides: any[], direction: 'up' | 'down') {
  if (direction === 'down') {
    setTimeout(() => {
      slides[slide.current - 1].element.style.display = 'none';
    }, 1200);
    slides[slide.current].element.style.display = 'block';

    if (slides[slide.current].direction === 'right') {
      const [w1, w2, w3] = slides[slide.current].element.children[0].children[0].children;

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
            duration: 2000,
            fill: 'forwards'
          }
        );
        w2.animate(
          {
            transform: 'translateX(-255%)'
          },
          {
            easing: 'cubic-bezier(.49,0,.64,1.06)',
            duration: 2400,
            fill: 'forwards'
          }
        );
        w3.animate(
          {
            transform: 'translateX(-255%)'
          },
          {
            easing: 'cubic-bezier(.49,0,.64,1.06)',
            duration: 2800,
            fill: 'forwards'
          }
        );

        setTimeout(() => {
          slides[slide.current].element.children[0].animate(
            {
              left: '0%'
            },
            {
              easing: 'cubic-bezier(.49,0,.64,1.06)',
              duration: 800,
              fill: 'forwards'
            }
          );
        }, 900);
      }
      return;
    }
    if (slides[slide.current]) {
      const [w1, w2, w3] = slides[slide.current].element.children[0].children;
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
        slides[slide.current].element.animate(
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
    setTimeout(() => {
      slides[slide.current + 1].element.style.display = 'none';
    }, 3000);

    slides[slide.current].element.style.display = 'block';

    if(slides[slide.current].direction) {
      slides[slide.current].element.children[0].style.left = "0%";
    };
    if (slides[slide.current + 1].direction === 'right') {
      const [w1, w2, w3] = slides[slide.current + 1].element.children[0].children[0].children;
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
            duration: 2000,
            fill: 'forwards'
          }
        );
        w2.animate(
          {
            transform: 'translateX(0%)'
          },
          {
            easing: 'cubic-bezier(.49,0,.64,1.06)',
            duration: 2500,
            fill: 'forwards'
          }
        );
        w3.animate(
          {
            transform: 'translateX(0%)'
          },
          {
            easing: 'cubic-bezier(.49,0,.64,1.06)',
            duration: 2600,
            fill: 'forwards'
          }
        );
        setTimeout(() => {
          slides[slide.current + 1].element.children[0].animate(
            {
              left: '100%'
            },
            {
              easing: 'cubic-bezier(.49,0,.64,1.06)',
              duration: 800,
              fill: 'forwards'
            }
          );
        }, 800);
      }
      return;
    }
    if (slides[slide.current + 1]) {
      const [w1, w2, w3] = slides[slide.current + 1].element.children[0].children;
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
        slides[slide.current + 1].element.animate(
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

const slide = reactive({
  current: 0,
  isScroll: false,
  deltaY: 0,
  changeDelta(newDelta: number) {
    this.deltaY = newDelta;
  },
  changeScroll(toggle: boolean) {
    this.isScroll = toggle;
  },
  change(newSlide?: number) {
    localStorage.setItem("slide", this.current.toString());
    const pointer = document.getElementById('navPointer')!;
    
    if (this.current < 4) {
      pointer.animate(
        {
          top: 30 * this.current + 'px',
          left: '0px'
        },
        {
          easing: 'cubic-bezier(.2,.95,.38,.74)',
          duration: 1250,
          fill: 'forwards'
        }
      );
    } else if (this.current === 4) {
      pointer?.animate(
        {
          left: '30px',
          top: 30 * this.current - 30 + 'px'
        },
        {
          easing: 'cubic-bezier(.2,.95,.38,.74)',
          duration: 1250,
          fill: 'forwards'
        }
      );
    } else if (this.current > 4) {
      pointer?.animate(
        {
          left: '30px',
          top: 30 * this.current - 30 + 'px'
        },
        {
          easing: 'cubic-bezier(.2,.95,.38,.74)',
          duration: 1250,
          fill: 'forwards'
        }
      );
    }

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

    if (newSlide) {
      this.current = newSlide;
      slides[this.current].element.style.top = '0';
      slides[this.current].element.style.left = '0';
      slides[this.current].element.style.transform = 'translate(0, 0)';
      slides[this.current].element.style.display = 'block';
      (slides[this.current].element.children[0] as HTMLElement).style.left = '0%';

      slides.slice(0, this.current).forEach((e) => {
        e.element.style.top = '0px';
        e.element.style.left = '0px';
        e.element.style.display = 'none';
      });
      slides.slice(this.current + 1, slides.length).forEach((e) => {
        e.element.style.display = 'none';
        if (e.direction === 'right') {
          // (e.element.children[0] as HTMLElement).style.left = '0%';
        } else {
          e.element.style.top = '100%';
        }
      });

      if (slides[this.current].name === 'blog')
        (slides[this.current].element.children[0].children[1] as HTMLElement).style.left = '-100%';
      return;
    }

    if (Math.abs(this.deltaY) < 60) return;
    if (this.deltaY > 0) {
      // down
      if (slide.isScroll) return;
      slide.isScroll = true;
      setTimeout(() => (slide.isScroll = false), 2000);

      if (slides[this.current].name === 'whyMe') {
        document.getElementById('page')?.focus();
        if (scrollable('page', 'down') === false) return;
      }
      if (slides[this.current].name === 'portfolio') {
        document.getElementById('page1')?.focus();
        if (scrollable('page1', 'down') === false) return;
      }
      if (slides[this.current].name === 'skills') {
        if (scrollable('pageSkills', 'down') === false) return;
      }
      if (slides[this.current].name === 'baseFooter') {
        document.getElementById('page2')?.focus();
        if (scrollable('page2', 'down') === false) return;
      }

      this.current++;
      if (this.current >= slides.length) return (this.current = slides.length - 1);

      transition(slides, 'down');
    } else {
      // up
      if (slide.isScroll) return;
      slide.isScroll = true;
      setTimeout(() => (slide.isScroll = false), 2000);

      if (this.current === 1) {
        document.getElementById('page')?.focus();
        if (scrollable('page', 'up') === false) return;
      }
      if (this.current === 2) {
        document.getElementById('page1')?.focus();
        if (scrollable('page1', 'up') === false) return;
      }
      if (slides[this.current].name === 'skills') {
        if (scrollable('pageSkills', 'up') === false) return;
      }
      if (this.current === 6) {
        document.getElementById('page2')?.focus();
        if (scrollable('page2', 'up') === false) return;
      }

      this.current--;
      if (this.current < 0) return (this.current = 0);
      transition(slides, 'up');
    }
  }
});

export default slide;
