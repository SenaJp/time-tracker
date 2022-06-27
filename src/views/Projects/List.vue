<template>
    <section>
        <router-link to="/projects/new"
            class="button">
            <span class="icon is-small">
                <i class="fas fa-plus"></i>
            </span>
            <span>Novo projeto</span>
        </router-link>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>
                        Ações
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="project in projects"
                    :key="project.id">
                    <td>{{ project.id }}</td>
                    <td>{{ project.name }}</td>
                    <td>
                        <router-link :to="`/projects/${project.id}`"
                            class="button">
                            <span class="icon is-small">
                                <i class="fas fa-pencil-alt"></i>
                            </span>
                        </router-link>
                        <button class="button ml-2 is-danger" @click="destroy(project.id)">
                            <span class="icon is-small">
                                <i class="fas fa-trash"></i>
                            </span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";
export default defineComponent({
    name: 'List',

    methods: {
        destroy(id: string) {
            this.store.commit('DELETE_PROJECT', id)
        }
    },

    setup() {
        const store = useStore()
        return {
            projects: computed(() => store.state.projects),
            store
        }
    }
})
</script>

<style scoped>
.project {
    padding: 1.25rem;
}
</style>