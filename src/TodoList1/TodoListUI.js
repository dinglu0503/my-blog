import React, { Fragment} from 'react';
import {Input, Button, List} from 'antd';
import 'antd/dist/antd.css';


const TodoListUI = (props) => {
  return (
    <Fragment>
        <Input value={props.inputValue}
               placeholder="nihao"
               style={{width:'300px'}}
               onChange={props.handleInputChange}
              >
        </Input>
        <Button type="primary" onClick={props.handleBtnClick}>Primary</Button>
        <List
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (
            <List.Item onClick={() => {
              props.handleDeleteItem(index);
            }}>
              {item}
            </List.Item>
          )}
        />
      </Fragment>
  )
}
// class TodoListUI extends Component{
//   render() {
//     return(
//       <Fragment>
//         <Input value={this.props.inputValue}
//                placeholder="nihao"
//                style={{width:'300px'}}
//                onChange={this.props.handleInputChange}
//               >
//         </Input>
//         <Button type="primary" onClick={this.props.handleBtnClick}>Primary</Button>
//         <List
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item onClick={(index) => {
//               this.props.handleDeleteItem(index);
//             }}>
//               {item}
//             </List.Item>
//           )}
//         />
//       </Fragment>
//     )
//   }
// }

export default TodoListUI;