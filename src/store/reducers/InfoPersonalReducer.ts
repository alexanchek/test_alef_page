import { InfoPersonalAction, InfoState, SET_PERSONAL_INFO } from "../types/InfoPersonal";

const initialState: InfoState = {
    userInfo: null
}

const InfoPersonalReducer = (state = initialState, action: InfoPersonalAction): InfoState => {
    switch(action.type) {
        case SET_PERSONAL_INFO:
            return {
                ...state,
                userInfo: action.payload
            }
        default:
            return state;
    }
}

export default InfoPersonalReducer;