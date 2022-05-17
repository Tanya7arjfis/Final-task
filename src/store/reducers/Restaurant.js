import {
  ACTION_WAITERS,
  ACTION_DELETE_WAITERS,
  ACTION_ADD_WAITER,
  ACTION_EDIT_WAITER
} from "../actions/waiters";

import {
  ACTION_TABLES,
  ACTION_ADD_TABLES,
  ACTION_DELETE_TABLES,
  ACTION_EDIT_TABLES
} from '../actions/tables';

import {
  ACTION_MENU,
  ACTION_ADD_MENU,
  ACTION_DELETE_MENU
} from '../actions/menu';

const initialState = {
  tables: [],
  waiters: [],
  menu: []
}

export default function rootReducer(state = initialState, {type, payload}) {
  console.log(state)
  switch (type) {
    case ACTION_WAITERS: 
      return { ...state, waiters: payload}
    case ACTION_DELETE_WAITERS:
      return {
        ...state,
        waiters: state.waiters.filter((item) => item.id !==payload)
      }
    case ACTION_ADD_WAITER: 
      return {
        ...state,
        waiters: [
          ...state.waiters,
          payload
        ]
      }
    case ACTION_EDIT_WAITER:
      return {
        ...state,
        waiters: state.waiters.map((item) => {
          console.log(item)
          return item.id === payload.id ? {
            name: payload.name,
            avatar: payload.avatar,
            id: payload.id
          } : item
        })
      }



    case ACTION_TABLES: 
      return { ...state, tables: payload}
    case ACTION_ADD_TABLES:
      return {
        ...state,
        tables: [
          ...state.tables,
          payload
        ]
      }
      case ACTION_DELETE_TABLES: {
        return {
          ...state,
          tables: state.tables.filter((item) => item.id !==payload)
        }
      }
      case ACTION_EDIT_TABLES:
        return {
          ...state,
          tables: state.tables.map((item) => {
            console.log(item)
            return item.id === payload.id ? {
              table: payload.table,
              id: payload.id
            } : item
          })
        }


    case ACTION_MENU:
      return { ...state, menu: payload}
    case ACTION_ADD_MENU:
      return {
        ...state,
        menu: [
          ...state.menu,
          payload
        ]
      }
    case ACTION_DELETE_MENU: 
      return {
        ...state,
        menu: state.menu.filter((item) => item.id !==payload)
      }
    default:
      return state
  
  }
}