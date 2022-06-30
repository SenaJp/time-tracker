import { INotification, NotifyType } from "@/interfaces/INotifications";
import IProject from "@/interfaces/IProject";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { ADD_PROJECT, EDIT_PROJECT, DELETE_PROJECT } from "./mutations-type";

interface State {
    projects: IProject[],
    notifications: INotification[],
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    projects: [],
    notifications: [
      {
        id: 1,
        text: "Success notification!",
        title: "Success",
        type: NotifyType.SUCCESS,
      },
      {
        id: 2,
        text: "Fail notification!",
        title: "Fail",
        type: NotifyType.FAIL,
      },
      {
        id: 3,
        text: "Attention notification!",
        title: "Attention",
        type: NotifyType.ATTENTION,
      },
    ],
  },
  mutations: {
    [ADD_PROJECT](state, projectName: string) {
      const project = {
        id: new Date().toISOString(),
        name: projectName,
      } as IProject;
      state.projects.push(project);
    },
    [EDIT_PROJECT](state, project: IProject) {
      const index = state.projects.findIndex((proj) => proj.id == project.id);
      state.projects[index] = project;
    },
    [DELETE_PROJECT](state, id: string) {
      state.projects = state.projects.filter((proj) => proj.id != id);
    },
  },
});

export function useStore(): Store<State> {
    return vuexUseStore(key)
}