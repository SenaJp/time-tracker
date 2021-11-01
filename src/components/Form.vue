<template>
    <div class="box">
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
import Timer from './Timer.vue'
export default defineComponent({
    name:"Form",
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
            console.log('Tempo da tarefa', timeElapsed)
            console.log('Descrição da tarefa', this.description)
            this.description = ''
        }
    }
});
</script>
