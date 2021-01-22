import react, {Component} from 'react';

export default class Spacer extends Component{
    constructor(props){
        super()
        this.state = {
            size: props.space
        }
    }

    render(){
        return(
            <div style={{height:this.state.size + 'px', width:'100%'}}></div>
        )
    }
}