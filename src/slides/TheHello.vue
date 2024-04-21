<script lang="ts" setup>
import TheEggs from '../SVG/HelloEggs.vue';
import TheContacts from '@/elements/TheContacts.vue';
import slide from '@/store/slide';
</script>
<template>
  <article id="hello">
    <div class="topEggs"><TheEggs /></div>
    <div class="bottomEggs"><TheEggs /></div>
    <div class="face">
      <h1>
        "As a <div style="display: inline-flex;">develo<span class="rotate">p</span>er</div>, I <div style="display: inline-flex;">transf<span class="rotate">o</span>rm</div> ideas
        into code, whe<span class="rotate">r</span>e each line is a path to innovation and
        functionality."
      </h1>
    </div>
    <div class="scroll">
      <button
        @click="
          () => {
            slide.changeDelta(200);
            slide.change();
          }
        "
      >
        Scroll
      </button>
    </div>
    <TheContacts class="contacts" />
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
    transform: scale(.7) translate(-90px, -112px)

.scroll
  position: absolute
  bottom: 86px
  left: 50%
  &>button
    border: none
    background: none
    padding: 8px 16px
    color: #fff
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

.contacts
  position: absolute
  right: 64px
  top: 0

@media screen and (max-width: 900px)
  h1
      font-size: 32px
  .contacts
    right: 0
  .bottomEggs
    &>*
        transform: rotate(180deg) scale(.5) translate(-256px, -256px)
  .topEggs
      position: absolute
      transform: scale(.5) translate(-288px, -256px)

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
