import React, { Component } from 'react';
import Profile from './component/Profile';
import myImg from './assets/emna.jpg'
export default class App extends Component {
    constructor(){
    super()
    this.state={
    show : true
    }
  }

handleShow=()=>{
  this.setState(
    {
      show : !this.state.show
    }
  )
}
  render() {
  
    return (

      <div className='App'>
        <button onClick={this.handleShow}>Click here !</button>
        {
          this.state.show ? (<Profile
            fullName="Gattousssi Emna"
            
            proffession="IT Engineer"
            Bio="“I believe in being strong when everything seems to be going wrong.”"
            Bioo="“I believe that happy girls are the prettiest girls.”"
            Biooo="“I believe that tomorrow is another day, and I believe in miracles.”"
            myImg={myImg}/>
            ) : null
        }
      
      
      </div>
    )
    
  }
}
