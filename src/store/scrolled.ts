import { reactive } from 'vue';


const scrolled = reactive({
    scrolled: -1, // it's a procent, -1 = nothing
    changeScrolled(newScrolled: number) {
        this.scrolled = newScrolled;
    }
});

export default scrolled;