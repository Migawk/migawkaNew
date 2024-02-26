<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const randomF = (min: number, max: number) => Math.random() * (max - min) + min;
let [pointerX, pointerY] = [0, 0];
const isFocused = ref(false);

onMounted(() => {
  const cursor = document.getElementById('cursor')!;
  const cursor1 = document.getElementById('cursor1')!;
  setInterval(() => {
    if(isFocused.value) return;
    const { x, y } = cursor.getBoundingClientRect();
    [cursor, cursor1].forEach((e, i) => {
      e.animate(
        {
          transform: `translate(${pointerX + randomF(-4, 4)}px, ${pointerY + randomF(-4, 4)}px)`
        },
        {
          duration: 5000,
          fill: 'forwards',
          easing: 'ease-in-out'
        }
      );
    });
  }, 100);
  document.addEventListener('mousemove', (e) => {
    const [x, y] = [e.clientX, e.clientY];
    [pointerX, pointerY] = [x, y];
    const eTarget = e.target as HTMLElement;
    if(eTarget.id === 'portfImg') {
      const {left: targX, top: targY, width: targWidth, height: targHeight} = eTarget.getBoundingClientRect();
      isFocused.value = true;
      cursor.animate({
        transform: 'translate(0, 0)',
        left: targX + 'px',
        top: targY + 'px',
        width: targWidth + 'px',
        height: targHeight + 'px',
        borderRadius: '12px'
      }, {
        duration: 1000,
        fill: 'forwards'
      });
      return;
    }
    console.log('passed');

    [cursor, cursor1].forEach((e, i) => {
      e.animate(
        {
          transform: `translate(${x - 6}px, ${y - 6}px)`,
          left: 0,
          top: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
        },
        {
          duration: 200 + i * 500,
          fill: 'forwards',
          // easing: 'cubic-bezier(.95,.21,1,1.2)'
        }
      );
    });
  });
});
</script>
<template>
  <div class="cursor" id="cursor"></div>
  <div class="cursor" id="cursor1"></div>
</template>
<style lang="sass" scoped>
.cursor
    width: 8px
    height: 8px
    background: rgba(255, 255, 255, 1)
    position: fixed
    border-radius: 50%
    left: 0
    right: 0
    z-index: 1500
    pointer-events: none
    mix-blend-mode: exclusion
    border: 1px solid #00f

@media screen and (max-width: 600px)
    .cursor
        display: none
</style>
