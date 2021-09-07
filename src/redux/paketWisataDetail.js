import * as ActionTypes from './ActionTypes';


export const Detailpakets = (state = {errMess: null, detailpakets: []}, action) => {
    switch (action.type){

        case ActionTypes.ADD_PAKETDETAIL:
            return {...state, errMess: null, detailpakets: action.payload};
      
          case ActionTypes.PAKETDETAIL_FAILED:
            return {...state, errMess: action.payload};
      

        default:
            return state;
    }
} 