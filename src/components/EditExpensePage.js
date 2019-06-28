import React from "react";

const EditExpensePage = props => {
  console.log("----", props);
  return (
    <div>This is the expense page for editing {props.match.params.id}</div>
  );
};

export default EditExpensePage;
