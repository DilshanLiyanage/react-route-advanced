import React, { Fragment } from "react";

const Student = params => {
  return (
    <React.Fragment>
      <h1>Welcome to {params.username}</h1>
    </React.Fragment>
  );
};

export default Student;
