<script lang="ts" setup>
import { onMounted, onUpdated, ref, watch } from 'vue'
import TheProject from '@/elements/TheProject.vue';
import slide from '@/store/slide';

const projList = ref<null | IProj[]>(null);
onMounted(async () => {
  const { projects } = await fetch(import.meta.env.VITE_SERVER + "mig/projects").then(res => res.json());
  
  projList.value = [...projects, ...projects, ...projects];
});
let scrolled = ref<number>(0);
const refList = ref<null | HTMLElement>(null);

const unwatch: any = watch(slide, () => {
  if(slide.current === 2) {
    if(window.innerWidth < 600) return unwatch();
    unwatch();
    const list = document.getElementById("portfolioList");
    const wrapped = document.getElementById("portfolioWrappedList");
    if(!wrapped || !list) return;

    refList.value = wrapped;
    
    const bounding = wrapped.getBoundingClientRect();
    scrolled.value = bounding.width/2;

    // list.scrollTo(bounding.width/2, 0);
    let accX = 0;
    let pressed = false;
    
    list.addEventListener("mouseup", () => {
      pressed = false;
    });
    list.addEventListener("mousedown", () => {
      pressed = true;
    });
    list.addEventListener("mousemove", (mv) => {
      if(pressed) accX += mv.movementX;
    });
    setInterval(() => {
      if(Math.abs(accX) >= 0.1) {
        scrolled.value -= accX;
        accX *= .6;
    }
    }, 20);
  }
})

const unwatchScrolled: any = watch(scrolled, () => {
  if(window.innerWidth < 600) return unwatchScrolled();

  const el = refList.value;
  if(!el) return;
  const {width} = el.getBoundingClientRect();
  
  const wid = window.innerWidth;
  if(scrolled.value > width-wid) {
    scrolled.value = wid;
  }
  if(scrolled.value < wid) {
    scrolled.value = width-wid;
  }
  el.style.transform = `translateX(-${scrolled.value}px)`;
})

