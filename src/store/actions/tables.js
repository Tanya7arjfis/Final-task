const API_URL = "https://6276afa42f94a1d706060d0d.mockapi.io/";

export const ACTION_TABLES = 'ACTION_TABLES';
export function fetchTables(){
  return function(dispatch) {
    fetch(API_URL +'table')
    .then((res) => res.json())
    .then((data) => {
     console.log(data)
      dispatch({
        type: ACTION_TABLES,
        payload: data
      })
    })
  }
  
  
}

export const ACTION_ADD_TABLES = 'ACTION_ADD_TABLES';
export function addTable(payload) {
  return function(dispatch) {
    fetch(API_URL +'table', {
      method: 'POST',
      body: JSON.stringify({
        id: payload.id,
        table: payload.table,
      }),
      headers: {
      'Content-type': 'application/json'
      }
    }).then((res) => res.json())
    .then(data => {
      dispatch({
        type: ACTION_ADD_TABLES,
        payload: data
      })
    })
    
  }
}

export const ACTION_DELETE_TABLES = 'ACTION_DELETE_TABLES';
export function deleteTable(payload) {
  return function(dispatch) {
    fetch(API_URL +'table/' + payload, {
      method: 'DELETE'
    }). then((res) => res.json())
    .then(data => {
      dispatch({
        type: ACTION_DELETE_TABLES,
        payload: data.id
      })
    })
  }
}

export const ACTION_EDIT_TABLES = 'ACTION_EDIT_TABLES';
export function tableEdit(payload) {
  return function(dispatch) {
    fetch(API_URL +'table/'+ payload.id, {
      method: 'PUT',
      body: JSON.stringify({
        id: payload.id,
        table: payload.table,
      }),
      headers: {
      'Content-type': 'application/json'
      }
    }).then((res) => res.json())
    .then(data => {
      dispatch({
        type: ACTION_EDIT_TABLES,
        payload: data
      })
    })
    
  }
}