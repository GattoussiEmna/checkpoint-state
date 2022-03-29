import React, { Component } from "react";
import "./Profile.css";



export default class Profile extends Component {
    constructor(props){
    super(props)
    this.state={
        counter : 0,
        intervall : null
    }
}

componentDidMount(){
    this.setState({
        intervall : setInterval(()=>{
            this.setState({
                counter : this.state.counter+1
            })
        },1000)
    })
}
componentWillUnmount(){
    clearInterval(this.state.intervall)
}
render(){ 
    const{fullName, proffession, Bio, Bioo, Biooo, myImg }=this.props
    return (
        <div>
    <h1>{this.state.counter}</h1>
    <h1>{fullName}</h1>
    <h2 className="proffession">{`I am a ${proffession}`}</h2>
    <h2 className="Bio">{Bio}</h2>
    <h2 className="Bioo">{Bioo}</h2>
    <h2 className="Biooo">{Biooo}</h2>
    <img src={myImg} />

        </div>
    )
}
}








