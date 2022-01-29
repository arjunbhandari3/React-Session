import React from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
import State from "./State";

function App() {
  const AppStyle = {
    textAlign: "center",
  };

  return (
    <div className="App" style={AppStyle}>
      <Component1 text="Class component.">
        <Component2 body="Functional component." />
      </Component1>

      <State />
    </div>
  );
}

export default App;
