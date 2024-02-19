<script lang="ts" setup>
import TheEggs from "../SVG/HelloEggs.vue";

</script>
<template>
  <article id="hello">
    <div class="topEggs"><TheEggs/></div>
    <div class="face">
      <h1>
        "As a developer, I transform ideas into code, where each line is a path to innovation and
        functionality."
      </h1>
    </div>
    <div class="glass" id="glass"></div>
    <div class="bottomEggs"><TheEggs/></div>
  </article>
</template>

<style lang="sass" scoped>
article
    background: #648764
    max-height: 100vh
    min-height: 100vh
    max-width: 100vw
    min-width: 100vw
    overflow: hidden
    color: #fff

.face
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    width: 56%

h1
    font-size: 60px

@media screen and (max-width: 700px)
  h1
    font-size: 32px

.bottomEggs
    display: flex
    justify-content: flex-end
    position: absolute
    bottom: 0
    right: 0
    overflow: hidden
    &>*
        transform: rotate(180deg) scale(.7) translate(-128px, -128px)

.topEggs
    position: absolute
    transform: translate(-16px, -16px) scale(.7) translate(-64px, -96px)
</style>
