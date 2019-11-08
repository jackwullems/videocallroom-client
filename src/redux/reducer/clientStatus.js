import {
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

const initialStatus = {
    loginName: null,
    postingImage: null,
    country: null,
    languages: null,
    localSRC: false,
    peerSrc: false,
    callStatus: 'waiting for connection...'
}

export default (state=initialStatus, action) => {
    switch (action.type) {
        case LOGIN:
            const {clientName, postImage, country, language} = action.payload
            return {
                ...state, clientName, postImage, country, language
            }
        case ACTIVE_LOCAL_SRC: {
            return {
                ...state, localSRC: true
            }
        }
        case ACTIVE_PEER_SRC: {
            return {
                ...state, peerSRC: true
            }
        }
        case INIT_LOCAL_SRC:
            return {
                ...state, localSRC: false
            }
        case INIT_PEER_SRC:
            return {
                ...state, peerSRC: false
            }
        case INCOMING_CALL:
            const callFrom = action.payload
            return {
                ...state, callStatus: 'incomming call from...'+callFrom
            }
        case CALLING:
            const callTo = action.payload
            return {
                ...state, callStatus: 'calling to...'+callTo
            }
        case ESTABLISH_CALL:
            return {
                ...state, callStatus: 'call established'
            }
        case END_CALL:
            return {
                ...state, callStatus: 'call ended'
            }
        case REJECT_CALL:
            return {
                ...state, callStatus: 'call rejected'
            }
        default:
            return state
    }
}