import React from 'react';

const RollInfo = (props) => {

  const handleChange = event => {
    props.handleChange({
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    props.onSubmit(props.userRollInfo);
  };

  return (
    <form onSubmit={onSubmit}>

      <h2 className="form-heading">Attack Info</h2>

      <label className='form-label'>
        Number of attack armies
        <input
          className='form-input'
          name="attackArmies"
          type="number"
          value={props.userRollInfo.attackArmies}
          onChange={handleChange} />
      </label>

      <label className='form-label'>
        Number of dice to roll <br />
        <span className='form-span'>1-3, and must be less than the number of attack armies</span>
        <input
          className='form-input'
          name="attackRollNum"
          type="number"
          value={props.userRollInfo.attackRollNum}
          onChange={handleChange} />
      </label>

      <label className='form-label'>
        (Optional) Stop number <br />
        <span className='form-span'>Stop rolling before dropping below this many attack armies</span>
        <input
          className='form-input'
          name="stopNum"
          type="number"
          value={props.userRollInfo.stopNum}
          onChange={handleChange} />
      </label>

      <label className='form-label'>
        (Optional) Stop differential <br />
        <span className='form-span'>Stop rolling before dropping below this differential. Calculated as the difference between the number of attack armies and defending armies. Ex: -4 would end rolling when attack has 4 fewer armies than the defense.</span>
        <input
          className='form-input'
          name="stopDifferential"
          type="number"
          value={props.userRollInfo.stopDifferential}
          onChange={handleChange} />
      </label>

      <br />

      <h2 className="form-heading">Defense Info</h2>

      <label className='form-label'>
        Number of defending armies
        <input
          className='form-input'
          name="defendArmies"
          type="number"
          value={props.userRollInfo.defendArmies}
          onChange={handleChange} />
      </label>

      <label className='form-label'>
        Number of dice to roll <br />
        <span className='form-span'>1-2, and cannot be greater than the number of defeding armies</span>
        <input
          className='form-input'
          name="defendRollNum"
          type="number"
          value={props.userRollInfo.defendRollNum}
          onChange={handleChange} />
      </label>

      <button className="form-button" type="submit">Roll Dice</button>
    </form>
  );
}

export default RollInfo;
