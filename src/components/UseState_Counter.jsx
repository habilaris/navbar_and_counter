import { useEffect, useState } from "react";
import styles from "./counter.module.css";

function Counter() {
  // Exporting module names must start with a Capital letter.

  const [num, setNum] = useState(0);

  // const [random, setRandom] = useState(8);

  console.log("Hello World without useEffect");
  // Runs after initial render and re-render, not dependent on a var or anything.

  useEffect(() => {
    console.log("Hello World from inside useEffect");
  }, [num]);
  // Runs after initial render and everytime the num var is changed/re-rendered.

  // useEffect(callback fn, dependency)
  // This is used because running a script before react has rendered the whole page or the component will break things in react.
  // useEffect will allow you to run a JS script after react has rendered the component/page/app.
  // It provides a more controlled way/approach to handle your scripts, otherwise some script can cause repeated renders, and can cause the app to behave unexpectedly.
  // So anything that can conflict with rendering, should be inside the useEffect,
  // Because know that without it, script will run everytime the component will render.

  // Increment logic is Handled using the inline approach.
  // Handling Decrement logic using Internal JS approach.
  function decrement() {
    if (num > 0) {
      setNum(num - 1);
    }
  }
  return (
    <div className={styles.counter_cont}>
      <h1>COUNTER APP</h1>
      <p className={styles.num}>{num}</p>
      <div className={styles.btn_cont}>
        <button
          className={styles.btns}
          onClick={() => {
            setNum(num + 1);
          }}
        >
          {/* Unlike html onclick, onClick expects a Callback function */}
          {/* Also unlike html, you comment everything like this instead of <!- Comment -->*/}
          {/* Also people prefer to handle JS logic outside JSX body to improve readability */}
          {/* But I am using both methods */}
          Increment
        </button>
        <button className={styles.btns} onClick={decrement}>
          {/* Calling a function before rendering will break things in react, so don't do that.
          for reference: onClick={decrement()} ❌*/}
          Decrement
        </button>
        <button
          className={styles.btns}
          onClick={() => {
            setNum(0);
            // you can't re-assign a const value, so the idea is to change the very innitial value state to Zero again
          }}
        >
          Reset
        </button>

        {/* <button
            onClick={() => {
              setRandom(random + 2);
            }}
          >
            Render
          </button> */}
        {/* This button is created to test the difference between a statement running inside useEffect and without useEffect. */}
      </div>
    </div>
  );
}

export default Counter;
