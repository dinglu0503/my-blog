import { CHANGE_IPUT_VALUE, ADD_LIST_ITEM, DEIELE_ITEM, INIT_LIST } from './actionTypes'
import axios from 'axios'
import store from '../store/index.js'


export const getInputChangeAction = (value) => ({
  type: CHANGE_IPUT_VALUE,
  value
})

export const submitction = (value) => ({
  type: ADD_LIST_ITEM,
  value: value
})

export const deleteItemAction = (index) => ({
  type: DEIELE_ITEM,
  index: index
})

export const initListAction = (data) => ({
  type: INIT_LIST,
  data
})

export const getTodoLIst = () => {
  return (dispatch) => {
    axios.get('/api/todolist').then((res) => {
      const data = res.data;
      const action = initListAction(data);
      dispatch(action);
    }).catch(() => {

    })
  }
}