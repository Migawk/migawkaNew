<script lang="ts" setup>
import speed from '../assets/speed.svg';
import pizza from '../assets/pizza.svg';
import phone from '../assets/phone.svg';
import server from '../assets/server.svg';
import webpage from '../assets/webpage.svg';
import HeaderWave from '@/SVG/HeaderWave.vue';

</script>
<template>
  <article id="whyMe">
    <HeaderWave id="wave1" class="wave1"/>
    <div class="box">
      <h1>Why me?</h1>
      <div class="smallAdvantages">
        <div class="smallAdvantage">
          <div class="smallAdvantageImg">
            <img :src="speed" alt="" />
          </div>
          <div class="smallAdvantageName">Rapid</div>
          <div class="smallAdvantageDescription">I prefer to write quick to load websites.</div>
        </div>
        <div class="smallAdvantage">
          <div class="smallAdvantageImg"><img :src="pizza" alt="" /></div>
          <div class="smallAdvantageName">Youthful</div>
          <div class="smallAdvantageDescription">For teenagers, children and young adult.</div>
        </div>
        <div class="smallAdvantage">
          <div class="smallAdvantageImg"><img :src="phone" alt="" /></div>
          <div class="smallAdvantageName">Responsive</div>
          <div class="smallAdvantageDescription">
            Websites always works on any devices: Phone, Tablet, PC, TV.
          </div>
        </div>
        <div class="smallAdvantage">
          <div class="smallAdvantageImg"><img :src="server" alt="" /></div>
          <div class="smallAdvantageName">Web-server</div>
          <div class="smallAdvantageDescription">
            Proficient in web server management and configuration.
          </div>
        </div>
      </div>
      <div class="bigAdvantages">
        <div class="bigAdvantage">
          <div class="bigAdvantageImg"><img :src="webpage"/></div>
          <div class="bigAdvantageContent">
            <div class="bigAdvantageName">Front-end</div>
            <div class="bigAdvantageDescription">
              Proficient in front-end development. Interested in creating responsive and
              user-friendly interfaces to enhance overall user experience.
            </div>
          </div>
        </div>
        <div class="bigAdvantage">
          <div class="bigAdvantageImg"><img :src="server"/></div>
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
  </article>
</template>

<style lang="sass" scoped>
#whyMe
    background: #A3B96E
    position: absolute
    top: calc(100% + 120px)
    height: 100%
    width: 100%

.wave1
  position: absolute
  transform: translateY(-100%)
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
    justify-content: space-between
    gap: 64px

.smallAdvantage
    display: flex
    flex-direction: column
    align-items: center
    width: 15%
    text-align: center
    &Img
        width: 64px
        height: 64px
        background: radial-gradient(circle at 50% 100%, #C2DED1 40%, #CDC2AE 10%)
        border-radius: 50%
        display: flex
        justify-content: center
        align-items: center
        overflow: hidden
        flex-direction: column
        margin-bottom: 20px
    &Name
        font-size: 36px
        font-weight: bold
    &Description
        font-size: 24px

.bigAdvantages
    display: flex
    justify-content: space-between

.bigAdvantage
    display: flex
    gap: 10px
    width: 50%
    &Img
        min-width: 152px
        max-width: 152px
        min-height: 152px
        max-height: 152px
        background: #CDC2AE
        border-radius: 50%
        display: flex
        justify-content: center
        align-items: center
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
</style>
