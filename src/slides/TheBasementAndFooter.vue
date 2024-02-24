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
    top: 100%
    z-index: 10

#page2
    max-width: 100vw
    height: 100vh
    overflow-y: scroll
    position: absolute
    z-index: 15
</style>
