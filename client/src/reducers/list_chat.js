var initialState = '';

var myReducer = (state = initialState, action) => {
    if (action.type === 'LIST_CHAT') {
        //console.log(action.data);
        return state;
    }
    return state;
}
export default myReducer;
