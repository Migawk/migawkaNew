<script lang="ts" setup>
import mowopedia from '../assets/mowopediaA.jpg';
import eCommerce from '../assets/eCommerceA.jpg';
import PortfolioWave from '@/SVG/PortfolioWave.vue';
import star from '../assets/star.svg';
</script>
<template>
  <article id="portfolio">
    <PortfolioWave class="wave" />
    <div class="page" id="page1">
      <h1>Portfolio</h1>
      <div class="list">
        <div class="project">
          <img :src="mowopedia" class="projectImg" />
          <div class="projectResponsive">
            <div class="projectHiddenTitle">Mowopedia</div>
            <div class="projectRating">
              <div class="stars"><img :src="star" alt="" />1</div>
              <div class="status">In developing</div>
            </div>
          </div>
          <div class="projectContent">
            <div class="projectTitle">Mowopedia</div>
            <div class="projectDescription">
              Explore a linguistic map on this website, offering a plethora of dialects by
              navigating through various European countries. Immerse yourself in the rich tapestry
              of languages, enhancing your cultural and linguistic experience.
            </div>
          </div>
        </div>
        <div class="project">
          <img :src="eCommerce" class="projectImg" />
          <div class="projectResponsive">
            <div class="projectHiddenTitle">eCommerce</div>
            <div class="projectRating">
              <div class="stars"><img :src="star" alt="" />2</div>
              <div class="status">In developing</div>
            </div>
          </div>
          <div class="projectContent">
            <div class="projectTitle">eCommerce</div>
            <div class="projectDescription">
              Unveiling our eCommerce website draft – a sleek fusion of style and functionality.
              Streamlined design, intuitive navigation, and visually engaging elements await. Your
              seamless online shopping experience begins here.
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
<style lang="sass" scoped>
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

  &::-webkit-scrollbar
    display: none

h1
    font-size: 96px
    text-align: center
    width: 100%
    color: #fff
    margin-bottom: 48px

.list
  display: flex
  justify-content: center
  align-items: center
  gap: 64px
  min-height: max-content
  &::-webkit-scrollbar
    width: 4px
    border-radius: 4px
  &::-webkit-scrollbar-track
    background: #2E3850
    box-shadow: inset 0 0 8px black
  &::-webkit-scrollbar-thumb
    background: #46546C
    border-radius: 12px
  &::-webkit-scrollbar-track
    border-radius: 12px

@media screen and (max-width: 768px)
  .list
    flex-direction: column
.project
  display: flex
  flex-direction: column
  gap: 48px
  max-width: 500px
  height: 100%
  &Img
    border-radius: 12px
  &Rating
    display: flex
    justify-content: space-between
    padding: 12px 24px
    background: #46546C
    color: #fff
    font-size: 24px
    font-weight: 700
    border-radius: 12px
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
</style>
