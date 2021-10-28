import { ADD_CHILD, ChildrenState, InfoChildrenAction } from "../types/infoChildren";



const initalState: ChildrenState = {
    childInfo: []
}

const InfoChildrenReducer = (state = initalState, action: InfoChildrenAction): ChildrenState => {
    switch(action.type) {
        case ADD_CHILD:
            return {
                ...state,
                childInfo: action.payload
                }
        default:
            return state;
    }
}

export default InfoChildrenReducer;