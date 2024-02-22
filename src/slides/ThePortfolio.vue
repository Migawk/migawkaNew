<script lang="ts" setup>
import mowopedia from '../assets/mowopediaA.jpg';
import eCommerce from '../assets/eCommerceA.jpg';
import star from '../assets/star.svg';
</script>
<template>
  <article id="portfolio">
    <div class="page" id="page1">
      <h1>Portfolio</h1>
      <div class="list">
        <div class="project">
          <img :src="mowopedia" class="projectImg" />
          <div class="projectRating">
            <div class="stars"><img :src="star" alt="" />1</div>
            <div class="status">In developing</div>
          </div>
          <div class="projectContent">
            <div class="projectTitle">Mowopedia</div>
            <div class="projectDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
        <div class="project">
          <img :src="eCommerce" class="projectImg" />
          <div class="projectRating">
            <div class="stars"><img :src="star" alt="" />2</div>
            <div class="status">In developing</div>
          </div>
          <div class="projectContent">
            <div class="projectTitle">eCommerce</div>
            <div class="projectDescription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
<style lang="sass" scoped>
article
    background: #354259
    width: 100%
    height: 100%
    position: absolute
    top: 100%

.page
  overflow-y: scroll
  max-height: 100vh

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
  &Title
    font-size: 36px
  &Description
    font-size: 24px
</style>
