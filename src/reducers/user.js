const initState = {
    data: {
        avatar_url: "",
        create_at: "",
        loginname: "",
        recent_topics: [],
        recent_replies: []
    },
    loading: false

}
function user(state=initState, action) {
    switch(action.type) {
        case "USER_UPDATE":
            return Object.assign({}, {data: state.data}, {loading: true})
        case "USER_UPDATE_SUCCESS":
            return Object.assign({}, {data: action.data.data}, {loading: false})
        case "USER_UPDATE_ERROR":
        return Object.assign({}, {data: initState.data}, {loading: false})
        default: 
            return state
    }
}
export default user