import React from 'react';

// Displays the final results of rolling as well as the complete rolling history.
const DisplayResults = (props) => {
  if (props.status !== "results") {
    return null;
  }

  // roll history becomes the same as props.results.history minus the first history object (which is
  // just the start values).
  let rollHistory = [...props.results.history];
  rollHistory.shift();

  let attackResult = rollHistory[rollHistory.length-1].attackArmies;
  let defenseResult = rollHistory[rollHistory.length-1].defendArmies;

  // Generates a unique key for each roll history item. Any item generating the same key in the
  // future would have an identical history.
  const generateKey = (rollHistory) => {
    const key =
      rollHistory.attackRolls.join('') + 'x' +
      rollHistory.defendRolls.join('') + 'x' +
      rollHistory.attackArmies + 'x' +
      rollHistory.defendArmies;
    return key;
  };

  return (
    <div className="success">
      <h2>Results</h2>
      <p className='success-results'>Attack: <span className='result-num'>{attackResult}</span> Defense: <span className='result-num'>{defenseResult}</span></p>
      <p className='success-message'>{props.results.message} See full history below:</p>

      <table className='results-table'>
        <thead>
          <tr>
            <th>Attack Rolls</th>
            <th>Defense Rolls</th>
            <th>Attack Armies</th>
            <th>Defeding Armies</th>
          </tr>
        </thead>
        <tbody>
          {rollHistory.map((roll) => {
            return (<tr key={generateKey(roll)}>
              <td>{roll.attackRolls.join(', ')}</td>
              <td>{roll.defendRolls.join(', ')}</td>
              <td>{roll.attackArmies}</td>
              <td>{roll.defendArmies}</td>
            </tr>)
          })
          }
        </tbody>
      </table>
    </div>
  );
};

export default DisplayResults;
