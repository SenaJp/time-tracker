<template>
    <div class="box form">
        <div class="columns">
            <div
                class="column is-5"
                role="form"
                aria-label="Formulário para criação de nova tarefa"
            >
            <input
                type="text"
                class="input"
                placeholder="Qual tarefa você deseja iniciar?"
                v-model="description"
            />
            </div>
            <div class="column is-3">
                <div class="selected">
                    <select v-model="projectId">
                    <option value=""> Selecione o projeto</option>
                    <option :value="project.id"
                    v-for="project in projects"
                    :key="project.id"
                    >
                    {{ project.name }}
                    </option>
                    </select>
                </div>
            </div>
    <div class="column">
        <Timer @timerFinish="finishTask"/>
        </div>
        </div>
        </div>
</template>

<script lang="ts">
import { key } from "@/store";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import Timer from './Timer.vue';
export default defineComponent({
    name:"Form",
    emits: ['toSaveTask'],
    components: {
        Timer
    },
    data() {
        return {
            description: '',
            projectId: ''
        }
    },
    methods: {
        finishTask(timeElapsed: number) : void {
            this.$emit('toSaveTask', {
                durationInSeconds: timeElapsed,
                description: this.description,
                project: this.projects.find(proj => proj.id == this.projectId)
            })
            this.description = ''
        }
    },
    setup() {
        const store = useStore(key)
        return {
            projects: computed(() => store.state.projects)
        }
    },
});
</script>

<style>
.form {
    color: var(--text-primary);
    background-color: var(--bg-primary);
}
</style>