</script>
<template>
  <article id="portfolio">
    <div class="waves">
      <div class="wave1">
        <svg viewBox="0 0 900 224" xmlns="http://www.w3.org/2000/svg">
          <path id="path1"
            d="m0 0 21.5 14.27c21.5 14.27 64.5 42.82 107.3 48.31 42.9 5.49 85.5-12.08 128.4-11.53 42.8 0.549 85.8 19.22 128.6 12.41 42.9-6.698 85.5-38.98 128.4-41.18 42.8-2.196 85.8 25.69 128.6 42.27 42.9 16.69 85.5 22.18 128.4 27.12 42.8 4.941 85.8 9.333 107.3 11.53l21.5 2.196v118.6h-21.5-107.3-128.4-128.6-128.4-128.6-128.4-107.3-21.5z"
            fill="#607944" stroke-linecap="round" stroke-width="1.048" />
        </svg>
        <div class="wave1Bg"></div>
        <svg viewBox="0 0 900 224" xmlns="http://www.w3.org/2000/svg">
          <path id="path1"
            d="m0 0 21.5 14.27c21.5 14.27 64.5 42.82 107.3 48.31 42.9 5.49 85.5-12.08 128.4-11.53 42.8 0.549 85.8 19.22 128.6 12.41 42.9-6.698 85.5-38.98 128.4-41.18 42.8-2.196 85.8 25.69 128.6 42.27 42.9 16.69 85.5 22.18 128.4 27.12 42.8 4.941 85.8 9.333 107.3 11.53l21.5 2.196v118.6h-21.5-107.3-128.4-128.6-128.4-128.6-128.4-107.3-21.5z"
            fill="#607944" stroke-linecap="round" stroke-width="1.048" />
        </svg>
      </div>
      <div class="wave2">
        <svg viewBox="0 0 900 224" xmlns="http://www.w3.org/2000/svg">
          <path id="path1"
            d="m0 120.6 21.5-13.35c21.5-13.21 64.5-39.91 107.3-53.38 42.9-13.48 85.5-14 128.4-21.59 42.8-7.589 85.8-22.5 128.6-10.86 42.9 11.51 85.5 49.46 128.4 41.21 42.8-8.374 85.8-62.8 128.6-62.67 42.9 0.2617 85.5 55.21 128.4 77.46 42.8 22.24 85.8 11.78 107.3 6.542l21.5-5.234v145.2h-21.5-107.3-128.4-128.6-128.4-128.6-128.4-107.3-21.5z"
            fill="#007878" stroke-linecap="round" stroke-width="1.144" />
        </svg>
        <div class="wave2Bg"></div>
        <svg viewBox="0 0 900 224" xmlns="http://www.w3.org/2000/svg">
          <path id="path1"
            d="m0 120.6 21.5-13.35c21.5-13.21 64.5-39.91 107.3-53.38 42.9-13.48 85.5-14 128.4-21.59 42.8-7.589 85.8-22.5 128.6-10.86 42.9 11.51 85.5 49.46 128.4 41.21 42.8-8.374 85.8-62.8 128.6-62.67 42.9 0.2617 85.5 55.21 128.4 77.46 42.8 22.24 85.8 11.78 107.3 6.542l21.5-5.234v145.2h-21.5-107.3-128.4-128.6-128.4-128.6-128.4-107.3-21.5z"
            fill="#007878" stroke-linecap="round" stroke-width="1.144" />
        </svg>
      </div>
      <div class="wave3">
        <svg viewBox="0 0 900 224" xmlns="http://www.w3.org/2000/svg">
          <path id="path1"
            d="m0 49.69 16.7-5.427c16.6-5.323 50-16.18 83.3-3.757 33.3 12.32 66.7 47.8 100 60.85 33.3 13.05 66.7 3.653 100-13.26 33.3-16.8 66.7-41.23 100-56.15s66.7-20.56 100-25.78c33.3-5.219 66.7-10.02 100-1.566 33.3 8.559 66.7 30.48 100 38.51 33.3 7.932 66.7 2.087 100 15.13s66.7 44.99 83.3 61.06l16.7 15.97v88.72h-16.7-83.3-100-100-100-100-100-100-100-83.3-16.7z"
            fill="#45678e" stroke-linecap="round" stroke-width="1.022" />
        </svg>
        <div class="wave3Bg"></div>
        <svg viewBox="0 0 900 224" xmlns="http://www.w3.org/2000/svg">
          <path id="path1"
            d="m0 49.69 16.7-5.427c16.6-5.323 50-16.18 83.3-3.757 33.3 12.32 66.7 47.8 100 60.85 33.3 13.05 66.7 3.653 100-13.26 33.3-16.8 66.7-41.23 100-56.15s66.7-20.56 100-25.78c33.3-5.219 66.7-10.02 100-1.566 33.3 8.559 66.7 30.48 100 38.51 33.3 7.932 66.7 2.087 100 15.13s66.7 44.99 83.3 61.06l16.7 15.97v88.72h-16.7-83.3-100-100-100-100-100-100-100-83.3-16.7z"
            fill="#45678e" stroke-linecap="round" stroke-width="1.022" />
        </svg>
      </div>
    </div>
    <div class="page" id="page1">
      <h1>Portfolio</h1>
      <div class="content">
        <div class="topList" id="portfolioList">
          <div class="list" id="portfolioWrappedList">
            <template v-for="pr in projList">
              <TheProject :pr="pr" />
            </template>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
<style lang="sass" scoped>
*
  scrollbar-width: none
article
    width: 100%
    height: 100%
    position: absolute
    top: calc( 100% + 300px )

.wave
  position: absolute
  transform: translateY(-99%)
.page
  overflow-y: scroll
  padding: 64px 0
  height: 100vh
  background: #354259

h1
    font-size: 96px
    text-align: center
    width: 100%
    color: #fff
    margin-bottom: 48px

.content
  display: flex
  justify-content: center
  align-items: center

.topList
  overflow: hidden
.list
  display: flex
  gap: 96px
  padding: 0 10%

  min-height: max-content
  width: 100%
  user-select: none
  
  border-radius: 12px

@media screen and (max-width: 600px)
  h1
    font-size: 40px
    
  .list
    flex-direction: column
    padding: 24px

.wave1
  position: absolute
  top: 100%
  z-index: 5
  &>svg
    transform: translateY(4%)
    &:last-child
      transform: rotate(180deg) translateY(4px)
  &Bg
    background: #607944
    width: 100vw
    height: 100vh

.wave2
  position: absolute
  top: 100%
  z-index: 6
  &>svg
    transform: translateY(4%)
    &:last-child
      transform: rotate(180deg) translateY(4px)
  &Bg
    background: #007878
    width: 100vw
    height: 100vh

.wave3
  position: absolute
  top: 100%
  z-index: 7
  &>svg
    transform: translateY(4%)
    &:last-child
      transform: rotate(180deg) translateY(4px)
  &Bg
    background: #45678e
    width: 100vw
    height: 100vh

@media screen and (max-width: 700px)
  .wave1Bg
    height: 200vh
  .wave2Bg
    height: 200vh
  .wave3Bg
    height: 200vh
</style>
