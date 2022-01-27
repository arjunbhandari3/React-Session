import "./App.css";
import Company from "./Company";
import Person from "./Person";

function App() {
  return (
    <div className="App">
      <div className="App-Container">
        <Person name={"Arjun Bhandari"} address={"Nawalpur"} />
        <Company
          name={"Leapfrog Technology, Inc."}
          position={"Associate Software Engineer"}
        />
      </div>
    </div>
  );
}

export default App;
