<template>
    <div class="box form">
        <div class="columns">
            <div
                class="column is-8"
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
    <div class="column">
        <Timer @timerFinish="finishTask"/>
        </div>
        </div>
        </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Timer from './Timer.vue';
export default defineComponent({
    name:"Form",
    emits: ['toSaveTask'],
    components: {
        Timer
    },
    data() {
        return {
            description: ''
        }
    },
    methods: {
        finishTask(timeElapsed: number) : void {
            this.$emit('toSaveTask', {
                durationInSeconds: timeElapsed,
                description: this.description
            })
            this.description = ''
        }
    }
});
</script>

<style>
.form {
    color: var(--text-primary);
    background-color: var(--bg-primary);
}
</style>
