import React from "react";
import axios from 'axios';

export default class Test extends React.Component{
    state = {content:null}
    componentWillMount() {
        axios.get('/home')
        .then( res => res.data)
        .then(res=> {
            this.setState({content:res})
        })
    }
    render() {
        return (
            <div>
                {this.state.content}
            </div>
        )
    }
}