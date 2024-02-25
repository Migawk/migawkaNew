<script lang="ts" setup>
import slide from '@/store/slide';


// movement for pointer in @/store/slide.ts
</script>
<template>
    <nav>
        <div class="pointer" id="navPointer"></div>
        <div class="left">
            <div class="navCircle" id="nav1"></div>
            <div class="navCircle" id="nav2"></div>
            <div class="navCircle" id="nav3"></div>
            <div class="navCircle" id="nav4"></div>
        </div>
        <div class="right">
            <div class="navCircle" id="nav5"></div>
            <div class="navCircle" id="nav6"></div>
            <div class="navCircle" id="nav7"></div>
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
    z-index: 10

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
    border-radius: 50%
</style>