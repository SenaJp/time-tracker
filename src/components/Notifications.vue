<template>
    <div class="notifications">
        <article
        class="message"
        :class="context[notification.type]"
        v-for="notification in notifications"
        :key="notification.id">
            <div class="message-header">
                {{ notification.title }}
            </div>
            <div class="message-body">
                {{ notification.text }}
            </div>
        </article>
    </div>
</template>

<script lang="ts">
import { computed ,defineComponent } from 'vue'
import { useStore } from '@/store'
import { NotifyType } from '@/interfaces/INotifications'

export default defineComponent({
    name: 'Notifications',
    data() {
        return {
            context: {
                [NotifyType.SUCCESS]: 'is-success',
                [NotifyType.FAIL]: 'is-danger',
                [NotifyType.ATTENTION]: 'is-warning',
            }
        }
    },
    setup() {
        const store = useStore()
        return {
            notifications: computed(() => store.state.notifications)
        }
    }
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