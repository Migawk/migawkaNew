<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const projList = ref<null | IProj[]>(null);
onMounted(async () => {
  const { projects, tools } = await fetch(import.meta.env.VITE_SERVER + "mig/projects").then(res => res.json());

  projList.value = projects.map((pr: IProj) => {
    const stack = pr.stack.map((stEl) => {
      const st = tools.find((t: any) => t.name === stEl);

      if (st && !st.img.startsWith("http")) st.img = import.meta.env.VITE_SERVER + st.img;
      return st;
    }).filter(x => x != undefined);

    const img = import.meta.env.VITE_SERVER + pr.img;
    return {
      ...pr,
      img,
      stack
    }
  }).filter((x: any) => x != undefined);
});

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
        <div class="list">
          <div class="project" v-for="pr in projList">
            <a :href="pr.link">
              <img :src="pr.img" class="projectImg" id="portfImg" width=500 height=280 />
            </a>
            <div class="projectResponsive">
              <div class="projectHiddenTitle">{{ pr.name }}</div>
              <ul class="projectInfo">
                <li class="projectStack" v-for="st in pr.stack">
                  <img :src="st.img" :alt="st.name" width="16">
                  <p class="projectStackText">{{ st.name }}</p>
                </li>
              </ul>
            </div>
            <div class="projectContent">
              <div class="projectTitle">{{ pr.name }}</div>
              <div class="projectDescription">
                {{ pr.des }}
              </div>
            </div>
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
.list
  display: flex
  gap: 96px
  padding: 0 20%

  min-height: max-content
  overflow-x: scroll
  
  border-radius: 12px

@media screen and (max-width: 1080px)
  .list
    flex-direction: column
.project
  display: flex
  flex-direction: column
  gap: 48px
  min-width: 500px
  max-width: 500px
  height: 100%
  &Img
    border-radius: 12px
    object-fit: cover
  &Info
    display: flex
    padding: 12px 24px
    gap: 32px

    background: #46546C
    color: #fff

    font-size: 24px
    font-weight: 700

    border-radius: 12px
    & > *:first-child
      list-style-type: none
  &Stack
    list-style-type: circle
    display: flex
    justify-content: center
    align-items: center
    gap: 8px
    &Text
      font-size: 16px
      transform: translateY(-1px)
  &Content
    font-weight: 700
    color: #fff
  &HiddenTitle
    display: none
    color: #fff
    font-size: 36px
    padding: 10px 8px
  &Title
    font-size: 36px
  &Description
    font-size: 24px
  &Rating>.stars
    display: flex
    align-items: center
    justify-content: center
    gap: 4px

@media screen and (max-width: 500px)
  h1
    font-size: 40px
  .list
    padding: 24px
  .project
    background: #2E3850
    border-radius: 12px
    gap: 0
    width: fit-content
    overflow: hidden
    &Img
      border-radius: 0
      width: 100%
    &Rating
      border-radius: 0
      border-bottom-left-radius: 12px
      border-bottom-right-radius: 12px
      background: #3A475E
    &Responsive
      background: #46546C
      border-bottom-left-radius: 12px
      border-bottom-right-radius: 12px
    &HiddenTitle
      display: block
      font-weight: 700
    &Title
      display: none
    &Description
      padding: 8px
      font-size: 18px

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
