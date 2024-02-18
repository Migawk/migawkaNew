<script setup lang="ts"></script>
<template>
  <article id="skills">
    <h1>Skills</h1>
    <div class="parentense"></div>
    <div class="skills">
        <div class="row">
            <div class="skill">
                <div class="name">Front-end</div>
                <hr>
                <div class="content">Layouting, SASS, React.js, Vue.js, Responsive, Semantic, Redux/Zustand.</div>
            </div>
            <div class="skill">
                <div class="name">Back-end</div>
                <hr>
                <div class="content">SQL, Nest.js(+Express.js), http(Node.js), Prisma ORM.</div>
            </div>
        </div>
        <div class="row">
            <div class="skill">
                <div class="name">Dev-ops</div>
                <hr>
                <div class="content">Linux, Docker, Nginx, Windows, Networking</div>
            </div>
            <div class="skill">
                <div class="name">Other</div>
                <hr>
                <div class="content">Git, PostgreSQL, MySQL, SQLite, TypeScript, declarative(Rx.js), lodash, Inkscape(SVG), Python.</div>
            </div>
        </div>
    </div>
  </article>
</template>
<style lang="sass" scoped>
article
    background: #A3B96E
    height: 100%
    width: 100%
    position: absolute
    // top: 100%
    font-weight: 700

h1
    text-align: center
    font-size: 92px
    color: #fff

.skills
    padding: 0 32px
    display: flex
    justify-content: center
    align-items: flex-start
    width: 100%
    gap: 10px

.row
    display: flex
    flex-direction: column
    gap: 10px
    width: 50%

.skill
    background: #ECE5C7
    color: #354259
    border-radius: 8px
    padding: 16px
    display: flex
    flex-direction: column
    gap: 10px

hr
    background: #354259
    height: 4px
    border: none

.name
    font-size: 46px

.content
    font-size: 24px
</style>
