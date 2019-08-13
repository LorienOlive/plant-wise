import React from "react";
import "./styles/App.css";

export interface AppProps {
  compiler: string;
  framework: string;
}

export default function App(props: AppProps) {
  console.log(props);
  return <div className="App">PlantWise</div>;
}
