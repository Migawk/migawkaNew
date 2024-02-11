<template>
  <article>
    <h1>The Basement</h1>
    <h2>Contact me directly</h2>
    <form method="post">
      <input type="text" placeholder="Your name" />
      <input type="text" placeholder="E-mail" />
      <textarea name="" placeholder="Message"></textarea>
      <input type="submit" value="Submit" class="sub" />
    </form>
  </article>
</template>

<style scoped lang="sass">
h1
    font-size: 92px
    color: #F5F5DC
h2
    font-size: 48px
    color: #F5F5DC
    margin-bottom: 36px
article
    padding-top: 2vh
    padding-bottom: 12vh
    // width: 100vw
    min-height: 100vh
    display: flex
    flex-direction: column
    align-items: center
    background: #648764

form
    display: flex
    flex-direction: column
    align-items: flex-end
    gap: 16px
    width: 384px
    &>input, textarea
        padding: 12px
        border: none
        border-radius: 8px
        font-size: 24px
        font-weight: 700
        color: #648764
        max-width: 100%
        min-width: 100%
    &>textarea
        max-width: 100%
        min-width: 100%
        min-height: 56px
        max-height: 33vh

.sub
    background: #C2DED1
    color: #648764
    float: right
    max-width: min-content
    min-width: min-content
    cursor: pointer
    &:hover
        background: #A5BDB2
</style>
