import React from "react";
import "./style.css";

import Header from './components/header/index'
import MainBody from "./components/main_body/index.js";
import Hero from './components/hero/index'

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <MainBody />
    </div>
  );
}
