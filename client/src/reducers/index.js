import socket from './socket';
import status_lobby from './status_lobby';
import selected_room from './selected_room';
import { combineReducers } from 'redux';

const myReducer = combineReducers({
    socket,
    status_lobby,
    selected_room
});
export default myReducer;