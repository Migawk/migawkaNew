<script setup lang="ts">
import HelloEggs from '../SVG/HelloEggs.vue';
import TheGitHub from '../SVG/TheGitHub.vue';
import TheLinkedIn from '../SVG/TheLinkedIn.vue';
import TheYouTube from '../SVG/TheYouTube.vue';
import TheTelegram from '../SVG/TheTelegram.vue';
</script>

<template>
  <article id="hello">
    <nav>
      <a href="https://github.com/Migawk"><TheGitHub /></a>
      <a href="https://www.linkedin.com/in/yevhen-klimov-625a4226a/"><TheLinkedIn /></a>
      <a href="https://www.youtube.com/@MigawkaSpace"><TheYouTube /></a>
      <a href="t.me/Migawk"><TheTelegram /></a>
    </nav>
    <h1>
      "As a developer, I transform ideas into code, where each line is a path to innovation and
      functionality."
    </h1>
    <div class="glassPos"><div class="glass"></div></div>
    <div class="eggs1"><HelloEggs /></div>
    <div class="eggs2"><HelloEggs /></div>
  </article>
</template>

<style scoped lang="sass">
nav
    position: absolute
    right: 64px
    display: flex
    align-items: flex-start
    &>a
        background: #3C5740
        border: none
        padding: 4px
        width: 64px
        height: 60px
        cursor: pointer
        display: flex
        align-items: flex-end
        transition: 1s
        &:hover
            height: 128px
            transition: .5s
        &:first-child
            border-bottom-left-radius: 16px
        &:last-child
            border-bottom-right-radius: 16px
article
    background: #648764
    max-width: 100vw
    height: 100vh
    color: #F5F5DC
    overflow: hidden
    &::after
        background: #648764
        content: ''
        position: absolute
        display: block
        top: 100%
        left: 0
        min-width: 97vw
        max-width: 100vw
        height: 64px
        z-index: -2
h1
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    width: 50%
    font-size: 60px

@media screen and (max-width: 1100px)
    h1
        font-size: 24px

.eggs
    &1
        &>svg
            position: absolute
            left: -59px
            top: -48px
            width: 341px
            height: 286px
    &2
        &>svg
            position: absolute
            right: 0
            bottom: 0
            transform: rotateY(180deg)
            width: 261px
            height: 332px
            z-index: 3

@media screen and (max-width: 600px)
    .eggs
        &1 > svg
            left: -30px
            top: -15px
            width: calc(341px / 2)
            height: calc(286px / 2)
        &2 > svg
            width: calc(261px / 2)
            height: calc(332px / 2)

.glass
    width: 384px
    height: 48px
    backdrop-filter: blur(6px)
    background: rgba(91, 121, 91, .5)
    transform: rotate(-125deg)
    pointer-events: none
    z-index: 10
    border-radius: 128px/96px
    &Pos
        position: absolute
        top: 50%
        left: 50%
        transform: translateX(-50%)

@media screen and (max-wdith: 1100px)
    .glass
        height: 12px
        width: 24px
</style>
