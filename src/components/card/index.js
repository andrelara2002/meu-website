import react, { Component } from 'react';

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

                Tenho mais de um ano de estudos na área, e já passei por Java, C#, Javascript
                e Python, embora não sejam tão profundos já tenho conhecimento básico nessa
                área, além de conhecimento sobre UML, HTML e CSS. Atualmente minha stack é
                para o desenvolvimento web, onde tenho mais conhecimento com Javascript
                e HTML, enquanto estudo frameworks como React.
            </p>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <img src={'https://andrelara2002.github.io/image/minha-foto.gif'} alt={'André'} />
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