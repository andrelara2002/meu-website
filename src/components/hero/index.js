import react, { Component } from 'react';
import '../../style.css'
import './style.scss'

export default class Hero extends Component {
    render() {
        return (
            <div className='hero'>
                <div className='inner'>
                    <h1>Seja Bem Vindo</h1>
                    <p>Onde a programação não é apenas códigos</p>
                    <button>Conheça</button>
                </div>
            </div>
        )
    }
}