import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { content, test }= this.props ;

    return (
      <div 
        onClick={this.handleClick}
        >
        {test}-{content}
      </div>
    )
  }
  
  componentDidMount() {
    
  }

  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
}

TodoItem.propTypes = {
  test:PropTypes.string.isRequired,
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number,
  // customProp: function(props, propName, componentName) {
  //   if (!/matchme/.test(props[propName])) {
  //     return new Error (
  //       'Invalid prop `' + propName + '` supplied to' +
  //       ' `' + componentName + '`. Validation failed.'
  //     )
  //   }
  // }
}

TodoItem.defaultProps = {
  test:'hello world'
}



export default TodoItem;