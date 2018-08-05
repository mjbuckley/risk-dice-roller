import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const DisplayErrors = (props) => {
  if (props.status !== "errors") {
    return null;
  }

//   return (
//     <div className="errors">
//       {props.errors.map((error) =>
//         <p key={error[0]}>{error[1]}</p>
//       )}
//     </div>
//   );
// };


const errorMessage = props.errors.length > 1 ? (
  "There were errors in your submission. Please look at the error messages in the form and adjust you roll information.") :
  ("There was an error in your submission. Please look at the error message in the form and adjust your roll information");

  return (
    <div className="errors">
      <FontAwesomeIcon className="error-arrow" icon={faExclamationCircle}/> {errorMessage}
    </div>
  );
};

export default DisplayErrors;
