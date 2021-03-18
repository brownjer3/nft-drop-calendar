export const fetchEvents = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_EVENTS'})
        fetch('http://localhost:3000/events')
        .then(response => response.json())
        .then(data => {
          dispatch({ type: 'LOAD_EVENTS', events: data })
        })
      }
}

// export const fetchDates = () => {
//     return (dispatch) => {
//         dispatch({ type: ''})
//     }
// }