import * as ActionTypes  from './ActionTypes';


export const Promos = (state = {  isLoading: true,
                                    errMess: null, 
                                    promos: []}, action) => {
    switch (action.type){
        case ActionTypes.ADD_PROMO:
           return {...state, isLoading: false, errMess: null, promos: action.payload}
        
        case ActionTypes.PROMO_LOADING:
            return {...state, isLoading: true, errMess: null, promos: []}

        case ActionTypes.PROMO_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
} 