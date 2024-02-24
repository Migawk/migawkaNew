<template>
  <article id="basement">
    
    <h1>The Basement</h1>
    <h2>Contact me directly</h2>
    <form action="#" method="get" @submit.prevent="console.log">
      <input type="text" placeholder="Your name" required />
      <input type="email" placeholder="E-mail" required />
      <textarea placeholder="Message" required minlength="36"></textarea>
      <input type="submit" value="Submit" class="submit" />
    </form>
  </article>
</template>
<style lang="sass" scoped>
article
    width: 100vw
    height: 100vh
    background: #648764
    color: #fff
    display: flex
    flex-direction: column
    align-items: center
    background-size: cover
    background-position: bottom
h1
    font-size: 92px
    word-break: break-all


h2
    font-size: 48px

@media screen and (max-width: 450px)
    h1
        font-size: 48px
    h2
        font-size: 36px
form
    display: flex
    flex-direction: column
    align-items: flex-end
    gap: 16px
    margin-top: 36px

input, textarea
    color: #648764
    padding: 12px
    border: none
    border-radius: 8px
    font-size: 24px
    outline: none

.submit
    cursor: pointer

textarea
    min-width: 100%
    max-width: 100%
    max-height: 128px
    min-height: 64px
    resize: vertical
</style>
