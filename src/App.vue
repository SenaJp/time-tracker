<template>
  <main class="columns is-gapless is-multiline" :class="{'dark-mode': darkModeActive}">
    <div class="column is-one-quarter">
      <SideBar @changedTheme="changeTheme"/>
    </div>
      <div class="column is-three-quarter content">
        <Form @toSaveTask="saveTask"/>
      <div class="list">
        <Task v-for="(task, index) in tasks" :key="index" :task="task"/>
      <Box v-if="listEmpty">
      Você não está muito produtivo hoje :(
      </Box>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue'
import Form from './components/Form.vue'
import Task from './components/Task.vue'
import ITask from './interfaces/ITask'
import Box from './components/Box.vue'

export default defineComponent({
  name: 'App',
  components: {
    SideBar,
    Form,
    Task,
    Box
  },
  data() {
    return {
      tasks: [] as ITask[],
      darkModeActive: false
    }
  },
  computed: {
    listEmpty() :boolean {
      return this.tasks.length === 0
    }
  },
  methods: {
    saveTask (task: ITask) {
      this.tasks.push(task)
    },
    changeTheme(darkModeActive: boolean) {
      this.darkModeActive = darkModeActive
    }
  },
});
</script>

<style>
.list {
  padding: 1.25rem;
}
main {
  --bg-primary: #fff;
  --text-primary: #000;
}
main.dark-mode {
  --bg-primary: #2b2d42;
  --text-primary: #fff;
}
.content {
  background-color: var(--bg-primary)
}
</style>
