<script lang="ts" setup>
import locker from '../assets/locker.svg';
import InterestedEggs from '@/SVG/InterestedEggs.vue';
</script>
<template>
  <article id="interested">
    <h1>Are you interested?</h1>
    <div class="buttonArea">
      <p>* Required a password</p>
      <button class="button">
        <img :src="locker" />
        <p>Open the resume</p>
      </button>
    </div>
    <button class="toFooter">To footer</button>
    <div class="topEggs"><InterestedEggs /></div>
    <div class="bottomEggs"><InterestedEggs /></div>
  </article>
</template>
<style lang="sass" scoped>
article
    background: #354259
    position: absolute
    top: 100%
    width: 100%
    height: 100%
    padding: 36px 0
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-between
    overflow: hidden

h1
    font-size: 108px
    text-align: center
    color: #fff
    z-index: 5

.buttonArea
    color: #9C4747
    font-weight: 700
    display: flex
    flex-direction: column
    gap: 12px
.button
    background: #9C4747
    border: none
    border-radius: 8px
    display: flex
    align-items: center
    color: #fff
    gap: 12px
    font-size: 32px
    width: 280px
    padding: 16px 24px
    cursor: pointer
    z-index: 5

.toFooter
    font-size: 56px
    background: none
    color: #fff
    border: none
    cursor: pointer
    z-index: 5
    font-weight: 700

.topEggs
    &>*
        position: absolute
        top: 0
        right: 0
        transform: translate(24px, -24px)
.bottomEggs
    &>*
        position: absolute
        bottom: 0
        left: 0
        transform: rotate(180deg) translate(2px, -129px)
        z-index: 3

@media screen and (max-width: 768px)
    h1
        font-size: 36px

    .topEggs
        &>*
            width: 256px
            height: 256px
            transform: translate(24px, -48px)
    .bottomEggs
        &>*
            width: 256px
            height: 256px
            transform: rotate(180deg) translate(2px, -64px)
</style>
