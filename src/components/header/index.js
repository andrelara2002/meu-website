import react, { Component } from 'react';
import './style.scss'
import '../../style.css'

export default class Header extends Component {
    render() {
        return (
            <header>
                <h1>Develop</h1>
                <nav>
                    <ul>
                        <li key='1'><a href='https://www.linkedin.com/in/andré-lara-1a65b2199/'>LinkedIn</a></li>
                        <li key='2'><a href='https://github.com/andrelara2002'>Github</a></li>
                        <li key='3'><a href='mailto:andrelara2002@gmail.com'>Gmail</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}