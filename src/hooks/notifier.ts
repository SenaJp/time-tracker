import { NotifyType } from "@/interfaces/INotifications"
import { store } from "@/store"
import { NOTIFY } from "@/store/mutations-type";

type Notifier = {
    notify: (type: NotifyType, title: string, text: string) => void;
}

export default () : Notifier => {
    const notify = (type: NotifyType, title: string, text: string) : void  => {
            store.commit(NOTIFY, {
                title,
                text,
                type
            })
    }

    return {
        notify
    }
}