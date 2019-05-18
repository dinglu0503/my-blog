import React, { Component } from 'react';
import store from '../store/index.js'
import { connect } from 'react-redux'


import '../style.css';

class TodoList extends Component{
  constructor(props) {
    super(props);
    this.state = store.getState();
    console.log(store.getState());

  }

  render() {
    return(
      <div>
        <div>
          <input value={this.props.inputValue}></input>
          <button>提交</button>
        </div>
        <ul>Dell</ul>
      </div>
    )
  }
}

const mapStateToProps  = (state) => {
  return {
    inputValue: state.inputValue
  }
}
export default connect(mapStateToProps, null)(TodoList);