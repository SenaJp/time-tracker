<template>
  <main class="columns is-gapless is-multiline" :class="{'dark-mode': darkModeActive}">
    <div class="column is-one-quarter">
      <SideBar @changedTheme="changeTheme"/>
    </div>
      <div class="column is-three-quarter content">
        <Notifications/>
        <router-view></router-view>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue'
import Notifications from './components/Notifications.vue'

export default defineComponent({
  name: 'App',
  components: {
    SideBar,
    Notifications,
  },
  data() {
    return {
      darkModeActive: false
    }
  },
  methods: {
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
