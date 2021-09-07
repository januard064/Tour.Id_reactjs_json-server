import * as ActionTypes  from './ActionTypes';


export const PesanCustoms = (state = { isLoading: true,
                                errMess: null,
                                pesancustoms: []}, action) => {
    switch (action.type){
        case ActionTypes.ADD_PESANCUSTOM:
            return{...state, isLoading: false, errMess: null, pesancustoms: action.payload}
        
        case ActionTypes.PESANCUSTOM_LOADING:
            return{...state, isLoading: true, errMess: null, pesancustoms: []}

        case ActionTypes.PESANCUSTOM_FAILED:
            return{...state, isLoading: false, errMess: action.payload}  
            
        default:
            return state;
    }
} 