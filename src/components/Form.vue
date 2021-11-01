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
            />
            </div>
    <div class="column">
        <div
            class="is-flex is-align-itemns-center is-fustify-content-space-between"
        >
        <section>
            <strong>
                {{ elapsedTime }}
            </strong>
        </section>
        <button class="button" @click="start">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>Play</span>
        </button>
        <button class="button" @click="finish">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>Stop</span>
        </button>
        </div>
        </div>
        </div>
        </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
    name: 'Form',
    data() {
        return {
            timeInSeconds: 0,
            stopwatch: 0
        }
    },
    computed: {
        elapsedTime() : string {
            return new Date(this.timeInSeconds * 1000).toISOString().substr(11,8)
        }
    },
    methods: {
        start () {
            this.stopwatch = setInterval(() => {
                this.timeInSeconds += 1
            }, 1000)
        },
        finish () {
            clearInterval(this.stopwatch)
        }
    }
});
</script>