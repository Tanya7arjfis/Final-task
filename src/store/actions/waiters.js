const API_URL = "https://6276afa42f94a1d706060d0d.mockapi.io/";


export const ACTION_WAITERS = 'ACTION_WAITERS';
export function fetchWaiters(){
  return function(dispatch) {
    fetch(API_URL +'waiters')
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: ACTION_WAITERS,
        payload: data
      })
    })
  }
}

export const ACTION_DELETE_WAITERS = 'ACTION_DELETE_WAITERS';
export function deleteWaiter(payload) {
  return function(dispatch) {
    fetch(API_URL +'waiters/' + payload, {
      method: 'DELETE'
    }). then((res) => res.json())
    .then(data => {
      dispatch({
        type: ACTION_DELETE_WAITERS,
        payload: data.id
      })
    })
  }
}

export const ACTION_ADD_WAITER = 'ACTION_ADD_WAITER';
export function addWaiter(payload) {
  return function(dispatch) {
    fetch(API_URL +'waiters', {
      method: 'POST',
      body: JSON.stringify({
        id: payload.id,
        name: payload.name,
        avatar: payload.avatar,
      }),
      headers: {
      'Content-type': 'application/json'
      }
    }).then((res) => res.json())
    .then(data => {
      dispatch({
        type: ACTION_ADD_WAITER,
        payload: data
      })
    })
    
  }
}

export const ACTION_EDIT_WAITER = 'ACTION_EDIT_WAITER';
export function waiterEdit(payload) {
  console.log(payload)
  return function(dispatch) {
    fetch(API_URL +'waiters/'+ payload.id, {
      method: 'PUT',
      body: JSON.stringify({
        id: payload.id,
        name: payload.name,
        avatar: payload.avatar,
      }),
      headers: {
      'Content-type': 'application/json'
      }
    }).then((res) => res.json())
    .then(data => {
      dispatch({
        type: ACTION_EDIT_WAITER,
        payload: data
      })
    })
    
  }
}