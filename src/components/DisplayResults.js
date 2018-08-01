import React from 'react';


/**
 * For a success I need to treat the first element in the props.results.history array differnt than
 * the rest because it isn't a roll, it's just the starting values.
 */



const DisplayResults = (props) => {
  if (props.status !== "results") {
    return null;
  }

  // roll history becomes the same as props.results.history minus the first history object, which is just the start values. startValue is just that removed history object.
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

// {rollHistory.map((roll) => {
//   return (<ul>
//     <li>Attack Rolls: {roll.attackRolls},
//         Defense Rolls: {roll.defendRolls},
//         Attack loses: {roll.attackResult * -1},
//         Defense loses: {roll.defendResult * -1},
//         Attack now has {roll.attackArmies},
//         Defense now has {roll.defendArmies}
//     </li>
//   </ul>)
// })
// }




// return (
//   <div className="success">
//     <p>{props.results.message}</p>
//     {props.results.history.map((hist) => {
//       return (<ul>
//         <li>Attack Rolls: {hist.attackRolls}</li>
//         <li>Defense Rolls: {hist.defendRolls}</li>
//       </ul>)
//     })
//     }
//   </div>
// );
