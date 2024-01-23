<script setup lang="ts">
import TheArrow from '@/SVG/TheArrow.vue';
import eCommerce from '@/assets/eCommerce.jpg';
import mowopedia from '@/assets/mowopedia.jpg';
import star from '@/assets/star.svg';
import { ref } from 'vue';

interface IProject {
  name: string;
  description: string;
  status: 'In developing' | 'Released';
  rate: number;
  img: string;
}
const projects: IProject[] = [
  {
    name: 'Mowopedia',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    status: 'In developing',
    rate: 1,
    img: mowopedia
  },
  {
    name: 'eCommerce',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    status: 'In developing',
    rate: 2,
    img: eCommerce
  }
];
const showAble = ref(2);
if (window.innerWidth < 1366) showAble.value = 1;
document.addEventListener('mousemove', () => {
  // any, NEEDS TO CHANGEG KINDA EVENT
  if (window.innerWidth < 1350) return showAble.value = 1;
  if (window.innerWidth > 1350) return showAble.value = 2;
});
</script>
<template>
  <the-slider>
    <slider-button>
      <TheArrow />
    </slider-button>
    <slider-content>
      <slider-element
        v-for="({ name, description, status, rate, img }, index) in projects.slice(0, showAble)"
        :key="index"
      >
        <img :src="img" />
        <slider-element-info>
          <slider-element-rate>
            <img :src="star" />
            <p>{{ rate }}</p>
          </slider-element-rate>
          <slider-element-status>{{ status }}</slider-element-status>
        </slider-element-info>
        <slider-element-description>
          <h1>{{ name }}</h1>
          <p>
            {{ description }}
          </p>
        </slider-element-description>
      </slider-element>
    </slider-content>
    <slider-button>
      <TheArrow />
    </slider-button>
  </the-slider>
</template>

<style scoped lang="sass">
the-slider
    display: flex
    justify-content: space-between
    gap: 48px
    padding: 0 48px
    padding-bottom: 64px
slider-button
    display: block
    width: min-content
    &:first-child, &:last-child
        height: 280px
        display: flex
        align-items: center
    &:last-child
        &>svg
            transform: rotateY(180deg)

slider-content
    display: flex
    justify-content: space-between
    gap: 48px

slider-element
    display: flex
    flex-direction: column
    gap: 48px
    font-size: 24px
    font-weight: 800
    &>img
        border-radius: 12px

    &-info
        background: #46546C
        padding: 12px 24px
        border-radius: 12px
        display: flex
        justify-content: space-between
    &-rate
        display: flex
        gap: 6px
</style>
