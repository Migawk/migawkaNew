<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import locker from '../assets/locker.svg';
import InterestedStars from "@/SVG/InterestedStars.vue"
import slide from '@/store/slide';

const open = ref(false);
const isSend = ref(false);
const isErr = ref(false);

function blinking(starList: HTMLCollection) {
  if (slide.current !== 5) return;

  for (let i = 0; i <= 3; i++) {
    const star = starList[Math.round(Math.random() * starList.length - 1)];
    if (!star) return;

    blink(star);
  }
  function blink(el: Element) {
    el.animate([{
      opacity: "1",
    }, {
      opacity: ".1"
    }, {
      opacity: "1",
    }], {
      duration: Math.round(Math.random() * (8000 - 3000) + 3000),
      fill: "forwards"
    });
  }
}
onMounted(() => {
  const constellation = document.getElementById('constellation')!;
  const randomStars = document.getElementById('randomStars')!;
  const starList = constellation.children as unknown as HTMLCollection;
  const freeStarList = randomStars.children as unknown as HTMLCollection;

  setInterval(() => { blinking(starList); blinking(freeStarList) }, 1500);
});

function formSubmit(e: Event) {
  isSend.value = true;

  const pswd = (e.target as HTMLFormElement).password;

  fetch('https://server.migawka.space/cv', {
    method: 'POST',
    body: JSON.stringify({ password: pswd.value }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((res) => res.blob())
    .then((res) => {
      isSend.value = false;
      if (res.size === 0) throw new Error('403');
      const file = window.URL.createObjectURL(res as any);
      window.location.assign(file);
    })
    .catch(() => {
      isSend.value = false;
      isErr.value = true;
      pswd.animate(
        [
          {
            transform: 'translate(-2px, 2px)'
          },
          {
            transform: 'translate(2px, -2px)',
            background: 'white'
          },
          {
            transform: 'translate(-2px, -2px)'
          },
          {
            transform: 'translate(2px, 2px)'
          },
          {
            transform: 'translate(0, 0)'
          }
        ],
        {
          duration: 500
        }
      );
    });
}

function handleClick(e: Event) {
  const el = e.target as HTMLElement;
  if (el.id !== 'modalField') return;
  if (window.innerWidth < 500) return;
  open.value = false;
}
</script>
<template>
  <article id="interested">
    <div class="waves"></div>
    <div class="page">
      <h1>Are you interested?</h1>
      <div class="buttonArea">
        <p>* Required a password</p>
        <button class="button" id="interestedBtn" @click="() => {
          open = !open;
        }
          ">
          <img :src="locker" id="interestedBtnChild" />
          <p id="interestedBtnChild">Open the resume</p>
        </button>
        <teleport to="body">
          <div class="modalBg" v-if="open === true" id="modalField" @click="handleClick">
            <div class="modal">
              <div class="locker">
                <img :src="locker" />
              </div>
              <form class="form" @submit.prevent="formSubmit">
                <p><span v-if="isErr">Wrong password :&lt;</span></p>
                <input type="password" @keyup="isErr = false" placeholder="Password" class="formPassword"
                  name="password" :disabled="isSend" />
                <input type="submit" value="Send" class="formSubmit" :disabled="isSend" />
              </form>
            </div>
          </div>
        </teleport>
      </div>
      <div class="positioner">
        <!-- <img class="stars" :src="stars" /> -->
        <InterestedStars class="stars" />
        <svg class="forest" viewBox="0 0 1366 276" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_25_436)">
            <path d="M935.843 221.288V279.017H963.877V221.288H935.843Z" fill="#1D2B32" />
            <path d="M833 221.288H1062.74L949.944 108.485L833 221.288Z" fill="#1D2B32" />
            <path d="M852.076 154.934H1042.84L949.115 37.9835L852.076 154.934Z" fill="#1D2B32" />
            <path d="M874.47 88.5787H1020.44L948.7 -1L874.47 88.5787Z" fill="#1D2B32" />
            <path d="M-165 295.772H27L-67.2671 201.5L-165 295.772Z" fill="#1F313A" />
            <path d="M-149.057 240.317H10.3652L-67.9597 142.579L-149.057 240.317Z" fill="#1F313A" />
            <path d="M22 276.772H214L119.733 182.5L22 276.772Z" fill="#1F313A" />
            <path d="M37.9429 221.317H197.365L119.04 123.579L37.9429 221.317Z" fill="#1F313A" />
            <path d="M56.6567 165.863H178.65L118.693 91L56.6567 165.863Z" fill="#1F313A" />
            <path d="M756 293.772H948L853.733 199.5L756 293.772Z" fill="#1F313A" />
            <path d="M771.942 238.317H931.365L853.04 140.579L771.942 238.317Z" fill="#1F313A" />
            <path d="M790.657 182.863H912.65L852.693 108L790.657 182.863Z" fill="#1F313A" />
            <path d="M1143 293.772H1335L1240.73 199.5L1143 293.772Z" fill="#1F313A" />
            <path d="M1158.94 238.317H1318.36L1240.04 140.579L1158.94 238.317Z" fill="#1F313A" />
            <path d="M1177.66 182.863H1299.65L1239.69 108L1177.66 182.863Z" fill="#1F313A" />
            <path d="M370 304.772H562L467.733 210.5L370 304.772Z" fill="#1F313A" />
            <path d="M385.942 249.317H545.365L467.04 151.579L385.942 249.317Z" fill="#1F313A" />
            <path d="M404.657 193.863H526.65L466.693 119L404.657 193.863Z" fill="#1F313A" />
            <path d="M194 287.772H386L291.733 193.5L194 287.772Z" fill="#1F313A" />
            <path d="M209.942 232.317H369.364L291.04 134.579L209.942 232.317Z" fill="#1F313A" />
            <path d="M228.657 176.863H350.65L290.693 102L228.657 176.863Z" fill="#1F313A" />
            <path d="M556 276.772H748L653.733 182.5L556 276.772Z" fill="#1F313A" />
            <path d="M571.942 221.317H731.365L653.04 123.579L571.942 221.317Z" fill="#1F313A" />
            <path d="M590.657 165.863H712.65L652.693 91L590.657 165.863Z" fill="#1F313A" />
            <path d="M968 276.772H1160L1065.73 182.5L968 276.772Z" fill="#1F313A" />
            <path d="M983.942 221.317H1143.36L1065.04 123.579L983.942 221.317Z" fill="#1F313A" />
            <path d="M1002.66 165.863H1124.65L1064.69 91L1002.66 165.863Z" fill="#1F313A" />
            <path d="M-82 289.772H110L15.7329 195.5L-82 289.772Z" fill="#314C59" />
            <path d="M-66.0571 234.317H93.3652L15.0403 136.579L-66.0571 234.317Z" fill="#314C59" />
            <path d="M-47.3433 178.863H74.6495L14.6929 104L-47.3433 178.863Z" fill="#314C59" />
            <path d="M190.949 270.772V319.017H214.378V270.772H190.949Z" fill="#314C59" />
            <path d="M105 270.772H297L202.733 176.5L105 270.772Z" fill="#314C59" />
            <path d="M120.943 215.317H280.365L202.04 117.579L120.943 215.317Z" fill="#314C59" />
            <path d="M139.657 159.863H261.65L201.693 85L139.657 159.863Z" fill="#314C59" />
            <path d="M839 287.772H1031L936.733 193.5L839 287.772Z" fill="#314C59" />
            <path d="M854.942 232.317H1014.36L936.04 134.579L854.942 232.317Z" fill="#314C59" />
            <path d="M873.657 176.863H995.65L935.693 102L873.657 176.863Z" fill="#314C59" />
            <path d="M1226 287.772H1418L1323.73 193.5L1226 287.772Z" fill="#314C59" />
            <path d="M1241.94 232.317H1401.36L1323.04 134.579L1241.94 232.317Z" fill="#314C59" />
            <path d="M1260.66 176.863H1382.65L1322.69 102L1260.66 176.863Z" fill="#314C59" />
            <path d="M453 298.772H645L550.733 204.5L453 298.772Z" fill="#314C59" />
            <path d="M468.942 243.317H628.365L550.04 145.579L468.942 243.317Z" fill="#314C59" />
            <path d="M487.657 187.863H609.65L549.693 113L487.657 187.863Z" fill="#314C59" />
            <path d="M277 281.772H469L374.733 187.5L277 281.772Z" fill="#314C59" />
            <path d="M292.942 226.317H452.364L374.04 128.579L292.942 226.317Z" fill="#314C59" />
            <path d="M311.657 170.863H433.65L373.693 96L311.657 170.863Z" fill="#314C59" />
            <path d="M1030.95 266.772V315.017H1054.38V266.772H1030.95Z" fill="#314C59" />
            <path d="M945 266.772H1137L1042.73 172.5L945 266.772Z" fill="#314C59" />
            <path d="M960.942 211.317H1120.36L1042.04 113.579L960.942 211.317Z" fill="#314C59" />
            <path d="M979.657 155.863H1101.65L1041.69 81L979.657 155.863Z" fill="#314C59" />
            <path d="M650 283.772H842L747.733 189.5L650 283.772Z" fill="#314C59" />
            <path d="M665.942 228.317H825.365L747.04 130.579L665.942 228.317Z" fill="#314C59" />
            <path d="M684.657 172.863H806.65L746.693 98L684.657 172.863Z" fill="#314C59" />
            <path d="M1136.95 270.772V319.017H1160.38V270.772H1136.95Z" fill="#314C59" />
            <path d="M1051 270.772H1243L1148.73 176.5L1051 270.772Z" fill="#314C59" />
            <path d="M1066.94 215.317H1226.36L1148.04 117.579L1066.94 215.317Z" fill="#314C59" />
            <path d="M1085.66 159.863H1207.65L1147.69 85L1085.66 159.863Z" fill="#314C59" />
          </g>
          <defs>
            <clipPath id="clip0_25_436">
              <rect width="1379" height="285" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  </article>
</template>
<style lang="sass" scoped>
article
    background: #191828
    position: absolute
    top: calc(100% + 300px)
    width: 100%
    height: 100%
    padding: 36px 0
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-between
    overflow: hidden

.page
  display: flex
  justify-content: space-between
  align-items: center
  flex-direction: column
  height: 100vh
.modal
    position: absolute
    left: 50%
    top: 50%
    z-index: 50
    transform: translate(-50%, -50%)
    background: #354259
    border-radius: 12px
    width: 400px
    height: 250px
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column

    &Bg
        position: absolute
        left: 0
        top: 0
        background: rgba(0, 0, 0, .5)
        width: 100%
        height: 100%
        z-index: 50

@media screen and (max-width: 450px)
  .modal
    width: 100%

.locker
    position: absolute
    transform: translateY(-145%)
    background: #3A5A69
    padding: 16px
    border-radius: 50%
    width: 86px
    height: 86px
    display: flex
    justify-content: center
    align-items: center
    &>img
        height: 55px

.form
    display: flex
    flex-direction: column
    align-items: flex-end
    gap: 12px
    & > p
      color: #9C4747
      font-weight: 700
      font-size: 24px
      height: 36px
      width: 210px
    &Password
        border: none
        background: #333333
        color: #9C4747
        border-radius: 12px
        padding: 12px
        border: 4px solid rgba(0, 0, 0, 0)
        outline: 2px solid rgba(0, 0, 0, 0)
        transition: .4s
        position: relative
        &:hover
            outline: 2px solid #FF4500
            border: 4px solid #354259
        &:focus
            outline: 2px solid #9C4747
            border: 4px solid #354259
        &:disabled
          background: #555
          &:hover
            outline: 2px solid #9C4747
    &Submit
        background: #B0E57C
        border: none
        border-radius: 12px
        color: #fff
        padding: 12px
        font-weight: 700
        font-size: 14px
        border: 4px solid rgba(0, 0, 0, 0)
        outline: 2px solid rgba(0, 0, 0, 0)
        transition: .4s
        &:hover
            outline: 2px solid #B0E57C
            border: 4px solid #354259
        &:disabled
          background: #D6F7C2
          color: #333
          &:hover
            outline: 2px solid #D6F7C2


h1
    font-size: 108px
    text-align: center
    color: #fff
    z-index: 5

.buttonArea
    color: #3A5A69
    font-weight: 700
    display: flex
    flex-direction: column
    gap: 12px
.button
    background: #3A5A69
    border: none
    border-radius: 8px
    display: flex
    align-items: center
    color: #fff
    gap: 12px
    font-size: 32px
    width: 280px
    padding: 16px 24px
    z-index: 5
    transition: .2s
    &:hover
      animation: shake 1s infinite

@media screen and (max-width: 768px)
    h1
        font-size: 36px

@keyframes shake
  10%, 90%
    transform: translate(-2px, 2px)
  20%, 80%
    transform: translate(2px, -2px)
  30%, 70%
    transform: translate(-2px, -2px)
  40%, 60%
    transform: translate(2px, -2px)
  50%
    transform: translate(0, 0)

.positioner
  height: 25vh
.stars
  position: absolute
  left: 0
  top: 0
  width: 100vw
  object-fit: cover
.forest
  position: absolute
  bottom: 0
  left: 0
  width: 100vw
</style>
