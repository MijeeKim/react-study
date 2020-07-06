import React from "react";

function Body({ todos }) {
  return <div>{JSON.stringify(todos)}</div>;
}

export default Body;
