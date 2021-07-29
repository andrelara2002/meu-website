import react, { Component } from 'react';
import '../../style.css'
import './style.scss'

export default class Hero extends Component {
    render() {
        return (
            <div className='hero'>
                <div className='inner'>
                    <h1>Seja Bem Vindo</h1>
                    <p>Meu site ainda está em construção, confira alguns projetos!</p>
                    <a href='https://www.github.com/andrelara2002'><button >Conheça</button></a>
                </div>
            </div>
        )
    }
}