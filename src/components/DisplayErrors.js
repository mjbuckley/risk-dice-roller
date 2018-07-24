import React from 'react';

const DisplayErrors = (props) => {
  if (props.status !== "error") {
    return null;
  }

  return (
    <div className="errors">
      {props.errors.map( (error) => (<p>{error[1]}</p>))}
    </div>
  );
};

export default DisplayErrors;
