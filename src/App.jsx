import Header from "./components/Header";
import Quiz from "./components/Quiz";
import Landing from "./components/Landing";
import { useState } from "react";

function App() {
  const [isStarted, setIsStarted] = useState(false);

  function handleClick() {
    setIsStarted(true);
  }

  return (
    <>
      <Header />
      {isStarted ? <Quiz /> : <Landing start={handleClick} />}
    </>
  );
}

export default App;
