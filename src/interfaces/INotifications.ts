export enum NotifyType {
    SUCCESS,
    FAIL,
    ATTENTION,
}

export interface INotification {
    title: string;
    text: string;
    type: NotifyType;
    id: number;
}