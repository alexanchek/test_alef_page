export const ADD_CHILD = "ADD_CHILD";

export interface ChildInfo {
    name: string;
    age: string;
}

export interface ChildrenState {
    childInfo: ChildInfo[];
}

// Actions 
interface SetChildrenInfoAction {
    type: typeof ADD_CHILD;
    payload: ChildInfo[];
}

export type InfoChildrenAction = 
SetChildrenInfoAction;