import React from "react";
import "./App.css";

export interface AppProps {
  compiler: string;
  framework: string;
}

export default function App(props: AppProps) {
  console.log(props);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
