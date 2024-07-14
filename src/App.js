import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name);
    setName('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Name Form App</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Enter your name: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
        {submittedName && (
          <p>Hello, {submittedName}!</p>
        )}
      </header>
    </div>
  );
}

export default App;