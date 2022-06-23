import IProject from "./IProject"

export default interface ITask {
    durationInSeconds: Number,
    description: string
    project: IProject
}