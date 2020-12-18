import React, { Component } from "react";
import api from '../../Api.js'

export default class MainBody extends Component {

  constructor(props){
    super()
    this.state = {
      textos: ['Seja bem vindo ao meu site, ainda está e construção e existem diversas alterações para serem apresentadas com o tempo, mas,  através dele estou compartilhando minha jornada desde o início no mundo da programação até a chegada no mundo profissional. Tenho mais de um ano de estudos na área, e já passei por Java, C#, Javascript e Python, embora não sejam tão profundos já tenho conhecimento básico nessa área, além de conhecimento sobre UML, HTML e CSS. Atualmente minhastack é para o desenvolvimentoweb, onde tenho mais conhecimento com Javascript e HTML, enquanto estudo frameworks como React.',
      
      'Alguns de meus projetos, uns são links para seus repositórios e outros vão rodar no  navegador, salve os sites na tela inicial para acesso rápido!']
    }
  }
  render() {
    return (
      <div>
        <div className="alertas">
          <h2>Versões em React.js estão chegando!</h2>
        </div>
        <div className="main">
          <div className="welcome">
            <h1>Olá seja bem vindo</h1>
            <h2>Esse sou eu:</h2>
          </div>
        </div>
        <div className="container">
        <div className="card">
            <div className="card-header">
                <img src={} alt={}/>
                <div className="card-header-text">
                    <strong>André Lara</strong>
                    <p>Desenvolvedor</p>
                </div>
            </div>
            <p>
            {this.state.textos[0]}
            </p>
        </div>
        </div>
        <h1 id="meus-projetos-tag">Meus projetos</h1>
        <h2 id="description-myprojects">{this.state.textos[1]}</h2>
        <div className='portfolio'/>
      </div>
    );
  }
}
