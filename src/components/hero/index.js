import react, {Component} from 'react';
import '../../style.css'
import './style.scss'

export default class Hero extends Component {
    render(){
        return(
            <div className='hero'>
                <h1>Seja Bem vindo</h1>
                <p>Sou um programador</p>
                <button>Conheça</button>
            </div>
        )
    }
}