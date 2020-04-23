var initialState = '';

var myReducer = (state = initialState, action) =>{
    if (action.type === 'SELECTED_ROOM'){
        //console.log(action.data);
        return action.data;
    }
    return state;
}
export default myReducer;
