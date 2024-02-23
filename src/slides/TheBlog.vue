<script lang="ts" setup>
import Wave from '@/SVG/BlogWave.vue';
</script>
<template>
  <article id="blog">
    <Wave class="wave"/>
    <div class="page">
      <h1>The Blog</h1>
      <h2>There is nothing</h2>
      <p>✖╭╮✖</p>
    </div>
  </article>
</template>
<style lang="sass" scoped>
article
    position: absolute
    left: calc(100% + 300px)
    top: 0
    width: 100%
    height: 100%

.wave
    position: absolute
    transform: translateX(-100%)
    height: 100vh

.page
    background: #648764
    width: 100%
    height: 100%
    padding: 64px
    text-align: center
    color: #fff
h1
    font-size: 108px

p
    color: #B04F4F
    font-size: 86px
    font-weight: 700
</style>
