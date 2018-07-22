import { combineReducers } from 'redux';
import * as ActionTypes from './actionTypes.js';

function myLoanReducer(state = {}, action = {}) {
    console.log(action)
    switch (action.type) {
        case ActionTypes.DATA_RECIEVED:
        return {...action.payload.data};
        case ActionTypes.PAY:
        return {...state,weeksLeft:state.weeksLeft-1,amountLeft:state.amountLeft-state.weeklyAmount}
        default: return state;
    }
}

export default combineReducers({
    myLoan: myLoanReducer
})