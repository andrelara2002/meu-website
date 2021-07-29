import React from "react";
import "./style.css";

import Header from './components/header/index'
import MainBody from "./components/main_body/index.js";
import Hero from './components/hero/index'
import Spacer from './components/spacer/index'

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Spacer space='10' type='mobile'/>
      <MainBody />
      <Spacer space='10'/>
    </div>
  );
}
