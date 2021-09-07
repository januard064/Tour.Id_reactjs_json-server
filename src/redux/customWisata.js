import * as ActionTypes  from './ActionTypes';

export const Customs = (state = { isLoading: true,
                                errMess: null, 
                                customs: [] }, action) => {
    switch (action.type){
        case ActionTypes.ADD_CUSTOM:
            return{...state, isLoading: false, errMess: null, customs: action.payload}
        
        case ActionTypes.CUSTOM_LOADING:
            return{...state, isLoading: true, errMess: null, customs: []}

        case ActionTypes.CUSTOM_FAILED:
            return{...state, isLoading: false, errMess: action.payload}        

        default:
            return state;
    }
} 