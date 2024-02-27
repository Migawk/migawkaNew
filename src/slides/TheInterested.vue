<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import locker from '../assets/locker.svg';
import InterestedEggs from '@/SVG/InterestedEggs.vue';
import slide from '@/store/slide';

const open = ref(false);
const isSend = ref(false);
const isErr = ref(false);

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
    <h1>Are you interested?</h1>
    <div class="buttonArea">
      <p>* Required a password</p>
      <button
        class="button"
        id="interestedBtn"
        @click="
          () => {
            open = !open;
          }
        "
      >
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
              <input
                type="password"
                @keyup="isErr = false"
                placeholder="Password"
                class="formPassword"
                name="password"
                :disabled="isSend"
              />
              <input type="submit" value="Send" class="formSubmit" :disabled="isSend" />
            </form>
          </div>
        </div>
      </teleport>
    </div>
    <button
      class="toFooter"
      @click="
        () => {
          slide.changeDelta(1);
          slide.change();
        }
      "
    >
      To footer
    </button>
    <div class="topEggs"><InterestedEggs /></div>
    <div class="bottomEggs"><InterestedEggs /></div>
  </article>
</template>
<style lang="sass" scoped>
article
    background: #354259
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
    background: #9C4747
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
    color: #9C4747
    font-weight: 700
    display: flex
    flex-direction: column
    gap: 12px
.button
    background: #9C4747
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

.toFooter
    font-size: 56px
    background: none
    color: #fff
    border: none
    z-index: 5
    font-weight: 700

.topEggs
    &>*
        position: absolute
        top: 0
        right: 0
        transform: translate(24px, -24px)
.bottomEggs
    &>*
        position: absolute
        bottom: 0
        left: 0
        transform: rotate(180deg) translate(2px, -129px)
        z-index: 3
@media screen and (max-width: 768px)
    h1
        font-size: 36px

    .topEggs
        &>*
            width: 256px
            height: 256px
            transform: translate(24px, -48px)
    .bottomEggs
        &>*
            width: 256px
            height: 256px
            transform: rotate(180deg) translate(2px, -64px)

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
</style>
