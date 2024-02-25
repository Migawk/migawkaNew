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
          duration: 250,
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
          duration: 250,
          fill: 'forwards'
        }
      );
    } else if (this.current > 4) {
      pointer?.animate(
        {
          top: 30 * this.current - 30 + 'px'
        },
        {
          duration: 250,
          fill: 'forwards'
        }
      );
    }
  }
});

export default slide;
