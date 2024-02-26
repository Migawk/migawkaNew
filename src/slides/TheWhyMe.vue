<script lang="ts" setup>
import speed from '../assets/speed.svg';
import pizza from '../assets/pizza.svg';
import phone from '../assets/phone.svg';
import server from '../assets/server.svg';
import webpage from '../assets/webpage.svg';
import HeaderWave from '@/SVG/HeaderWave.vue';
import scrolled from '../store/scrolled';
import purpleWave from '../assets/slideTransition/purpleWave.svg';

import { onMounted } from 'vue';

onMounted(() => {
  const page = document.getElementById('page')!;
  page.addEventListener('scroll', (e) => {
    const newScrolled = (page.scrollTop / (page.scrollHeight - window.innerHeight)) * 100;
    scrolled.changeScrolled(newScrolled);
  });
});
</script>
<template>
  <article id="whyMe">
    <div class="waves">
      <div class="wave1">
        <svg viewBox="0 0 900 224.8" xmlns="http://www.w3.org/2000/svg">
          <path
            id="path1"
            d="m0 48.84 21.5-11.7c21.5-11.6 64.5-35 107.3-37 42.9-2 85.5 17.4 128.4 31.4 42.8 14 85.8 22.6 128.6 19.1 42.9-3.5 85.5-19.1 128.4-16 42.8 3.2 85.8 25.2 128.6 30.4 42.9 5.1 85.5-6.5 128.4-8 42.8-1.5 85.8 7.1 107.3 11.5l21.5 4.3v152h-21.5-107.3-128.4-128.6-128.4-128.6-128.4-107.3-21.5z"
            fill="#836bba"
          />
        </svg>
        <div class="wave1Bg"></div>
        <svg viewBox="0 0 900 224.8" xmlns="http://www.w3.org/2000/svg">
          <path
            id="path1"
            d="m0 48.84 21.5-11.7c21.5-11.6 64.5-35 107.3-37 42.9-2 85.5 17.4 128.4 31.4 42.8 14 85.8 22.6 128.6 19.1 42.9-3.5 85.5-19.1 128.4-16 42.8 3.2 85.8 25.2 128.6 30.4 42.9 5.1 85.5-6.5 128.4-8 42.8-1.5 85.8 7.1 107.3 11.5l21.5 4.3v152h-21.5-107.3-128.4-128.6-128.4-128.6-128.4-107.3-21.5z"
            fill="#836bba"
          />
        </svg>
      </div>
      <div class="wave2">
        <svg viewBox="0 0 900 224" xmlns="http://www.w3.org/2000/svg">
          <path
            id="path2"
            d="m0 57.02 21.5-5.159c21.5-5.295 64.5-15.61 107.3-18.33 42.9-2.715 85.5 2.172 128.4-0.6788 42.8-2.987 85.8-13.85 128.6-11.54 42.9 2.172 85.5 17.65 128.4 19.41 42.8 1.765 85.8-9.91 128.6-9.096 42.9 0.9503 85.5 14.53 128.4 11.4 42.8-3.258 85.8-23.08 107.3-33.12l21.5-9.91v224h-900z"
            fill="#00aecd"
            stroke-width="1.165"
          />
        </svg>
        <div class="wave2Bg"></div>
        <svg viewBox="0 0 900 224" xmlns="http://www.w3.org/2000/svg">
          <path
            id="path2"
            d="m0 57.02 21.5-5.159c21.5-5.295 64.5-15.61 107.3-18.33 42.9-2.715 85.5 2.172 128.4-0.6788 42.8-2.987 85.8-13.85 128.6-11.54 42.9 2.172 85.5 17.65 128.4 19.41 42.8 1.765 85.8-9.91 128.6-9.096 42.9 0.9503 85.5 14.53 128.4 11.4 42.8-3.258 85.8-23.08 107.3-33.12l21.5-9.91v224h-900z"
            fill="#00aecd"
            stroke-width="1.165"
          />
        </svg>
      </div>
      <div class="wave3">
        <svg viewBox="0 0 900 224" xmlns="http://www.w3.org/2000/svg">
          <path
            id="path3"
            d="m0 4.599 21.5 18.36c21.5 18.13 64.5 54.85 107.3 56.64 42.9 1.791 85.5-30.9 128.4-36.27 42.8-5.149 85.8 17.24 128.6 27.98 42.9 10.97 85.5 10.07 128.4 5.597 42.8-4.478 85.8-12.54 128.6-31.34 42.9-18.58 85.5-47.69 128.4-45.45 42.8 2.239 85.8 35.82 107.3 52.61l21.5 16.79v154.5h-900z"
            fill="#a3d2a1"
            stroke-width="1.496"
          />
        </svg>
        <div class="wave3Bg"></div>
        <svg viewBox="0 0 900 224" xmlns="http://www.w3.org/2000/svg">
          <path
            id="path3"
            d="m0 4.599 21.5 18.36c21.5 18.13 64.5 54.85 107.3 56.64 42.9 1.791 85.5-30.9 128.4-36.27 42.8-5.149 85.8 17.24 128.6 27.98 42.9 10.97 85.5 10.07 128.4 5.597 42.8-4.478 85.8-12.54 128.6-31.34 42.9-18.58 85.5-47.69 128.4-45.45 42.8 2.239 85.8 35.82 107.3 52.61l21.5 16.79v154.5h-900z"
            fill="#a3d2a1"
            stroke-width="1.496"
          />
        </svg>
      </div>
    </div>
    <div class="page" id="page">
      <div class="box">
        <h1>Why me?</h1>
        <div class="smallAdvantages">
          <div class="smallAdvantagePar">
            <div class="smallAdvantage">
              <div class="smallAdvantageImg" id="smallAdvantageImg1">
                <img :src="speed" alt="" />
              </div>
              <div class="smallAdvantageName">Rapid</div>
              <div class="smallAdvantageDescription">I prefer to write quick to load websites.</div>
            </div>
            <div class="smallAdvantage">
              <div class="smallAdvantageImg" id="smallAdvantageImg2">
                <img :src="pizza" alt="" />
              </div>
              <div class="smallAdvantageName">Youthful</div>
              <div class="smallAdvantageDescription">For teenagers, children and young adult.</div>
            </div>
          </div>
          <div class="smallAdvantagePar">
            <div class="smallAdvantage">
              <div class="smallAdvantageImg" id="smallAdvantageImg3">
                <img :src="phone" alt="" />
              </div>
              <div class="smallAdvantageName">Responsive</div>
              <div class="smallAdvantageDescription">
                Websites always works on any devices: Phone, Tablet, PC, TV.
              </div>
            </div>
            <div class="smallAdvantage">
              <div class="smallAdvantageImg" id="smallAdvantageImg4">
                <img :src="server" alt="" />
              </div>
              <div class="smallAdvantageName">Web-server</div>
              <div class="smallAdvantageDescription">
                Proficient in web server management and configuration.
              </div>
            </div>
          </div>
        </div>
        <div class="bigAdvantages">
          <div class="bigAdvantage">
            <div class="bigAdvantageImg"><img :src="webpage" /></div>
            <div class="bigAdvantageContent">
              <div class="bigAdvantageName">Front-end</div>
              <div class="bigAdvantageDescription">
                Proficient in front-end development. Interested in creating responsive and
                user-friendly interfaces to enhance overall user experience.
              </div>
            </div>
          </div>
          <div class="bigAdvantage">
            <div class="bigAdvantageImg"><img :src="server" /></div>
            <div class="bigAdvantageContent">
              <div class="bigAdvantageName">Back-end / Sysadmin</div>
              <div class="bigAdvantageDescription">
                Experienced in back-end, particular in server-side programming and adept at system
                administration tasks for performance and reliability.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="sass" scoped>
