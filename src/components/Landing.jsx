import "../index.css";
function Landing({ start }) {
  return (
    <>
      <div id="quiz">
        <h2>This quiz is a mcq about Reactjs Fundementals</h2>
        <div className="answer">
          <button onClick={start}>Start</button>
        </div>
      </div>
    </>
  );
}

export default Landing;
