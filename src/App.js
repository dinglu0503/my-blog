import React ,{Component, Fragment }from 'react';
import './app.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      // show: true
      list:[]
    }
    this.handleToggole = this.handleToggole.bind(this);
    this.handleAddItem =this.handleAddItem.bind(this);
  }
  render() {
    return (
      <Fragment>
        {/* <div className={this.state.show ? 'show' : 'hide'}>
          Hello World
        </div> */}
        {/* <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames='fade'
          unmountOnExit
          onEntered = {(el) => {el.style.color='blue'}}
          appear={true}
        > 
          <div>Hello</div>
        </CSSTransition>
        <button onClick={this.handleToggole}>
          toggle
        </button> */}
        <TransitionGroup

        >
          {
            this.state.list.map((item, index) => {
              return(
                <CSSTransition
                  timeout={1000}
                  classNames='fade'
                  unmountOnExit
                  onEntered = {(el) => {el.style.color='blue'}}
                  appear={true}
                  key={index}
                > 
                  <div>{item}</div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        
        <button onClick={this.handleAddItem}>
          toggle
        </button>
      </Fragment>
    )
  }

  handleToggole() {
    this.setState({
      show: this.state.show ? false : true
    })
  }

  handleAddItem() {
    this.setState((preState) => {
      return {
        list: [...preState.list, 'item']
      }
    })
  }
}

export default App;
