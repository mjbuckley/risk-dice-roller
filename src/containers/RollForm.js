import { connect } from 'react-redux'
import RollInfo from '../components/RollInfo.js';
import { updateUserRollInfo } from '../actions';
import handleSubmit from '../utils/handleSubmit.js';
​
const mapStateToProps = (state) => ({
  userRollInfo: state.userRollInfo
});
​
// need to update actions
const mapDispatchToProps = (dispatch) => ({
  handlChange: (rollInfo) => dispatch(updateUserRollInfo(rollInfo)),
  onSubmit: (userRollInfo) => dispatch(handleSubmit(userRollInfo));
});
​
const RollForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(RollInfo);

export default RollForm;