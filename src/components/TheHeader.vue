<script setup lang="ts">
import HeaderWave from '@/SVG/HeaderWave.vue';
import NavButton from '@/UI/NavButton.vue';
import TheBurger from '@/SVG/TheBurger.vue';
</script>
<template>
  <div class="topWave"><HeaderWave /></div>
  <header>
    <div class="logo">Migawka</div>
    <nav>
      <ul>
        <li><NavButton title="Main" des="Show me" link="#main" /></li>
        <li><NavButton title="Why me" des="Briefly me" link="#why" /></li>
        <li><NavButton title="Portfolio" des="My works" link="#portfolio" /></li>
        <li><NavButton title="Blog" des="Minds" link="#blog" /></li>
        <li><NavButton title="Resume" des="There we go" link="#resume" /></li>
      </ul>
    </nav>
    <button class="burger">
      <TheBurger />
    </button>
  </header>
  <div class="bottomWave" id="headersBottomWave"><HeaderWave /></div>
</template>
<style scoped lang="sass">
.topWave
    transform: translateY(6px)
.bottomWave
    transform: rotate(180deg) translateY(6px)
    z-index: 998
    position: sticky
    top: 0

header
    position: sticky
    top: 10px
    background: #ECE5C7
    display: flex
    align-items: center
    justify-content: space-between
    gap: 32px
    padding: 0 96px 0 64px
    color: #354259
    z-index: 999
.logo
    font-size: 58px
    font-weight: 800

nav
    width: 60%
ul
    list-style: none
    display: flex
    justify-content: space-between
    width: 100%

.burger
  display: none
@media screen and (max-width: 1600px)
  header
    padding: 0 12px
    justify-content: space-between
  .logo
    font-size: 36px
  nav
    width: 100%

@media screen and (max-width: 968px)
  nav
    display: none
  .burger
    display: flex
    justify-content: center
    align-items: center
    padding: 0 16px
    border: none
    background: none
    cursor: pointer
</style>
