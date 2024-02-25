import { reactive } from 'vue';

const slide = reactive({
  current: 0,
  change(num: number) {
    this.current = num;
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
  }
});

export default slide;
