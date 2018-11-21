function list(state={}, action) {
    
    switch(action.type) {
        case 'LIST_BEFORE_UPDATE':
            return Object.assign({}, state, {loading: true})
        case 'LIST_UPDATE':
            return {
                loading: false,
                data: action.data.data
            }
        default: 
            return state
    }
}
export default list