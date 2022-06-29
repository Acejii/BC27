import React from "react";

function DataBinding() {
  const message = "Hello CyberSoft";
  const getMessage = () => {
    return message;
  };
  const username = "HoangThu";
  return (
    <div>
      <h1>{message}</h1>
      <h1>1 + 1 = {1 + 1}</h1>
      <h1>{getMessage()}</h1>
      <input type="text" value={username} />
    </div>
  );
}

export default DataBinding;
