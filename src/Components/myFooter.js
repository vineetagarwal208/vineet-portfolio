import React, { Component } from 'react';
// import { SocialIcon } from 'react-social-icons';
// import { Row, Col, Card, Container} from 'react-bootstrap';

class MyFooter extends Component {

  constructor(props){
    super(props);
    this.state = {
        
     };
    }
 
  componentDidMount(){
  }

  render() {
      return      (
      <div style={{height:100 , wdith:"100%",paddingTop:50, backgroundColor:"#212529", color:"#FFFFFF"}}> 
      {/* <SocialIcon url="https://github.com/vineetagarwal208/" />
      <SocialIcon url="https://www.flickr.com/people/34116998@N04/" /> */}
      Vineet Agarwal, Copyright, 2019
      
      </div>
      )
  }
}

export default MyFooter;

