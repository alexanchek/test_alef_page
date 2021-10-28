export const SET_PERSONAL_INFO = "SET_PERSONAL_INFO";

export interface UserInfo {
    name: string;
    age: string;
}

export interface InfoState {
    userInfo: UserInfo | null;
}

// Actions
interface SetPersonalInfoAction {
    type: typeof SET_PERSONAL_INFO;
    payload: UserInfo;
}

export type InfoPersonalAction = 
SetPersonalInfoAction;