export default function eventReducer(state = 
    {
    events: [],
    loading: false
    }, action) {
    switch(action.type){
        case 'LOADING_EVENTS':
            return {
              ...state,
              events: [...state.events],
              loading: true
            }
        case 'LOAD_EVENTS':
            return {
                ...state, 
                events: action.events, 
                loading: false
            }
        case 'ADD_EVENT':
            
            return {
                ...state, 
                events: state.events.concat(action.event) 
            }
        case "DELETE_EVENT":
            return state
        case "EDIT_EVENT":
            return state
        default:
            return state
    }
}