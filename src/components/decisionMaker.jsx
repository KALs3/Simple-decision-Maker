import React, { useState } from 'react';

function Decision() {
  const [decisionMessage, setDecisionMessage] = useState('');

  function Decide() {
    const messages = ["DO IT SUCKER", "I don't think you should do it"];
    const inputText = document.getElementById('decision-input').value.trim();

    if (inputText === '') {
      return; // Skip generating a message if the input is empty
    }

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setDecisionMessage(randomMessage);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      Decide();
    }
  }

  return (
    <div className="flex justify-center items-center flex-col text-center ">
      <h1 className="text-md font-Belanosima text-black mt-5 sm:text-4xl">Simple Decision Maker</h1>
      <p className="text-sm font-Belanosima text-black mt-5 sm:text-lg">
        Simple Decision Maker helps you take hard decisions<br />when you can't really decide what to do
      </p>

      <input
        id="decision-input"
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs mt-5"
        onKeyDown={handleKeyDown}
      />
      {decisionMessage && <p className='text-md sm:text-2xl mt-2 font-Belanosima text-black  '>{decisionMessage}</p>}
      <button className="btn mt-5 w-52 bg-blue-300" onClick={Decide}>Decide</button>

    </div>
  );
}

export default Decision;
