var initialState = '';

var myReducer = (state = initialState, action) =>{
    if (action.type === 'STATUS_LOBBY'){
        return action.data;
    }
    return state;
}
export default myReducer;
