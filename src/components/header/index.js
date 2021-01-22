import react, { Component } from 'react';
import './style.scss'

export default class Header extends Component {
    render() {
        return (
            <header>
                <h1>Develop</h1>
                <nav>
                    <ul>
                        <li key='1'><a href='#'>LinkedIn</a></li>
                        <li key='2'><a href='#'>Github</a></li>
                        <li key='3'><a href='#'>Gmail</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}