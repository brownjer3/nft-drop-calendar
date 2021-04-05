const url = 'http://localhost:3000/events'

export const fetchEvents = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_EVENTS'})
        fetch(url)
        .then(response => response.json())
        .then(data => {
          dispatch({ type: 'LOAD_EVENTS', events: data })
        })
    }
}

export const createEvent = (history, event) => {
    return (dispatch) => {
        const configObj = {
            method: "POST", 
            headers: {
                "Content-Type": "application/json", 
                "Accepts": "application/json"
            }, 
            body: JSON.stringify(event)
        }
        fetch(url, configObj)
        .then(res => res.json())
        .then(data => {
            dispatch({ type: 'ADD_EVENT', event: data })
            history.push('/')
        })
    }
}
