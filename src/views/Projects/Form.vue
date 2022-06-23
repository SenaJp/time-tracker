<template>
    <section class="projects">
        <h1>Projetos</h1>
        <form @submit.prevent="save">
            <div class="field">
                <label for="projectName"
                    class="label">
                    Nome do projeto
                </label>
                <input type="text"
                    class="input"
                    v-model="projectName"
                    id="projectName">
            </div>
            <div class="field">
                <button class="button"
                    type="submit">
                    Salvar
                </button>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
export default defineComponent({
    name: 'Form',
    data() {
        return {
            projectName: "",
        }
    },

    methods: {
        save() {
            this.store.commit('ADD_PROJECT', this.projectName)
            this.projectName = '';
            this.$router.push('/projetos')
        }
    },
    setup() {
        const store = useStore()
        return {
            store,
        }
    }
})
</script>

<style scoped>
.projects {
    padding: 1.25rem;
}
</style>