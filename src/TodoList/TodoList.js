import React, {Component, Fragment} from 'react';
import TodoItem from '../TodoItem/TodoItem'
import Test from '../Test/Test'
import axios from 'axios';

import '../style.css';

class TodoList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
      
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  componentDidMount() {
    axios.get('/api/todolist')
         .then((res) => {
           console.log(res.data);
           this.setState(() => ({
            list: [...res.data]
           }))
          })
         .catch(() => {
           console.log('error');
         })
  }

  render() {
    return(
      <Fragment>
        { /* 我是注释  */ }
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input 
            id="insertArea" 
            className='input'
            value={this.state.inputValue} 
            onChange={this.handleInputChange} 
            ref={(input) => {this.input = input}}
          />
          <button onClick={this.handleButtonClick}>提交</button>
        </div>
        <ul ref={(ul) => {this.ul=ul}}>
          {this.getTodoItem()}
        </ul>
        <Test content={this.state.inputValue} />
      </Fragment>
    )
  }

  getTodoItem () {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem 
          key={index}
          content={item} 
          index={index}
          deleteItem={this.handleItemDelete}
        />
      )
    })
  }
  
  handleInputChange = (e) => {
    const value = this.input.value;
    this.setState(() => ({
      inputValue: value
    }));
  }

  handleButtonClick = () => {
    // this.setState(() => {
    //   return {
    //     list:[...this.state.list, this.state.inputValue],
    //     inputValue:''
    //   }
    // })

    this.setState((prevState) => {
      return {
        list:[...prevState.list, prevState.inputValue],
        inputValue:''
      }
    }, () => {
      console.log(this.ul.querySelectorAll('div').length);
    });
  }

  handleItemDelete = (index) => {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {
        list
      }
    })
  }
}

export default TodoList;