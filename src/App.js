// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function Flag() {
  const [flag, setFlag] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = 'https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/6f7665';

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Bad network response');
        }
        return response.text();
      })
      .then((data) => {
        setFlag(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{flag}</div>;

}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Flag />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <img src="https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/6f7665" className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
