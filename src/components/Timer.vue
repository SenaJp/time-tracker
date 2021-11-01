<template>
    <div
            class="is-flex is-align-items-center is-justify-content-space-between"
        >
        <stopWatch :timeInSeconds="timeInSeconds"/>
        <button class="button" @click="start" :disabled="stopWatchWorking">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>Play</span>
        </button>
        <button class="button" @click="finish" :disabled="!stopWatchWorking">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>Stop</span>
        </button>
        </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import stopWatch from './StopWatch.vue'
export default defineComponent({
    name: 'Timer',
    emits: ['timerFinish'],
    components: {
        stopWatch
    },
    data() {
        return {
            timeInSeconds: 0,
            stopWatch: 0,
            stopWatchWorking: false
        }
    },
    methods: {
        start () {
            this.stopWatchWorking = true
            this.stopWatch = setInterval(() => {
                this.timeInSeconds += 1
            }, 1000)
        },
        finish () {
            this.stopWatchWorking = false
            clearInterval(this.stopWatch)
            this.$emit('timerFinish', this.timeInSeconds)
            this.timeInSeconds = 0
        }
    }
});
</script>