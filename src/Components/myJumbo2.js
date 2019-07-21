import React, { Component } from 'react';
import {Media, Container} from 'react-bootstrap';

class MyJumbo2 extends Component {

  constructor(props){
    super(props);
    this.state = {
        
     };
    }
 
  componentDidMount(){
  }

  render() {
      return      (
      <div style={{height:200 ,paddingTop:50, backgroundColor:"#4f7dc5", color:"#FFFFFF"}}> 
        <Container>
        <Media>
            <img
                width={128}
                height={128}
                className="mr-3"
                src="./headshot.png"
                alt="Generic placeholder"
            />
            <Media.Body>
                <p>
                When I am not working, I enjoy Skiing, Camping and Hiking in the Rocky Mountains with my wife and daughter. 
            I intend to improve my portfolio website and showcase my skills better over the next few months.
                </p>
            </Media.Body>
            </Media>
            {/* When I am not working, I enjoy Skiing, Camping and Hiking in the Rocky Mountains with my wife and daughter. 
            I intend to improve my portfolio website and showcase my skills better over the next few months.  */}
        </Container>
      </div>
      )
  }
}

export default MyJumbo2;

