import {ADD_USER_TO_ONLINE, SET_ONLINE_USERS} from '../../constants'

export default (state=[], action) => {
    switch (action.type) {
        case ADD_USER_TO_ONLINE:
            const {clientId, clientName, postImage, country, language} = action.payload
            const onlineClients = state
            onlineClients.push({
                clientId, clientName, postImage, country, language
            })
            return onlineClients
        case SET_ONLINE_USERS:
            return action.payload
        default:
            return state
    }
}