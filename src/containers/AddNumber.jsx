import AddNumber from '../components/AddNumber';
import {connect} from 'react-redux';


function mapDispatchToReactProps(dispatch) {
  return {
    onClick: function(size) {
      dispatch({type:'INCREMENT', size:size})
    }
  }
}

export default connect(null,mapDispatchToReactProps )(AddNumber);
// connect를 통해 스토어의 상태를 전달할때는 첫번째 인자, 스토어에 이벤트를 전달할때는 두번째 인자를 사용한다. 

// import React, { Component } from 'react';
// import store from '../store';

// export default class extends Component {
//   render() {
//     return <AddNumber onClick={function(size){
//       store.dispatch({type:'INCREMENT', size:size})
//     }.bind(this)}></AddNumber>
//   }
// }