import { NotifyType } from "@/interfaces/INotifications"
import { NOTIFY } from "@/store/mutations-type"
import { store } from "@/store"

export const notifyMixin = {
    methods: {
        notify(type: NotifyType, title: string, text: string): void {
            store.commit(NOTIFY, {
                title,
                text,
                type
            })
        }
    }
}