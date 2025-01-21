<script lang="ts" setup>
import TheProject from '@/elements/TheProject.vue';
import { ref } from 'vue';
import { onMounted, reactive } from 'vue';

const { token } = defineProps(["token"]);
const projects = reactive<IProj[]>([]);
const tools = reactive<ITool[]>([]);

type TMsg = {
    color: string;
    content: string
} | null;

const phMsg = ref<TMsg>(null);
const tMsg = ref<TMsg>(null);
const prMsg = ref<TMsg>(null);

const isCreatingProj = ref(false);
const isCreatingTool = ref(false);

onMounted(async () => {
    const { projects: projectFetched, tools: toolFetched } = await fetch(import.meta.env.VITE_SERVER + "mig/projects").then(res => res.json()) as { projects: IProj[], tools: ITool[] };

    projectFetched.forEach((proj: IProj) => {
        projects.push(proj);
    });

    toolFetched.forEach(t => {
        tools.push(t);
    });
});

const toggleProj = () => isCreatingProj.value = !isCreatingProj.value;
const toggleTool = () => isCreatingTool.value = !isCreatingTool.value;
const parse = (el: HTMLInputElement) => el.value;

function setMsg(ent: any, content: string, color: string) {
    ent.value = {
            content,
            color
        }
        setTimeout(() => {
            ent.value = null;
        }, 5000);
}
function uplPhoto(ev: any) {
    const { img } = ev.target;

    const formData = new FormData();
    formData.append("file", img.files[0]);

    fetch(import.meta.env.VITE_SERVER + "static", {
        method: "POST",
        body: formData,
        headers: {
            "Authentication": `Bearer ${token}`
        }
    }).then(res => res.text()).then((res) => {
        setMsg(phMsg, "File uploaded", "#191")
    });
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
            project: {
                name,
                img,
                link,
                des,
                stack
            }
        }),
        headers: {
            "Content-Type": "application/json",
            "Authentication": `Bearer ${token}`
        }
    }).then(res => res.json()).then(() => {
        setMsg(prMsg, "File uploaded", "#191")
    })
}
function createTool(ev: any) {
    const { target } = ev as any;
    const name = parse(target.name);
    const link = parse(target.link);

    fetch(import.meta.env.VITE_SERVER + "mig/projects", {
        method: "POST",
        body: JSON.stringify({
            tool: {
                name,
                img: link
            }
        }),
        headers: {
            "Content-Type": "application/json",
            "Authentication": `Bearer ${token}`
        }
    }).then(res => res.json()).then(() => {
        setMsg(tMsg, "File uploaded", "#191")
    })
}
</script>
<template>
    <section id="admin">
        <div class="msgs">
            <div v-if="phMsg">{{ phMsg.content }}</div>
            <div v-if="tMsg">{{ tMsg.content }}</div>
            <div v-if="prMsg">{{ prMsg.content }}</div>
        </div>
        <form @submit.prevent="uplPhoto">
            <input type="file" name="img" id="img">
            <input type="submit" class="spec">
        </form>
        <div class="projects">
            <template v-if="projects">
                <template v-for="pr in projects">
                    <TheProject :pr="pr" />
                </template>
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

                        <img :src="tl.img" :alt="tl.name" width="16">
                        <p>{{ tl.name }}</p>
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
    display: flex
    gap: 4px
.list
    display: flex
    gap: 6px

.chbksList
    display: grid
    grid-template-columns: 1fr 1fr
    gap: 16px
</style>