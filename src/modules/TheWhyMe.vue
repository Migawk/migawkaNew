<script setup lang="ts">
import speed from '@/assets/speed.svg';
import webpage from '@/assets/webpage.svg';
import pizza from '@/assets/pizza.svg';
import phone from '@/assets/phone.svg';
import server from '@/assets/server.svg';
</script>
<template>
  <article id="whyMe">
    <section>
      <h1>Why me?</h1>
      <div class="smallAdvantages">
        <div class="smallAdvantage">
          <div class="img"><img :src="speed" alt="rapid" /></div>
          <div class="title">Rapid</div>
          <div class="des">I prefer to write quick to load websites.</div>
        </div>
        <div class="smallAdvantage">
          <div class="img"><img :src="pizza" alt="piece of pizza" /></div>
          <div class="title">Youthful</div>
          <div class="des">For teenagers, children and young adult.</div>
        </div>
        <div class="smallAdvantage">
          <div class="img"><img :src="phone" alt="phone" /></div>
          <div class="title">Responsive</div>
          <div class="des">Websites always works on any devices: Phone, Tablet, PC, TV.</div>
        </div>
        <div class="smallAdvantage">
          <div class="img"><img :src="server" alt="server" /></div>
          <div class="title">Web-server</div>
          <div class="des">Proficient in web server management and configuration.</div>
        </div>
      </div>
      <div class="bigAdvantages">
        <div class="bigAdvantage">
          <div class="img"><img :src="webpage" /></div>
          <div class="info">
            <div class="title">Front-end</div>
            <div class="des">
              Proficient in front-end development. Interested in creating responsive and
              user-friendly interfaces to enhance overall user experience.
            </div>
          </div>
        </div>
        <div class="bigAdvantage">
          <div class="img"><img :src="server" /></div>
          <div class="info">
            <div class="title">Back-end / Sysadmin</div>
            <div class="des">
              Experienced in back-end, particular in server-side programming and adept at system
              administration tasks for performance and reliability.
            </div>
          </div>
        </div>
      </div>
    </section>
  </article>
  <div class="normalization"></div>
</template>

<style scoped lang="sass">
article
    background: #A3B96E
    max-width: 100vw
    padding: 36px
    transform: translateY(-96px)
    z-index: 1
section
    background: #ECE5C7
    color: #354259
    border-radius: 16px
    width: 100%
    display: flex
    justify-content: center
    flex-direction: column
    gap: 16px
    padding: 36px 86px
    margin: 128px 0

h1
    font-size: 60px
    text-align: center
.smallAdvantages
    display: flex
    justify-content: space-between
    gap: 106px

.bigAdvantages
    display: flex
    justify-content: space-between
    gap: 96px
    margin-bottom: 12px

.smallAdvantage
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    &>.img
        background: radial-gradient(circle at 50% 100%, #C2DED1 40%, #CDC2AE 40%)
        border-radius: 100%
        width: 64px
        height: 64px
        display: flex
        justify-content: center
        align-items: center
        &>img
            width: 36px
            height: 36px
    &>.title
        font-size: 36px
        font-weight: 800
        margin-bottom: 6px
    &>.des
        font-size: 24px
        text-align: center

.bigAdvantage
    display: flex
    gap: 12px
    &>.img
        background: #CDC2AE
        border-radius: 100%
        min-width: 152px
        height: 152px
        display: flex
        justify-content: center
        align-items: center
        &>img
          min-width: 86px
    &>.info
        &>.title
            font-size: 32px
            font-weight: 800
        &>.des
            font-size: 22px

@media screen and (max-width: 1600px)
  section
    gap: 8px
  .smallAdvantages
    display: grid
    grid-template-columns: 1fr 1fr
    gap: 4px
  .bigAdvantages
    flex-wrap: wrap
    gap: 4px

  .smallAdvantage
    &>.title
      font-size: 24px
    &>.des
      font-size: 20px

@media screen and (max-width: 1000px)
  h1
    font-size: 36px
  section
    padding: 12px 36px

  .bigAdvantages
    margin-top: 16px
  .bigAdvantage
    display: flex
    flex-direction: column
    justify-content: center
    align-items: flex-start

.normalization
  min-width: 100%
  max-width: 100%
  height: 224px
  position: absolute
  background: #A3B96E
  transform: translateY(-96px)
  z-index: -2
</style>
