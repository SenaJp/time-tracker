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
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="project in projects" :key="project.id">
                    <td>{{ project.id }}</td>
                    <td>{{ project.name }}</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IProject from '../interfaces/IProject';
export default defineComponent({
    name: 'Projects',
    data() {
        return {
            projectName: "",
            projects: [] as IProject[]
        }
    },

    methods: {
        save() {
            const project: IProject = {
                name: this.projectName,
                id: new Date().toISOString()
            }
            this.projects.push(project)
            this.projectName = ''
        }
    },
})
</script>

<style scoped>
.projects {
    padding: 1.25rem;
}
</style>