<template>
    <section>
        <form @submit.prevent="save">
            <div class="field">
                <label for="projectName"
                    class="label">
                    Nome do projeto
                </label>
                <input type="text"
                    class="input"
                    v-model="projectName"
                    id="projectName">
            </div>
            <div class="field">
                <button class="button"
                    type="submit">
                    Salvar
                </button>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";

import { EDIT_PROJECT, ADD_PROJECT} from "@/store/mutations-type"
import { NotifyType } from "@/interfaces/INotifications";
import useNotifier from "@/hooks/notifier"


export default defineComponent({
    name: 'Form',
    props: {
        id: {
            type: String
        }
    },

    mounted() {
        if (this.id) {
            const project = this.store.state.projects.find(proj => proj.id == this.id)
            this.projectName = project?.name || ''
        }
    },
    data() {
        return {
            projectName: "",
        }
    },

    methods: {
        save() {
            if (this.id) {
                this.store.commit(EDIT_PROJECT, {
                    id: this.id,
                    name: this.projectName,
                })
            } else {
                this.store.commit(ADD_PROJECT, this.projectName)
            }
            this.projectName = "";
            this.notify(NotifyType.SUCCESS, 'Excelente!', 'O projeto foi cadastrado com sucesso!')
            this.$router.push('/projects')
        },
    },
    setup() {
        const store = useStore()
        const { notify } = useNotifier()
        return {
            store,
            notify
        }
    }
})
</script>