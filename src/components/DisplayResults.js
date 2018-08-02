import React from 'react';

// Displays the final results of rolling as well as the complete rolling history.
const DisplayResults = (props) => {
  if (props.status !== "results") {
    return null;
  }

  // roll history becomes the same as props.results.history minus the first history object, which is
  // just the start values. startValue is just that removed history object (the start value).
  let rollHistory = [...props.results.history];
  let startValues = rollHistory.shift();

  let attackResult = rollHistory[rollHistory.length-1].attackArmies;
  let defenseResult = rollHistory[rollHistory.length-1].defendArmies;

  return (
    <div className="success">
      <p>Result: Attack has {attackResult} and Defense has {defenseResult}.</p>
      <p>{props.results.message} See full history below:</p>

      <table className='results-table'>
        <tr>
          <th>Attack Rolls</th>
          <th>Defense Rolls</th>
          <th>Attack Armies</th>
          <th>Defeding Armies</th>
        </tr>
        {rollHistory.map((roll) => {
          return (<tr>
            <td>{roll.attackRolls.join(', ')}</td>
            <td>{roll.defendRolls.join(', ')}</td>
            <td>{roll.attackArmies}</td>
            <td>{roll.defendArmies}</td>
          </tr>)
        })
        }
      </table>
    </div>
  );
};

export default DisplayResults;
