<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const randomF = (min: number, max: number) => Math.random() * (max - min) + min;
let [pointerX, pointerY] = [0, 0];
const isFocused = ref(false);

onMounted(() => {
  const cursor = document.getElementById('cursor')!;
  const cursor1 = document.getElementById('cursor1')!;
  setInterval(() => {
    if (isFocused.value) return;

    const { x, y } = cursor.getBoundingClientRect();
    [cursor, cursor1].forEach((e) => {
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
    if (
      eTarget.id === 'portfImg' ||
      eTarget.id === 'interestedBtn' ||
      eTarget.tagName === 'INPUT' ||
      eTarget.tagName === 'TEXTAREA' ||
      eTarget.tagName === 'BUTTON' ||
      eTarget.id === 'interestedBtnChild'
    ) {
      const {
        left: targX,
        top: targY,
        width: targWidth,
        height: targHeight
      } = eTarget.getBoundingClientRect();
      isFocused.value = true;
      [cursor, cursor1].forEach((e, i) => {

      e.animate(
        {
          transform: 'translate(0, 0)',
          left: targX + 'px',
          top: targY + 'px',
          width: targWidth + 'px',
          height: targHeight + 'px',
          borderRadius: '12px'
        },
        {
          duration: i == 0 ? 1000 : 3000,
          fill: 'forwards'
        }
      );
      })
      return;
    }
    isFocused.value = false;

    [cursor, cursor1].forEach((e, i) => {
      e.animate(
        {
          transform: `translate(${x - 6}px, ${y - 6}px)`,
          left: 0,
          top: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%'
        },
        {
          duration: 100 + i * 500,
          fill: 'forwards',
          easing: 'ease-in-out'
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
    background: rgb(255, 255, 255)
    position: fixed
    border-radius: 50%
    z-index: 1500
    pointer-events: none
    mix-blend-mode: exclusion
#cursor1
  background: rgb(255, 0, 128)
  mix-blend-mode: soft-light
@media screen and (max-width: 600px)
    .cursor
        display: none
</style>
