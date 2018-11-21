const initState = {
    data: {
        author: {
            loginname: "",
            avatar_url: ""
        },
        replies: [],
        create_at: "",
        good: false,
        tab: "ask",
        content: "",
        title: "",
        top: ""
    },
    loading: true
}

function details(state=initState, action) {
    switch(action.type) {
        case 'DETAILS_INIT':
            return {
                data: initState.data,
                loading: false
            }
        case 'DETAILS_UPDATE':
            return {
                data: state.data,
                loading: true
            }
        case 'DETAILS_UPDATE_SUCCESS':
            return {
                data: action.data.data,
                loading: false
            }
        case 'DETAILS_UPDATE_ERROR':
        return {
            data: {
                author: {
                    loginname: "",
                    avatar_url: ""
                },
                replies: [],
                create_at: "",
                good: false,
                tab: "ask",
                content: "",
                title: "",
                top: ""
            },
            loading: true
        }
        default: 
            return state
    }
}
export default details