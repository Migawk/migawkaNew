<script setup lang="ts">
import TheGitHub from '@/SVG/TheGitHub.vue';
import TheLinkedIn from '@/SVG/TheLinkedIn.vue';
import TheTelegram from '@/SVG/TheTelegram.vue';
import BlogWave from '@/SVG/BlogWave.vue';
import TheYouTube from '@/SVG/TheYouTube.vue';

import mowopedia from '../assets/mowopedia.jpg';
import paper from '@/assets/paper.svg';
import wave from '@/assets/wave4n.svg';

const blogContent = [
  {
    link: 'https://blog.migawka.space',
    name: 'Mowopedia - useful thing!',
    image: mowopedia
  },
  {
    link: 'https://blog.migawka.space',
    name: 'Mowopedia - useful thing!',
    image: mowopedia
  },
  {
    link: 'https://blog.migawka.space',
    name: 'Mowopedia - useful thing!',
    image: mowopedia
  },
  {
    link: 'https://blog.migawka.space',
    name: 'Mowopedia - useful thing!',
    image: mowopedia
  }
];
</script>

<template>
  <article>
    <BlogWave class="wave" id="blogWave" />
    <div class="content">
      <h1>The Blog</h1>
      <section class="list">
        <a
          v-for="({ link, name, image }, index) in blogContent"
          :key="index"
          :href="link"
          class="element"
        >
          <img :src="image" alt="image of a blog" />
          <p class="description">
            <img :src="paper" alt="image of a blog" /> <span>{{ name }}</span>
          </p>
        </a>
      </section>
      <section class="navNormal">
        <nav>
          <a href="https://github.com/Migawk" class="github"><TheGitHub /></a>
          <a href="https://www.linkedin.com/in/yevhen-klimov-625a4226a/" class="linkedIn"
            ><TheLinkedIn
          /></a>
          <a href="https://www.youtube.com/@MigawkaSpace" class="youtube"><TheYouTube /></a>
          <a href="t.me/Migawk" class="telegram"><TheTelegram /></a>
        </nav>
      </section>
    </div>
  </article>
</template>

<style scoped lang="sass">

article
  display: flex
  min-width: 100vw
  max-width: 100vw
.content
    background: #648764
    color: #FFF7D4
    font-weight: 800
    display: flex
    align-items: center
    flex-direction: column
    padding: 48px 64px
    min-width: 100vw
    max-width: 100vw
    overflow: hidden
h1
    font-size: 108px
    text-align: center

.list
    display: flex
    align-items: center
    justify-content: center
    gap: 24px
    padding: 32px 24px

@media screen and (max-width: 900px)
  .list
    flex-wrap: wrap
.element
    text-decoration: none
    color: #FFF7D4
    & > img
        width: 256px
        height: 214px
        border-radius: 12px
        object-fit: cover

.description
    display: flex
    align-items: center
    gap: 10px

nav
    display: flex
    align-items: flex-start
    padding: 0 16px
    border-top: 2px solid #333
    width: fit-content
    &>a
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

.navNormal
    display: flex
    justify-content: center

.github
    background: #333
.linkedIn
    background: #0A66C2

.youtube
    background: #f00

.telegram
    background: #08C

.wave
  min-width: 512px
  width: 512px
  min-height: 100vh
  object-fit: cover
  transform: translateX(256px)
</style>
