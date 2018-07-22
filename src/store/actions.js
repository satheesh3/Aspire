import * as ActionTypes from './actionTypes.js';

export default {
    dataRecieve: data => dispatch => {dispatch({type:ActionTypes.DATA_RECIEVED, payload:{data}})},
    pay: () => dispatch => {dispatch({type:ActionTypes.PAY})}
}