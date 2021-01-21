import react, { Component } from 'react';
import './style.scss'

export default class Header extends Component {
    render() {
        return (
            <header>
                <h1>Develop</h1>
                <nav>
                    <ul>
                        <li key='1'><a href='#'>Sobre mim</a></li>
                        <li key='2'><a href='#'>Portfolio</a></li>
                        <li key='3'><a href='#'>Contato</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}