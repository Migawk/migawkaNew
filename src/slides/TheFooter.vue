<script lang="ts" setup>
import Wave from '../SVG/FooterWave.vue';
</script>
<template>
  <footer id="footer">
    <Wave class="wave" />
    <div class="page">
      <h1>If you’re seeking something else</h1>
      <ul>
        <li>
          <p>
            If you’re interested in bot developming for Telegram/Discord I can be as a bot developer
            for you.
          </p>
        </li>
        <li><p>As I said before, I’m particular in setting up Linux servers.</p></li>
        <li><p>Rewrite website from PHP to Node.js? Or rather, from Node to PHP.</p></li>
        <li><p>I prefer to use modern tools, like Nest.js/React.js/Vue.js, TypeScript.</p></li>
        <li><p>Write responsive for your website.</p></li>
        <li><p>Set website on hosting, buy domain and connect in with each other.</p></li>
        <li><p>Write web-server and primitive database for web-application.</p></li>
        <li>
          <p>
            Make app safer, search errors/susceptibility and exploits that can be in your web app.
          </p>
        </li>
      </ul>
    </div>
  </footer>
</template>
<style lang="sass" scoped>
footer
    position: absolute
    top: calc(100% + 450px)
    width: 100vw
    height: 100%

.page
  position: absolute
  background: #000
  color: #fff
  display: flex
  flex-direction: column
  padding: 36px
  width: 100vw
  height: 100vh
  z-index: 7

.wave
  position: absolute
  transform: translateY(-100%)
  z-index: 8
h1
    text-align: center

ul
    padding-left: 24px
    font-size: 24px
    display: flex
    justify-content: space-between
    flex-direction: column
    gap: 16px
    margin-top: 16px
    height: 100%
</style>
