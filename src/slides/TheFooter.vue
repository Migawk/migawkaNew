<script lang="ts" setup></script>
<template>
  <footer id="footer">
    <div class="waves">
      <svg viewBox="0 0 960 1001" xmlns="http://www.w3.org/2000/svg">
        <rect id="rect1" width="960" height="1e3" fill="#648764" />
        <path
          id="path1"
          d="m0 118 22.8 75.8c22.9 75.9 68.5 227.5 114.2 276.7s91.3-4.2 137-56.3c45.7-52.2 91.3-103.2 137.2-146.7 45.8-43.5 91.8-79.5 137.6-46.2 45.9 33.4 91.5 136 137.2 188.2s91.3 53.8 137 70 91.3 46.8 114.2 62.2l22.8 15.3v444h-22.8-114.2-137-137.2-137.6-137.2-137-114.2-22.8z"
          fill="#c2ded1"
        />
        <path
          id="path2"
          d="m0 328 22.8 7c22.9 7 68.5 21 114.2 13.7 45.7-7.4 91.3-36 137-35.5s91.3 30.1 137.2 44.3c45.8 14.2 91.8 12.8 137.6 56.5 45.9 43.7 91.5 132.3 137.2 160.2 45.7 27.8 91.3-5.2 137 5.3s91.3 64.5 114.2 91.5l22.8 27v303h-22.8-114.2-137-137.2-137.6-137.2-137-114.2-22.8z"
          fill="#88a397"
        />
        <path
          id="path3"
          d="m0 674 22.8-17.2c22.9-17.1 68.5-51.5 114.2-83s91.3-60.1 137-82c45.7-21.8 91.3-36.8 137.2-41.1 45.8-4.4 91.8 2 137.6 45.5 45.9 43.5 91.5 124.1 137.2 136.3s91.3-44.2 137-46.8c45.7-2.7 91.3 48.3 114.2 73.8l22.8 25.5v316h-22.8-114.2-137-137.2-137.6-137.2-137-114.2-22.8z"
          fill="#526b60"
        />
        <path
          id="path4"
          d="m0 702 22.8 6.2c22.9 6.1 68.5 18.5 114.2 3.5s91.3-57.4 137-68.2 91.3 9.8 137.2 46.3c45.8 36.5 91.8 88.9 137.6 74.2 45.9-14.7 91.5-96.3 137.2-124.5s91.3-2.8 137 24.5 91.3 56.7 114.2 71.3l22.8 14.7v251h-22.8-114.2-137-137.2-137.6-137.2-137-114.2-22.8z"
          fill="#21382f"
        />
        <path
          id="path5"
          d="m0 937 22.8-15c22.9-15 68.5-45 114.2-61.2 45.7-16.1 91.3-18.5 137-6s91.3 39.9 137.2 43c45.8 3.2 91.8-17.8 137.6-20.1 45.9-2.4 91.5 14 137.2 28.3s91.3 26.7 137 7.7 91.3-69.4 114.2-94.5l22.8-25.2v207h-22.8-114.2-137-137.2-137.6-137.2-137-114.2-22.8z"
        />
      </svg>
    </div>
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
    width: 100vw
    min-height: 100vh
    background: #000
    color: #fff
    position: relative
    z-index: 15

.waves
  position: absolute
  transform: translateY(-99%)
  z-index: 4
  width: 100%

.page
  display: flex
  flex-direction: column
  padding: 36px
  width: 100vw

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
