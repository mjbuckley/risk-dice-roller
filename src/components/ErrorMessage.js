import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

/*
 * Function returns an element containg an error message to display if there is an error that needs
 * to be displayed, otherwise return null. I should probably restructure how add errors to state
 * becuase this process is kind of ugly, but it works for now.
 */
const ErrorMessage = (props) => {

  if (props.errors.length === 0) {
    return null;
  }

  // error[0] is the name of the form element the error belongs to. getError will contain the error
  // array if it is in errors, otherwise undefined.
  const getError = props.errors.find( error => error[0] === props.name);

  if (getError === undefined) {
    return null;
  }

  // The second value (index 1) of error array contains the error message.
  const message = getError[1];

  return (
    <div className="error-message">
      <FontAwesomeIcon className="error-arrow" icon={faArrowAltCircleRight}/> ERROR: {message}
    </div>
  );
}

export default ErrorMessage;
