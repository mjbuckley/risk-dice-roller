import React from 'react';

// Will want to do a lot more here, but just doing this for now to verify things are working.
const DisplayResults = (props) => {
  if (props.status !== "results") {
    return null;
  }

  return (
    <div className="success">
      <p>{props.results.message}</p>
    </div>
  );
};

export default DisplayResults;
