<script setup lang="ts">
import PortfolioWave from '@/SVG/PortfolioWave.vue';
import SkillWave from '@/SVG/SkillWave.vue';
import PortfolioSlider from '@/components/PortfolioSlider.vue';
</script>

<template>
  <div class="topWave"><PortfolioWave /></div>
  <article id="portfolio">
    <h1>Portfolio</h1>
    <PortfolioSlider />
  </article>
  <div class="bottomWave"><SkillWave /></div>
</template>

<style scoped lang="sass">
article
    background: #354259
    color: #fff
h1
    font-size: 96px
    font-weight: 800
    text-align: center
    padding-bottom: 48px

.topWave
    transform: translateY(8px)

.bottomWave
  background: #354259
  transform: translateY(-8px)
  &>svg
    transform: translateY(16px)
</style>
