import { connect } from 'react-redux';
import DisplayResults from '../components/DisplayResults.js';

const mapStateToProps = (state) => ({
  status: state.results.status,
  results: state.results.rollResults
});

const Results = connect(
  mapStateToProps
)(DisplayResults);

export default Results;
