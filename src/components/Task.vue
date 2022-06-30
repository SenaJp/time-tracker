<template>
    <Box>
        <div class="columns">
            <div class="column is-4">
                {{task.description || 'Tarefa sem descrição'}}
            </div>
            <div class="column is-3">
                {{ task.project?.name || 'N/D' }}
            </div>
            <div class="column">
                <StopWatch :timeInSeconds="task.durationInSeconds"/>
            </div>
        </div>
    </Box>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import StopWatch from "./StopWatch.vue"
import ITask from "../interfaces/ITask"
import Box from "./Box.vue"

export default defineComponent({
    name: 'Task',
    components: {
        StopWatch,
        Box
    },
    props: {
        task: {
            type: Object as PropType<ITask>,
            required: true
        }
    }
});
</script>

<style scoped>
.box {
    background: #FAF0CA
}
</style>