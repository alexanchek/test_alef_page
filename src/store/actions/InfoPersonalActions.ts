import { RootState } from "../index";
import { InfoPersonalAction, SET_PERSONAL_INFO, UserInfo } from "../types/InfoPersonal";
import {ThunkAction} from 'redux-thunk';
import { ADD_CHILD, ChildInfo, InfoChildrenAction } from "../types/infoChildren";

export const setinfo = (userInfo: UserInfo): ThunkAction<void, RootState, null, InfoPersonalAction> => {
    return async dispatch => {
        dispatch({
            type: SET_PERSONAL_INFO,
            payload: userInfo
        })
    }
}

export const setchild = (childInfo: ChildInfo[]): ThunkAction<void, RootState, null, InfoChildrenAction> => {
    return async dispatch => {
        dispatch({
            type: ADD_CHILD,
            payload: childInfo
        })
    }
}