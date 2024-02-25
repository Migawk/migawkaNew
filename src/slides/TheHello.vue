<script lang="ts" setup>
import TheEggs from '../SVG/HelloEggs.vue';
</script>
<template>
  <article id="hello">
    <div class="topEggs"><TheEggs /></div>
    <div class="face">
      <h1>
        "As a develo<span class="rotate">p</span>er, I transf<span class="rotate">o</span>rm ideas into code, whe<span class="rotate">r</span>e each line is a path to innovation and
        functionality."
      </h1>
    </div>
    <div class="glass" id="glass"></div>
    <div class="bottomEggs"><TheEggs /></div>
    <div class="scroll">
      <p>Scroll</p>
    </div>
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
    display: inline-block

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

.scroll
  position: absolute
  bottom: 86px
  left: 50%
  &>p
    transform: translateX(-50%)
  &:after
    content: ''
    position: absolute
    display: block
    background: #fff
    width: 1px
    height: 10px
    bottom: -64px
    animation: 1.6s infinite ease-in-out scrollable
.rotate
  animation: 1.6s 1 ease-in-out textRotate
  display: inline-block
  &:first-child
    animation-delay: .5s
  &::nth-child(2)
    animation-delay: .75s
  &:last-child
    animation-delay: 1s

@keyframes scrollable
  0%
    bottom: -64px
    height: 10px
  50%
    height: 20px
  100%
    bottom: -12px
    height: 1px
    opacity: .1

@keyframes textRotate
  0%
    transform: rotateY(0deg)
  100%
    transform: rotateY(360deg)

</style>
