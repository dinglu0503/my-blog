import { CHANGE_IPUT_VALUE, ADD_LIST_ITEM, DEIELE_ITEM, INIT_LIST } from './actionTypes'

const defaultState =  {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  if (action.type === CHANGE_IPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_LIST_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = '';
    newState.list.push(action.value);
    return newState;
  }
  if (action.type === DEIELE_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(state.index, 1);
    return newState;
  }
  if (action.type === INIT_LIST) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }
  return state;
}