import React from "react";
import "./style.css";

import Header from './components/header/index'
import MainBody from "./components/main_body/index.js";
import Hero from './components/hero/index'
import Spacer from './components/spacer/index'
import Card from './components/card/index'
import TalkTo from './components/talk_to/index'

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Spacer space='10' type='mobile'/>
      <Card />
      <Spacer space='10'/>
      <MainBody />
      <Spacer space='10'/>
      <TalkTo />
    </div>
  );
}
