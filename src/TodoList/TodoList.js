import React, { Component } from 'react';
import store from '../store/index.js'
import axios from 'axios'
import TodoListUI  from './TodoListUI'
import { getInitList, getInputChangeAction, submitction, deleteItemAction, initListAction , getTodoLIst} from '../store/actionCreators'

import '../style.css';

class TodoList extends Component{
  constructor(props) {
    super(props);
    this.state = store.getState();
    console.log(store.getState());
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    store.subscribe(this.handleStoreChange);  // react 感知store的的变化
  }

  render() {
    return(
      <TodoListUI
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleDeleteItem={this.handleDeleteItem}
        list={this.state.list}
        />
    )
  }
  componentDidMount (e) {
    // const action = getTodoLIst();
    // store.dispatch(action);
    // console.log(action);
    const action = getInitList();
    console.log(action );
    store.dispatch(action);
    // console.log(action);
    // axios.get('/api/todolist').then((res) => {
    //   const data = res.data;
    //   const action = initListAction(data);
    //   store.dispatch(action);
    // }).catch(() => {

    // })
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }
  handleStoreChange () {
    this.setState(store.getState());
  }
  handleBtnClick () {
    const action = submitction(this.state.inputValue);
    store.dispatch(action);
  }
  handleDeleteItem (index) {
    const action = deleteItemAction(index);
    store.dispatch(action);
  }
}

export default TodoList;