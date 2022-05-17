const API_URL = "https://6276afa42f94a1d706060d0d.mockapi.io/";

export const ACTION_MENU = 'ACTION_MENU';
export function fetchMenu(){
  return function(dispatch) {
    fetch(API_URL +'menu')
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: ACTION_MENU,
        payload: data
      })
    })
  }
}

export const ACTION_ADD_MENU = 'ACTION_ADD_MENU';
export function addMenu(payload) {
  return function(dispatch) {
    fetch(API_URL +'menu', {
      method: 'POST',
      body: JSON.stringify({
        id: payload.id,
        dish: payload.dish,
        price: payload.price,
      }),
      headers: {
      'Content-type': 'application/json'
      }
    }).then((res) => res.json())
    .then(data => {
      dispatch({
        type: ACTION_ADD_MENU,
        payload: data
      })
    })
    
  }
}

export const ACTION_DELETE_MENU = 'ACTION_DELETE_MENU';
export function deleteMenu(payload) {
  return function(dispatch) {
    fetch(API_URL +'menu/' + payload, {
      method: 'DELETE'
    }). then((res) => res.json())
    .then(data => {
      dispatch({
        type: ACTION_DELETE_MENU,
        payload: data.id
      })
    })
  }
}