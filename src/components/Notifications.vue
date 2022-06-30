<template>
    <div class="notifications">
        <article class="message is-success">
            <div class="message-header">
                Atenção!
            </div>
            <div class="message-body">
                Texto test
            </div>
        </article>
        <article class="message is-warning">
            <div class="message-header">
                Atenção!
            </div>
            <div class="message-body">
                Texto test
            </div>
        </article>
        <article class="message is-danger">
            <div class="message-header">
                Atenção!
            </div>
            <div class="message-body">
                Texto test
            </div>
        </article>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Notifications',
})
</script>

<style scoped>
.notifications {
    position:absolute;
    right: 0;
    width: 300px;
    padding: 8px;
    z-index: 1;
}
</style>