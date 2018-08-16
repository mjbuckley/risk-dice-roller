import { connect } from 'react-redux';
import { resetForm } from '../actions';
import DisplayResults from '../components/DisplayResults.js';

const mapStateToProps = (state) => ({
  status: state.results.status,
  results: state.results.rollResults
});

const mapDispatchToProps = (dispatch) => ({
  resetForm: () => dispatch(resetForm())
});

const Results = connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayResults);

export default Results;
