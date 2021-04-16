import react, { Component } from 'react';
import './style.scss'

export default class Card extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (

            <section className="container">
                <div className='inner-container'>
                    <div className='whoami'>
                        <h1>
                            Este sou eu
            </h1>
                        <p>
                            Seja bem vindo ao meu site, ainda está e construção e existem diversas alterações
                            para serem apresentadas com o tempo, mas, através dele estou compartilhando minha
                            jornada desde o início no mundo da programação até a chegada no mundo profissional.

                <br /><br />

                Tenho mais de dois anos de estudos na área, e já passei por Java, C#, Javascript
                e Python, embora não sejam tão profundos já tenho conhecimento básico nessa
                área, além de conhecimento sobre UML, HTML e CSS. Atualmente minha stack é
                para o desenvolvimento web, onde tenho mais conhecimento com Javascript
                e HTML, com projetos feitos em React JS, enquanto estudo Flutter e
                React Native para desenvolvimento mobile.
            </p>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <img src={'https://avatars.githubusercontent.com/u/66387919?s=460&u=4170b1050e19c4b0a4191c05e0d973f3e6667911&v=4'} alt={'André'} />
                            <div className="card-header-text">
                                <h2>André Lara</h2>
                                <strong>Desenvolvedor</strong>
                            </div>
                        </div>
                        <p>Hey, I'm a brazilian starter developer, looking for learn new things and improve in my career.</p>
                    </div>
                </div>
            </section>
        )
    }
}