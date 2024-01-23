<script setup lang="ts">
import TheBracket from '@/SVG/TheBracket.vue';

interface ISkill {
  name: string;
  description: string;
}

const skills: ISkill[] = [
  {
    name: 'Front-end',
    description: 'Layouting, SASS, React.js, Vue.js, Responsive, Semantic, Redux/Zustand.'
  },
  {
    name: 'Back-end',
    description: 'SQL, Nest.js(+Express.js), http(Node.js), Prisma ORM.'
  },
  {
    name: 'Dev-ops',
    description: 'Linux, Docker, Nginx, Windows, Networking'
  },
  {
    name: 'Other',
    description:
      'Git, PostgreSQL, MySQL, SQLite, TypeScript, declarative(Rx.js), lodash, Inkscape(SVG), Python,'
  }
];
</script>

<template>
  <article id="skills">
    <h1>Skills</h1>
    <TheBracket class="bracket"/>
    <section>
      <skill-column>
        <the-skill v-for="({ name, description }, index) in skills.slice(0, 2)" :key="index">
          <skill-stack>
            <skill-name> {{ name }} </skill-name>
            <hr />
            <skill-description>
              {{ description }}
            </skill-description>
          </skill-stack>
        </the-skill>
      </skill-column>
      <skill-column>
        <the-skill v-for="({ name, description }, index) in skills.slice(2)" :key="index">
          <skill-stack>
            <skill-name> {{ name }} </skill-name>
            <hr />
            <skill-description>
              {{ description }}
            </skill-description>
          </skill-stack>
        </the-skill>
      </skill-column>
    </section>
  </article>
</template>

<style scoped lang="sass">
article
    background: #A3B96E
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    color: #fff
    padding: 0 32px
    max-width: 100vw
    min-width: 100vw
    min-height: 100vh
    max-height: 100vh

section
    display: flex
    justify-content: center
    gap: 12px



h1
    font-size: 92px
    font-weight: 800

skill-column
    display: flex
    flex-direction: column
    gap: 10px
    width: 646px

    &:last-child
        flex: 50%

@media screen and (max-width: 1200px)
  section
    display: flex
    flex-direction: column
    gap: 24px
  skill-column
    gap: 24px
the-skill
    background: #ECE5C7
    color: #354259
    padding: 16px
    border-radius: 8px
    display: flex
    flex-direction: column
    gap: 10px
    height: min-content
skill-name
    font-size: 46px
    font-weight: 800

skill-description
    font-size: 24px
    font-weight: 800

hr
    height: 4px
    background: #354259

.bracket
  margin: 16px 0
</style>
