<script lang="ts" setup>
import { ref } from 'vue';
import { onMounted, reactive } from 'vue';

const { token } = defineProps(["token"]);
const projects = reactive<IProj[]>([]);
const tools = reactive<ITool[]>([]);

const isCreatingProj = ref(false);
const isCreatingTool = ref(false);

onMounted(async () => {
    const { projects: projsRes, tools: tlsRes } = await fetch(import.meta.env.VITE_SERVER + "mig/projects").then(res => res.json());

    tlsRes.forEach((tl: ITool) => {
        tools.push(tl);
    });
    projsRes.forEach((proj: IProj) => {
        proj.stack = proj.stack.map((stEl) => {
            const st = tools.find((t: any) => t.name === stEl);

            if (st && !st.img.startsWith("http")) st.img = import.meta.env.VITE_SERVER + st.img;
            return st;
        }).filter(x => x != undefined);
        proj.img = import.meta.env.VITE_SERVER + proj.img;

        projects.push(proj);
    });
})

const toggleProj = () => isCreatingProj.value = !isCreatingProj.value;
const toggleTool = () => isCreatingTool.value = !isCreatingTool.value;
const parse = (el: HTMLInputElement) => el.value;

function uplPhoto(ev: any) {
    const { img } = ev.target;

    const formData = new FormData();
    formData.append("file", img.files[0]);
    formData.append("token", token);

    fetch(import.meta.env.VITE_SERVER + "static", {
        method: "POST",
        body: formData,
        headers: {
            "authentication": token
        }
    }).then(res => res.text()).then(console.log);
}
function createProj(ev: any) {
    const { target } = ev as any;

    const name = parse(target.name);
    const img = parse(target.img);
    const link = parse(target.link);
    const des = parse(target.des);
    const stack: any = [];

    target.tool.forEach((t: any) => {
        if (t.checked) stack.push(t.name)
    });

    fetch(import.meta.env.VITE_SERVER + "mig/projects", {
        method: "POST",
        body: JSON.stringify({
            token,
            project: {
                name,
                img,
                link,
                des,
                stack
            }
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json()).then(console.log)
}
function createTool(ev: any) {
    const { target } = ev as any;
    const name = parse(target.name);
    const link = parse(target.link);

    fetch(import.meta.env.VITE_SERVER + "mig/projects", {
        method: "POST",
        body: JSON.stringify({
            token,
            tool: {
                name,
                img: link
            }
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json()).then(console.log)
}

</script>
<template>
    <section id="admin">
        <form @submit.prevent="uplPhoto">
            <input type="file" name="img" id="img">
            <input type="submit" class="spec">
        </form>
        <div class="projects">
            <template v-if="projects">
                <div class="project" v-for="pr in projects">
                    <a :href="pr.link">
                        <img :src="pr.img" class="projectImg" id="portfImg" width=500 height=280 />
                    </a>
                    <div class="projectResponsive">
                        <div class="projectHiddenTitle">{{ pr.name }}</div>
                        <ul class="projectInfo">
                            <li class="projectStack" v-for="st in pr.stack">
                                <img :src="st.img" :alt="st.name" width="16">
                                <p class="projectStackText">{{ st.name }}</p>
                            </li>
                        </ul>
                    </div>
                    <div class="projectContent">
                        <div class="projectTitle">{{ pr.name }}</div>
                        <div class="projectDescription">
                            {{ pr.des }}
                        </div>
                    </div>
                </div>
                <div class="project" v-if="!isCreatingProj">
                    <button @click="toggleProj()" class="spec">New Proj</button>
                </div>
                <form class="project" @submit.prevent="createProj" v-else>
                    <div class="txtInps">
                        <input class="txtInp spec" placeholder="Title" type="text" name="name" id="name"><br />
                        <input class="txtInp spec" placeholder="Img link" type="text" name="img" id="img"><br />
                        <input class="txtInp spec" placeholder="Link" type="text" name="link" id="link"><br />
                        <input class="txtInp spec" placeholder="Descr" type="text" name="des" id="des"><br />
                    </div>
                    <ul class="chbksList">
                        <li v-for="tl in tools">
                            <label>
                                <input type="checkbox" :name="tl.name" id="tool">
                                {{ tl.name }}
                            </label>
                        </li>
                    </ul>
                    <input type="submit" class="spec">
                </form>
            </template>
        </div>
        <div class="list">
            <template v-if="tools">
                <div class="tls" v-for="tl in tools">
                    <div class="tool spec">
                        {{ tl.name }}
                    </div>
                </div>
            </template>
        </div>
        <button class="spec" @click="toggleTool" v-if="!isCreatingTool">New tool</button>
        <div v-else>
            <form @submit.prevent="createTool" class="list" style="flex-direction: column;">
                <input name="name" placeholder="Name" type="text" class="spec"><br />
                <input name="link" placeholder="Link" type="text" class="spec"><br />
                <input type="submit" class="spec">
            </form>
        </div>
    </section>
</template>
<style lang="sass" scoped>
section
    background: #191828
    position: absolute
    left: 0
    top: 0
    width: 100vw
    height: 100vh
    padding: 36px 0
    display: flex
    flex-direction: column
    align-items: center
    overflow: hidden
    color: #fff

.projects
    display: flex
    flex-wrap: wrap
    gap: 16px
    width: 90vw
.project
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  gap: 48px
  min-width: 500px
  max-width: 500px
  &Img
    border-radius: 12px
    object-fit: cover
  &Info
    display: flex
    padding: 12px 24px
    gap: 32px

    background: #46546C
    color: #fff

    font-size: 24px
    font-weight: 700

    border-radius: 12px
    & > *:first-child
      list-style-type: none
  &Stack
    list-style-type: circle
    display: flex
    justify-content: center
    align-items: center
    gap: 8px
    &Text
      font-size: 16px
      transform: translateY(-1px)
  &Content
    font-weight: 700
    color: #fff
  &HiddenTitle
    display: none
    color: #fff
    font-size: 36px
    padding: 10px 8px
  &Title
    font-size: 36px
  &Description
    font-size: 24px
  &Rating>.stars
    display: flex
    align-items: center
    justify-content: center
    gap: 4px

.spec
    background: #00000044
    padding: 4px
    border: none
    border-radius: 4px
    color: #fff
    transition: .5s
    font-size: 16px
    &:focus
        outline: 1px solid red
.txtInps
    display: flex
    flex-direction: column
    gap: 4px
.tool
    padding: 8px
.list
    display: flex
    gap: 6px

.chbksList
    display: grid
    grid-template-columns: 1fr 1fr
    gap: 16px
</style>