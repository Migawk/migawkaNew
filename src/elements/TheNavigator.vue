<script lang="ts" setup>
import slide from '@/store/slide';
import { onMounted } from 'vue';
// movement for pointer in @/store/slide.ts

onMounted(() => {
    document.addEventListener('click', (e) => {
        const localTarget = e.target as HTMLElement;
        if(localTarget.id.startsWith('nav')) {
            console.log(Number(localTarget.id.slice(3)));
            slide.change(Number(localTarget.id.slice(3)));
        }
    })
});
</script>
<template>
    <nav>
        <div class="pointer" id="navPointer"></div>
        <div class="left">
            <button class="navCircle" id="nav0"></button>
            <button class="navCircle" id="nav1"></button>
            <button class="navCircle" id="nav2"></button>
            <button class="navCircle" id="nav3"></button>
        </div>
        <div class="right">
            <button class="navCircle" id="nav4"></button>
            <button class="navCircle" id="nav5"></button>
            <button class="navCircle" id="nav6"></button>
        </div>
    </nav>
</template>
<style lang="sass" scoped>
nav
    position: fixed
    bottom: 48px
    left: 48px
    display: flex
    gap: 10px
    z-index: 100

.pointer
    width: 20px
    height: 20px
    background: #aaa
    opacity: .6
    border-radius: 50%
    position: absolute
    left: 0
    top: 0
.left, .right
    display: flex
    flex-direction: column
    gap: 10px
.right
    margin-top: 90px

.navCircle
    width: 20px
    height: 20px
    background: #999
    opacity: .4
    border: none
    border-radius: 50%

@media screen and (max-width: 500px)
    nav
        display: none
</style>