article
  position: absolute
  top: calc(100% + 300px)
  height: 100%
.page
  background: #A3B96E
  max-width: 100vw
  overflow-y: scroll
  height: 100%
  z-index: 20

  &::-webkit-scrollbar
    display: none

.wave1
  position: absolute
  top: 100%
  z-index: 5
  &>svg
    transform: translateY(4%)
    &:last-child
      transform: rotate(180deg) translateY(4px)
  &Bg
    background: #836bba
    width: 100vw
    height: 100vh

.wave2
  position: absolute
  top: 100%
  z-index: 6
  &>svg
    transform: translateY(4%)
    &:last-child
      transform: rotate(180deg) translateY(4px)
  &Bg
    background: #00aecd
    width: 100vw
    height: 100vh

.wave3
  position: absolute
  top: 100%
  z-index: 7
  &>svg
    transform: translateY(4%)
    &:last-child
      transform: rotate(180deg) translateY(4px)
  &Bg
    background: #a3d2a1
    width: 100vw
    height: 100vh

@media screen and (max-width: 700px)
  .wave1Bg
    height: 200vh
  .wave2Bg
    height: 200vh
  .wave3Bg
    height: 200vh

.box
    background: #ECE5C7
    color: #354259
    margin: 36px
    padding: 36px 76px
    border-radius: 16px
    display: flex
    flex-direction: column
    gap: 16px

