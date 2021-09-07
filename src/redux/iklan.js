import * as ActionTypes  from './ActionTypes';


export const Iklans = (state = { isLoading: true,
                                errMess: null,
                                iklans: []}, action) => {
    switch (action.type){
        case ActionTypes.ADD_IKLAN:
            return{...state, isLoading: false, errMess: null, iklans: action.payload}
        
        case ActionTypes.IKLAN_LOADING:
            return{...state, isLoading: true, errMess: null, iklans: []}

        case ActionTypes.IKLAN_FAILED:
            return{...state, isLoading: false, errMess: action.payload}  
            
        default:
            return state;
    }
} 