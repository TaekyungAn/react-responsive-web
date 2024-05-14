import { useEffect, useState } from "react";
import useConvert from "./useConvert";

/* eslint-disable no-unused-vars */
const useCountUp = (end, start = 0, duration = 2000) => {
  const [count, setCount] = useState(start);
  useEffect(() => {
    let currentNum = start;
    if (Math.abs(end) > 1000) {
      const delay = 20;
      const countUp = setInterval(() => {
        currentNum = currentNum + 950 / (duration / delay);
        setCount(currentNum);
        if (currentNum === 950) {
          clearInterval(countUp);
        }
      }, delay);
    } else if (Math.abs(end) > 99) {
      const delay = 20;
      const countUp = setInterval(() => {
        currentNum = currentNum + end / (duration / delay);
        setCount(currentNum);
        if (currentNum === end) {
          clearInterval(countUp);
        }
      }, delay);
    } else {
      const delay = Math.abs(Math.floor(duration / end));
      const countUp = setInterval(() => {
        currentNum++;
        setCount(currentNum);
        if (currentNum === end) {
          clearInterval(countUp);
        }
      }, delay);
    }
  }, [end, start, duration]);

  const convertedNum = useConvert(end, 0);
  if (count > 949) {
    return convertedNum + `+`;
  }

  return count.toFixed(0);
};
export default useCountUp;
