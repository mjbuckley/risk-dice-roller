import React, { Component } from 'react';
import ErrorMessage from './ErrorMessage.js';
import ErrorMessages from '../containers/ErrorMessages.js';

// The form that collects the roll information from the user.
class RollInfo extends Component {
  constructor(){
    super();
    this.topNode = null;
    this.bottomNode = null;
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    this.props.handleChange({
      [event.target.name]: event.target.value
    });
  };

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.props.userRollInfo);
  };

  // handles scrolling to results or errors on roll form submission
  componentDidUpdate(prevProps) {
    // if (this.props.status === 'none' || this.props.status === prevProps.status) {
    //   return;
    // }
    //
    // if (this.props.status === 'errors') {
    //   this.topNode.scrollIntoView();
    // } else {
    //   this.bottomNode.scrollIntoView();
    // }

    // NEW
    if (this.props.clickCount === prevProps.clickCount) {
      return;
    }

    if (this.props.status === 'errors') {
      // scroll to errors
      this.topNode.scrollIntoView();
    } else {
      // scroll to results
      this.bottomNode.scrollIntoView();
    }
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.onSubmit}>
          <div ref={(spot) => { this.topNode = spot; }} className="placeholder"></div>
          <ErrorMessages />
          <h2 className="form-heading">Attack Info</h2>

          <ErrorMessage errors={this.props.errors} name="attackArmies" />
          <label className='form-label'>
            Number of attack armies
            <input
              className='form-input'
              name="attackArmies"
              type="number"
              value={this.props.userRollInfo.attackArmies}
              onChange={this.handleChange} />
          </label>

          <ErrorMessage errors={this.props.errors} name="attackRollNum" />
          <label className='form-label'>
            Number of dice to roll <br />
            <span className='form-span'>1-3, and must be less than the number of attack armies</span>
            <input
              className='form-input'
              name="attackRollNum"
              type="number"
              value={this.props.userRollInfo.attackRollNum}
              onChange={this.handleChange} />
          </label>

          <ErrorMessage errors={this.props.errors} name="stopNum" />
          <label className='form-label'>
            (Optional) Stop number <br />
            <span className='form-span'>Stop rolling before dropping below this many attack armies</span>
            <input
              className='form-input'
              name="stopNum"
              type="number"
              value={this.props.userRollInfo.stopNum}
              onChange={this.handleChange} />
          </label>

          <ErrorMessage errors={this.props.errors} name="stopDifferential" />
          <label className='form-label'>
            (Optional) Stop differential <br />
            <span className='form-span'>Stop rolling before dropping below this differential. Calculated as the difference between the number of attack armies and defending armies. Ex: -4 would end rolling when attack has 4 fewer armies than the defense.</span>
            <input
              className='form-input'
              name="stopDifferential"
              type="number"
              value={this.props.userRollInfo.stopDifferential}
              onChange={this.handleChange} />
          </label>

          <br />

          <h2 className="form-heading">Defense Info</h2>

          <ErrorMessage errors={this.props.errors} name="defendArmies" />
          <label className='form-label'>
            Number of defending armies
            <input
              className='form-input'
              name="defendArmies"
              type="number"
              value={this.props.userRollInfo.defendArmies}
              onChange={this.handleChange} />
          </label>

          <ErrorMessage errors={this.props.errors} name="defendRollNum" />
          <label className='form-label'>
            Number of dice to roll <br />
            <span className='form-span'>1-2, and cannot be greater than the number of defeding armies</span>
            <input
              className='form-input'
              name="defendRollNum"
              type="number"
              value={this.props.userRollInfo.defendRollNum}
              onChange={this.handleChange} />
          </label>

          <button className="form-button" type="submit">Roll Dice</button>
        </form>
        <div ref={(spot) => { this.bottomNode = spot; }} className="placeholder"></div>
      </div>
    );
  }
}

export default RollInfo;
