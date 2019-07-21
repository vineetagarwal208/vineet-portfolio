import React, { Component } from 'react';
import './App.css';
import MyNav from './Components/navbar'
import ContactMe from './Components/contactForm';
import { Modal, Row, Col } from 'react-bootstrap';
import MyJumbo from './Components/myJumbo';
import MyJumbo2 from './Components/myJumbo2'
import MyFooter from './Components/myFooter'
import Skills from './Components/skills'



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contactMeShow: false
    };
    this.toggleContactMe = this.toggleContactMe.bind(this);
  }

  toggleContactMe() {
    this.setState({ contactMeShow: !this.state.contactMeShow })
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="App">
        

          <Row id="home">
            <Col>
            <MyNav toggleContactMe={this.toggleContactMe} />
            </Col>
          </Row>
          <Row style={{paddingTop:70, backgroundImage: `url("./indian_peaks.jpg")`, backgroundSize: "cover"}}>
            <Col >
              <MyJumbo />
            </Col>
          </Row>
          {/* <Row id="skills" style={{height:1000, width:'100%'}}>
          </Row> */}
          <div id='skills'>
          <Skills id="skills"/>
          </div>
          <Row >
            <Col >
              <MyJumbo2 />
            </Col>
          </Row>

          <Row >
            <Col >
              <MyFooter />
            </Col>
          </Row>
          

        <Modal show={this.state.contactMeShow} onHide={(x) => { this.toggleContactMe() }}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Me</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ContactMe />
          </Modal.Body>
          <Modal.Footer>

          </Modal.Footer>
        </Modal>


      </div>
    );
  }
}

export default App;

