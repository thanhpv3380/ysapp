var initialState = '';

var myReducer = (state = initialState, action) =>{
    if (action.type === 'SOCKET'){
        console.log(action.data);
        return action.data;
    }
    return state;
}
export default myReducer;
