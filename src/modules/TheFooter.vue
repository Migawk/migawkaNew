<script lang="ts" setup>
import wave from '@/assets/wave5.svg';
import FooterWave from '@/SVG/FooterWave.vue';
</script>

<template>
  <FooterWave class="wave" />
  <footer id="footer">
    <h2>If you’re seeking something else</h2>
    <ul>
      <li>
        If you’re interested in bot developming for Telegram/Discord I can be as a bot developer for
        you.
      </li>
      <li>As I said before, I’m particular in setting up Linux servers.</li>
      <li>Rewrite website from PHP to Node.js? Or rather, from Node to PHP.</li>
      <li>I prefer to use modern tools, like Nest.js/React.js/Vue.js, TypeScript.</li>
      <li>Write responsive for your website.</li>
      <li>Set website on hosting, buy domain and connect in with each other.</li>
      <li>Write web-server and primitive database for web-application.</li>
      <li>
        Make app safer, search errors/susceptibility and exploits that can be in your web app.
      </li>
    </ul>
  </footer>
</template>

<style lang="sass" scoped>
.wave
    background: #648764
    transform: translateY(12px) scaleY(1.4)
    width: 100vw
    overflow: hidden

footer
    background: #000
    color: #fff
    min-height: 100vh
    padding: 72px 60px 0 60px

h2
    font-size: 48px
    text-align: center
    margin-bottom: 16px

ul
    display: flex
    flex-direction: column
    gap: 16px
    & > li
        font-size: 24px
</style>
