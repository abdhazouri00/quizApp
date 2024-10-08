import { useState, useEffect } from "react";

function QuizTimer({ time, onTimeOut }) {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    // Reset elapsed time when a new question starts
    setElapsedTime(0);

    const interval = setInterval(() => {
      setElapsedTime((prev) => {
        if (prev + 10 >= time) {
          clearInterval(interval); // Clear interval if time exceeded
          return time; // Set to max time to fill progress bar
        }
        return prev + 16; // Increment by 10ms
      });
    }, 1); // Update every 10ms

    const timer = setTimeout(() => {
      console.log("Time's up! Moving to the next question.");
      onTimeOut();
    }, time);

    // Clear interval and timeout on cleanup
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [time, onTimeOut]);

  return <progress id="question-time" value={elapsedTime} max={time} />;
}

export default QuizTimer;
