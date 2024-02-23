<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import locker from '../assets/locker.svg';
import InterestedEggs from '@/SVG/InterestedEggs.vue';

const open = ref(false);

function formSubmit(e: Event) {
  console.log(e);
}

function handleClick(e: Event) {
  const el = e.target as HTMLElement;
  if (el.id !== 'modalField') return;
  open.value = false;
}
</script>
<template>
  <article id="interested">
    <h1>Are you interested?</h1>
    <div class="buttonArea">
      <p>* Required a password</p>
      <button class="button" @click="open = !open">
        <img :src="locker" />
        <p>Open the resume</p>
      </button>
      <teleport to="body">
        <div class="modalBg" v-if="open === true" id="modalField" @click="handleClick">
          <div class="modal">
            <div class="locker">
              <img :src="locker" />
            </div>
            <form class="form" @submit.prevent="formSubmit">
              <input type="password" placeholder="Password" class="formPassword" name="password" />
              <input type="submit" value="Send" class="formSubmit" />
            </form>
          </div>
        </div>
      </teleport>
    </div>
    <button class="toFooter">To footer</button>
    <div class="topEggs"><InterestedEggs /></div>
    <div class="bottomEggs"><InterestedEggs /></div>
  </article>
</template>
<style lang="sass" scoped>
article
    background: #354259
    position: absolute
    top: 100%
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
    height: 200px
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

.locker
    position: absolute
    transform: translateY(-120%)
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
    &Password
        border: none
        background: #333333
        color: #9C4747
        border-radius: 12px
        padding: 12px
        border: 4px solid rgba(0, 0, 0, 0)
        outline: 2px solid rgba(0, 0, 0, 0)
        transition: .5s
        &:focus
            outline: 2px solid #9C4747
            border: 4px solid #354259
    &Submit
        background: #B0E57C
        border: none
        border-radius: 12px
        color: #fff
        padding: 12px
        font-weight: 700
        font-size: 14px
        cursor: pointer

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
    cursor: pointer
    z-index: 5

.toFooter
    font-size: 56px
    background: none
    color: #fff
    border: none
    cursor: pointer
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
</style>
