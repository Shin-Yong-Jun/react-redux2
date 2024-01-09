import DisplayNumber from "../components/DisplayNumber";
import {connect} from 'react-redux';

// Store의 상태 State를 내려받아서 props로 내려주고 변경될때마다 다시 받아서 props로 내려주는 subscribe역할도 함.
function mapReduxStateToReactProps(state) {
  return {
    number: state.number
  }
}

export default connect(mapReduxStateToReactProps)(DisplayNumber);


// export default class extends Component {
//   state = {number:store.getState().number}
//   constructor(props) {
//     super(props);
//     store.subscribe(function(){
//       this.setState({number:store.getState().number});
//     }.bind(this));
//   }
//   render() {
//     return <DisplayNumber 
//     number={this.state.number}
//     unit={this.props.unit}></DisplayNumber>
//   }
// }