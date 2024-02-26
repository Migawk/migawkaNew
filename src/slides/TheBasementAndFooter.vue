<script lang="ts" setup>
import TheBasement from './TheBasement.vue';
import TheFooter from './TheFooter.vue';
</script>
<template>
  <div class="baseFooter" id="baseFooter">
    <div id="page2">
      <TheBasement />
      <TheFooter />
    </div>
  </div>
</template>

<style lang="sass" scoped>

.baseFooter
    position: absolute
    top: calc(100% + 300px)
    z-index: 10

#page2
    max-width: 100vw
    height: 100vh
    overflow-y: scroll
    overflow-x: hidden
    position: absolute
    z-index: 15
    &::-webkit-scrollbar
      display: none
</style>
