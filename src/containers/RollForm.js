import { connect } from 'react-redux';
import RollInfo from '../components/RollInfo.js';
import { updateUserRollInfo } from '../actions';
import handleSubmit from '../utils/handleSubmit.js';

const mapStateToProps = (state) => ({
  userRollInfo: state.userRollInfo,
  errors: state.results.errors,
  status: state.results.status,
  clickCount: state.results.clickCount
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (rollInfo) => dispatch(updateUserRollInfo(rollInfo)),
  onSubmit: (userRollInfo) => dispatch(handleSubmit(userRollInfo))
});

const RollForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(RollInfo);

export default RollForm;
