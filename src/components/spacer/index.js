import react, { Component } from 'react';

import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

export default class Spacer extends Component {
    constructor(props) {
        super()
        this.state = {
            size: props.space,
            type: props.type
        }
    }

    componentDidMount() {
        this.changeProportion()
    }

    changeProportion = () => {
        let _state = this.state

        if (isMobile){
            _state.size = this.state.size / 2

            this.setState({ _state }, () => {
                console.log("mobile")
            })
        }
    }

    render() {

        return (
            <div style={{ height: this.state.size + 'rem', width: '100%' }}></div>
        )
    }
}