import * as types from '../constants/ActionTypes';
export const socket = (data) => {
    return {
        type: types.SOCKET,
        data
    }
}
export const status_lobby = (data) =>{
    return {
        type: types.STATUS_LOBBY,
        data
    }
}
export const list_chat = () =>{
    return {
        type: types.LIST_CHAT
    }
}
export const selected_room = (data) =>{
    return {
        type: types.SELECTED_ROOM,
        data
    }
}