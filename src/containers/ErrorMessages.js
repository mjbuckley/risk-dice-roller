import { connect } from 'react-redux';
import DisplayErrors from '../containers/DisplayErrors';

​
const mapStateToProps = (state) => ({
  status: state.results.status,
  errors: state.results.errors
});
​
const ErrorMessages = connect(
  mapStateToProps
)(DisplayErrors);

export default ErrorMessages;
