<script setup lang="ts" defer>
import InterestedEggs from '@/SVG/InterestedEggs.vue';
import locker from '@/assets/locker.svg';

// setTimeout(() => document.getElementsByClassName('button')[0].addEventListener('click', (e) => {
//   console.log(e);
// }), 500);
</script>
<template>
  <article>
    <section>
      <h1>Are you interested?</h1>
      <div class="resume">
        <span>* Required a password</span>
        <button class="button">
          <img :src="locker" alt="write password" />
          <span>Open the resume</span>
        </button>
      </div>
      <button class="toFooter">To footer</button>
    </section>
    <div id="poser">
      <div><InterestedEggs id="topEggs" /></div>
      <div><InterestedEggs id="bottomEggs" /></div>
    </div>
  </article>
</template>

<style lang="sass" scoped>
article
    background: #354259
    height: 100vh
    z-index: 5
    position: relative

#poser
  display: flex
  justify-content: space-between
  flex-direction: column
  height: 100vh
  width: 100vw
  overflow: hidden
#bottomEggs
    transform: rotate(180deg)

#topEggs
  position: absolute
  right: 0

section
  display: flex
  justify-content: space-between
  align-items: center
  flex-direction: column
  position: absolute
  padding: 36px 0
  max-width: 100vw
  height: 100vh
  color: #FFFFFF
  z-index: 1

h1
  font-size: 108px
  text-align: center

@media screen and (max-width: 600px)
  h1
    font-size: 64px


.resume
  color: #9C4747
  display: flex
  flex-direction: column
  gap: 12px
  font-weight: 700

.button
  background: #9C4747
  border: none
  border-radius: 8px
  color: #fff
  padding: 16px 24px
  cursor: pointer
  font-size: 32px
  display: flex
  gap: 12px

  &>span
    display: block
    width: 156px

.toFooter
  font-size: 56px
  background: none
  border: none
  color: #fff
  font-weight: 700
</style>
