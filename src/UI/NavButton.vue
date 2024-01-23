<script setup lang="ts">
import NavigationPoint from '@/SVG/NavigationPoint.vue';

interface IProps {
  title: string;
  des: string;
  link: string;
}
const { title, des, link } = defineProps<IProps>();
</script>

<template>
  <a :href="link">
    <div class="img">
      <NavigationPoint />
    </div>
    <div class="info">
      <div class="title">{{ title }}</div>
      <div class="des">{{ des }}</div>
    </div>
  </a>
</template>

<style scoped lang="sass">
a
  display: flex
  align-items: center
  gap: 4px
  color: #354259
  text-decoration: none

.title
  font-size: 24px
  font-weight: 800

.des
  font-size: 20px
</style>
