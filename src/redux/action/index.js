import {
    ADD_USER_TO_ONLINE,
    LOGIN,
    SET_ONLINE_USERS,
    ACTIVE_LOCAL_SRC,
    ACTIVE_PEER_SRC,
    INIT_LOCAL_SRC,
    INIT_PEER_SRC,
    INCOMING_CALL,
    CALLING,
    ESTABLISH_CALL,
    END_CALL,
    REJECT_CALL
} from '../../constants'

export const addUserToOnline = (onlineClient)=>{
    return {
        type: ADD_USER_TO_ONLINE,
        payload: onlineClient
    }
}

export const setOnlineUsers = (onlineUsers)=>{
    return {
        type: SET_ONLINE_USERS,
        payload: onlineUsers
    }
}

export const login = (clientName, postImage, country, language)=>{
    return {
        type: LOGIN,
        payload: {
            clientName, postImage, country, language
        }
    }
}

export const activeLocalSrc = ()=>{
    return {
        type: ACTIVE_LOCAL_SRC
    }
}

export const activePeerSrc = ()=>{
    return {
        type: ACTIVE_PEER_SRC
    }
}

export const initLocalSrc = ()=>{
    return {
        type: INIT_LOCAL_SRC
    }
}

export const initPeerSrc = ()=>{
    return {
        type: INIT_PEER_SRC
    }
}

export const incomingCall = (callFrom)=>{
    return {
        type: INCOMING_CALL,
        payload: callFrom
    }
}

export const calling = (callTo)=>{
    return {
        type: CALLING,
        payload: callTo
    }
}

export const establishedCall = ()=>{
    return {
        type: ESTABLISH_CALL
    }
}

export const endCall = ()=>{
    return {
        type: END_CALL
    }
}

export const rejectCall = ()=>{
    return {
        type: REJECT_CALL
    }
}