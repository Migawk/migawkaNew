<script lang="ts" setup>
import Wave from '@/SVG/BlogWave.vue';
</script>
<template>
  <article id="blog" class="wrapper">
    <div class="waves">
      <div class="wave1">
        <svg viewBox="0 0 224 600" xmlns="http://www.w3.org/2000/svg">
          <path
            id="path1"
            d="m0 600 19.94-14.3c19.94-14.4 59.81-43 68.84-71.5 8.913-28.5-12.9-56.9-31.55-85.4-18.53-28.5-33.78-57.1-32.25-85.8 1.642-28.7 19.94-57.3 18.76-86-1.173-28.7-21.81-57.3-22.63-85.8s18.41-56.9 34.01-85.4c15.6-28.5 27.79-57.1 33.78-71.5l6.098-14.3h129v14.3 71.5 85.4 85.8 86 85.8 85.4 71.5 14.3z"
            fill="#808"
            stroke-linecap="round"
            stroke-width="1.083"
          />
        </svg>
        <div class="wave1Bg"></div>
        <svg viewBox="0 0 224 600" xmlns="http://www.w3.org/2000/svg">
          <path
            id="path1"
            d="m0 600 19.94-14.3c19.94-14.4 59.81-43 68.84-71.5 8.913-28.5-12.9-56.9-31.55-85.4-18.53-28.5-33.78-57.1-32.25-85.8 1.642-28.7 19.94-57.3 18.76-86-1.173-28.7-21.81-57.3-22.63-85.8s18.41-56.9 34.01-85.4c15.6-28.5 27.79-57.1 33.78-71.5l6.098-14.3h129v14.3 71.5 85.4 85.8 86 85.8 85.4 71.5 14.3z"
            fill="#808"
            stroke-linecap="round"
            stroke-width="1.083"
          />
        </svg>
      </div>
      <div class="wave2">
        <svg viewBox="0 0 224 600" xmlns="http://www.w3.org/2000/svg">
          <path
            id="path1"
            d="m81.84 600-9.519-14.3c-9.519-14.4-28.56-43-19.67-71.5 8.885-28.5 45.69-56.9 49.5-85.4 3.808-28.5-25.38-57.1-30.21-85.8-4.95-28.7 14.6-57.3 2.665-86-11.8-28.7-54.96-57.3-69.17-85.8-14.09-28.5 0.6346-56.9 27.8-85.4 27.04-28.5 66.38-57.1 86.06-71.5l19.67-14.3h85.04v14.3 71.5 85.4 85.8 86 85.8 85.4 71.5 14.3z"
            fill="#9a5021"
            stroke-linecap="round"
            stroke-width="1.127"
          />
        </svg>
        <div class="wave2Bg"></div>
        <svg viewBox="0 0 224 600" xmlns="http://www.w3.org/2000/svg">
          <path
            id="path1"
            d="m81.84 600-9.519-14.3c-9.519-14.4-28.56-43-19.67-71.5 8.885-28.5 45.69-56.9 49.5-85.4 3.808-28.5-25.38-57.1-30.21-85.8-4.95-28.7 14.6-57.3 2.665-86-11.8-28.7-54.96-57.3-69.17-85.8-14.09-28.5 0.6346-56.9 27.8-85.4 27.04-28.5 66.38-57.1 86.06-71.5l19.67-14.3h85.04v14.3 71.5 85.4 85.8 86 85.8 85.4 71.5 14.3z"
            fill="#9a5021"
            stroke-linecap="round"
            stroke-width="1.127"
          />
        </svg>
      </div>
      <div class="wave3">
        <svg viewBox="0 0 224 600" xmlns="http://www.w3.org/2000/svg">
          <path
            id="path1"
            d="m81.92 600 8.576-14.3c8.448-14.4 25.6-43 30.08-71.5s-3.712-56.9-30.59-85.4-72.45-57.1-78.72-85.8c-6.144-28.7 27.14-57.3 51.2-86 24.19-28.7 39.04-57.3 44.42-85.8s1.024-56.9-18.3-85.4c-19.46-28.5-54.02-57.1-71.3-71.5l-17.28-14.3h224v14.3 71.5 85.4 85.8 86 85.8 85.4 71.5 14.3z"
            fill="#648764"
            stroke-linecap="round"
            stroke-width="1.131"
          />
        </svg>
        <div class="wave3Bg"></div>
        <svg viewBox="0 0 224 600" xmlns="http://www.w3.org/2000/svg">
          <path
            id="path1"
            d="m81.92 600 8.576-14.3c8.448-14.4 25.6-43 30.08-71.5s-3.712-56.9-30.59-85.4-72.45-57.1-78.72-85.8c-6.144-28.7 27.14-57.3 51.2-86 24.19-28.7 39.04-57.3 44.42-85.8s1.024-56.9-18.3-85.4c-19.46-28.5-54.02-57.1-71.3-71.5l-17.28-14.3h224v14.3 71.5 85.4 85.8 86 85.8 85.4 71.5 14.3z"
            fill="#648764"
            stroke-linecap="round"
            stroke-width="1.131"
          />
        </svg>
      </div>
    </div>
    <div class="page">
      <h1>The Blog</h1>
      <h2>There is nothing</h2>
      <p>✖╭╮✖</p>
    </div>
  </article>
</template>
<style lang="sass" scoped>
article
    position: relative

.wrapper
  position: absolute
  left: 100%
  top: 0
  transform: translateY(-100%)
  width: 100vw
  height: 100vh

.page
    background: #648764
    width: 100%
    height: 100%
    padding: 64px
    text-align: center
    color: #fff
    position: absolute
    left: 100%
    top: 100%
h1
    font-size: 108px

p
    color: #B04F4F
    font-size: 86px
    font-weight: 700

.wave1
  position: absolute
  z-index: 5
  left: 100%
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
  bottom: -100%
  &>svg:last-child
    transform: rotate(180deg)
  &Bg
    background: #808
    width: 100vw
    height: 100vh

.wave2
  position: absolute
  z-index: 6
  left: 100%
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
  bottom: -100%
  &>svg:last-child
    transform: rotate(180deg)
  &Bg
    background: #9a5021
    width: 100vw
    height: 100vh

.wave3
  position: absolute
  z-index: 7
  left: 100%
  height: 100vh
  display: flex
  justify-content: center
  align-items: center
  bottom: -100%
  &>svg:last-child
    transform: rotate(180deg)
  &Bg
    background: #648764
    width: 100vw
    height: 100vh
</style>
