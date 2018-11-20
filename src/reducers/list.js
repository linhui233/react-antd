function list(state={}, action) {
    
    switch(action.type) {
        case 'LIST_UPDATE':
            return action.data
        default: 
            return state
    }
}
export default list