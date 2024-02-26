<script lang="ts" setup>
import TheGitHub from '@/SVG/TheGitHub.vue';
import TheLinkedIn from '@/SVG/TheLinkedIn.vue';
import TheYouTube from '@/SVG/TheYouTube.vue';
import TheTelegram from '@/SVG/TheTelegram.vue';
</script>
<template>
  <div class="contacts">
    <div class="github">
      <a href="https://github.com/Migawk">
        <TheGitHub />
      </a>
    </div>
    <div class="linked">
      <a href="https://www.linkedin.com/in/yevhen-klimov-625a4226a/"><TheLinkedIn /></a>
    </div>
    <div class="youtube">
      <a href="https://www.youtube.com/channel/UCrstUza8m8P9BsjJFTqRlxA"><TheYouTube /></a>
    </div>
    <div class="telegram"><a href="https://t.me/Migawk"><TheTelegram /></a></div>
  </div>
</template>
<style lang="sass" scoped>
.contacts
    display: flex
    &>*
        background: #3C5740
        padding: 4px 6px
        cursor: pointer
        height: 64px
        
        transition: 1.2s
        transition-timing-function: ease-in-out
        &:hover
            transition: .4s
            height: 200px
        &:first-child
            border-bottom-left-radius: 12px
        &:last-child
            border-bottom-right-radius: 12px

a
    height: 100%
    display: flex
    justify-content: flex-end
    align-items: flex-end
</style>
