// VERY INCOMPLETE BUT AN IDEA OF WHAT TO DO
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

      <h2>ATTACK</h2>
      <label>
        Number of attacking armies
        <input
          name="attackArmies"
          type="number"
          value={props.userRollInfo.attackArmies}
          onChange={handleChange} />
      </label>

      <label>
        Number of dice to roll (1, 2, or 3)
        <input
          name="attackRollNum"
          type="number"
          value={props.userRollInfo.attackRollNum}
          onChange={handleChange} />
      </label>

      <label>
        Stop before I drop below this many armies (optional)
        <input
          name="stopNum"
          type="number"
          value={props.userRollInfo.stopNum}
          onChange={handleChange} />
      </label>

      <label>
        Stop before my army differential drops below (optional)
        <input
          name="stopDifferential"
          type="number"
          value={props.userRollInfo.stopDifferential}
          onChange={handleChange} />
      </label>


      <br />

      <h2>Defense</h2>
      <label>
        Number of defending armies
        <input
          name="defendArmies"
          type="number"
          value={props.userRollInfo.defendArmies}
          onChange={handleChange} />
      </label>

      <label>
        Number of dice to roll (1 or 2)
        <input
          name="defendRollNum"
          type="number"
          value={props.userRollInfo.defendRollNum}
          onChange={handleChange} />
      </label>

      <button type="submit">Roll Dice</button>
    </form>

  );
}

export default RollInfo;
