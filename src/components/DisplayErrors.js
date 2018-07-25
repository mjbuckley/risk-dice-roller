import React from 'react';

const DisplayErrors = (props) => {
  if (props.status !== "errors") {
    return null;
  }

  return (
    <div className="errors">
      {props.errors.map((error) =>
        <p key={error[0]}>{error[1]}</p>
      )}
    </div>
  );
};

export default DisplayErrors;