h1
    text-align: center
    width: 100%
    font-size: 60px

.smallAdvantages
    display: flex
    gap: 32px
    flex-wrap: wrap
    justify-content: center

.smallAdvantage
    display: flex
    flex-direction: column
    align-items: center
    width: 10%
    text-align: center
    justify-content: space-between
    &Img
        width: 64px
        height: 64px
        background: radial-gradient(circle at 15% 80%, #C2DED1 35%, #CDC2AE 10%)
        border-radius: 50%
        display: flex
        justify-content: center
        align-items: center
        overflow: hidden
        flex-direction: column
        margin-bottom: 20px
        transition: .5s
    &Name
        font-size: 36px
        font-weight: bold
    &Description
        font-size: 24px
    &Par
      display: flex
      gap: 32px
      width: 48%
      &>*
        width: 50%

.smallAdvantageImg:hover, .bigAdvantageImg:hover
  transform: scale(1.2)
.bigAdvantages
    display: flex
    justify-content: space-between
    flex-wrap: wrap

.bigAdvantage
    display: flex
    gap: 10px
    width: 50%
    flex-wrap: wrap
    &Img
        min-width: 152px
        max-width: 152px
        min-height: 152px
        max-height: 152px
        background: radial-gradient(circle at 15% 80%, #FF9999 35%, #CDC2AE 10%)
        border-radius: 50%
        display: flex
        justify-content: center
        align-items: center
        transition: .5s
        &>img
            width: 86px
    &Content
        padding: 12px
        display: flex
        flex-direction: column
        gap: 10px
        width: 60%
    &Name
        font-size: 32px
        font-weight: 700
    &Description
        font-size: 22px


@media screen and (max-width: 1040px)
  .smallAdvantages
    justify-content: space-between
  .smallAdvantagePar
    width: 100%

  .bigAdvantage
    justify-content: center
    align-items: center
    &Content
      padding: 0
      text-align: center

@media screen and (max-width: 570px)
  .box
    padding: 12px
  .smallAdvantagePar
    justify-content: space-between

@media screen and (max-width: 430px)
  .smallAdvantagePar
      justify-content: center
      flex-wrap: wrap

  .bigAdvantages
    gap: 16px
  .bigAdvantage
    justify-content: center
    align-items: center
    &Content
      padding: 0
      text-align: center
    &Description
      display: none


@media screen and (max-width: 720px)
  .smallAdvantage
    &Name
      font-size: 24px
    &Description
      display: none
    &Img
      width: 96px
      height: 96px
      &>img
        height: 56px
  .bigAdvantage
    width: 100%
</style>
