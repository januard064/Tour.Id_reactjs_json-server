import * as ActionTypes from './ActionTypes';

export const Pakets = (state = { isLoading: true,
                                 errMess: null, 
                                 pakets: [] }, action) => {
    switch (action.type){
        case ActionTypes.ADD_PAKET:
           return {...state, isLoading: false, errMess: null, pakets: action.payload}
        
        case ActionTypes.PAKET_LOADING:
            return {...state, isLoading: true, errMess: null, pakets: []}

        case ActionTypes.PAKET_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
} 