import React, { useEffect, useState } from "react";

export default function Functional() {
  //React Hooks

  const [state, setState] = useState({
    firstName: "Arjun",
    lastName: "Bhandari",
  });

  // const [firstName, setFirstName] = useState("Arjun");
  // const [lastName, setLastName] = useState("Bhandari");

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count", count);
  }, [count]);
  const handleCount = () => {
    setCount(count + 1);
  };

  // This hook will run only once when the component is mounted.
  useEffect(() => {
    // when component is mounted
    console.log("mounted");

    // return function when component is unmounted
    return () => {
      console.log("unmounted");
    };
  }, []);

  // This hook will run everytime the state changes.
  useEffect(() => {
    console.log("State changed", state);
  }, [state]);

  const handleNameChange = () => {
    setState({
      firstName: "John",
      lastName: "Doe",
    });
  };

  //HOC and HOF
  // HOC - Higher Order Component: A component that takes a component as an argument or returns a component

  // HOF - Higher Order Function: A function that takes a function as an argument or returns a function.
  // for example:
  //   taking function as an argument
  //   const add = (v) => v + 3;
  //   const addTwice = (add, value) => add(add(value));
  //   console.log("Sum", addTwice(add, 5));

  // returning function
  //   const addHOF = (val) => (add) => add(add(val));
  //   console.log("Sum by returning function", addHOF(5)(add));

  return (
    <div>
      <div>
        <h1>
          Hello {state.firstName} {state.lastName}
        </h1>
        <button onClick={handleNameChange}>Change Name</button>
      </div>
      <div>
        <h1>You clicked {count} times</h1>
        <button onClick={handleCount}>Click me</button>
      </div>
    </div>
  );
}
