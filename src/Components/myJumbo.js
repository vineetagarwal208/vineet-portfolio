
import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
// import { url } from 'inspector';

class MyJumbo extends Component {

  constructor(props){
    super(props);
    this.state = {
        
        }
     };
 

  componentDidMount(){
  }

  render() {
    return (
      <div >
        <Jumbotron style= {{backgroundColor: "#e9ecef00", height:500, color:"#FFFFFF"}}>
            <h1> <strong> Hi !</strong></h1>
            <h3>My name is Vineet</h3>
            <h5>
            I am a Data Scientist and Developer based in Colorado Front Range.
            </h5>
        </Jumbotron>
      </div>
    );
  }
}

export default MyJumbo;

