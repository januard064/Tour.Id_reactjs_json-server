import * as ActionTypes  from './ActionTypes';


export const PesanPakets = (state = { isLoading: true,
                                errMess: null,
                                pesanpakets: []}, action) => {
    switch (action.type){
        case ActionTypes.ADD_PESANPAKET:
            return{...state, isLoading: false, errMess: null, pesanpakets: action.payload}
        
        case ActionTypes.PESANPAKET_LOADING:
            return{...state, isLoading: true, errMess: null, pesanpakets: []}

        case ActionTypes.PESANPAKET_FAILED:
            return{...state, isLoading: false, errMess: action.payload}  
            
        default:
            return state;
    }
} 