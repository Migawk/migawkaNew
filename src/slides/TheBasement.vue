<template>
    <article id="basement">
        <h1>The Basement</h1>
        <h2>Contact me directly</h2>
        <form action="#" method="get">
            <input type="text" placeholder="Your name"/>
            <input type="text" placeholder="E-mail"/>
            <textarea placeholder="Message"></textarea>
            <input type="submit" value="Submit" class="submit"/>
        </form>
    </article>
</template>
<style lang="sass" scoped>
article
    position: absolute
    top: 100%
    width: 100%
    height: 100%
    background: #648764
    color: #fff
    display: flex
    flex-direction: column
    align-items: center
    z-index: 6
h1
    font-size: 92px

h2
    font-size: 48px
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