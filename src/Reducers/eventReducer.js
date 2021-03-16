function eventReducer(state = 
    {
    events:[],
    currentDay:""
    }, action){

    switch(action.type){
        case "ADD_EVENT":
            return {...state, events: [...events, action.event]}
        case "DELETE_EVENT":
            return state
        default:
            return state
    }
}