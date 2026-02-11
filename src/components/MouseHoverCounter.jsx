// import { useRef } from "react";
import styles from "./counter.module.css";

function MouseHoverCounter() {
  function handleMouseOver() {
    console.log("helll");
  }

  return (
    <div className={styles.counter_cont2} onMouseOver={handleMouseOver}></div>
  );
}

export default MouseHoverCounter;
