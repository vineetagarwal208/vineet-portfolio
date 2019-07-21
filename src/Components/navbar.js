
import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown, Container, Button } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class MyNav extends Component {

  constructor(props){
    super(props);
    this.state = {
        navOptions : [
         {
             name: "Home", href: "#home"
         }, {
             name: "Skills", href:"#skills"
         }
        ]
        }
     };
 

  componentDidMount(){
  }

  render() {
    return (
      <div>
        <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
            <Container>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            { this.state.navOptions.map( (x) => { return <Nav.Link key={"nav"+x.name} href={x.href}>{x.name}</Nav.Link> } ) }

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                 <NavDropdown.Item href="#action/3.1">Another action</NavDropdown.Item>
                 <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                 <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
            <NavDropdown title="Resume" id="basic-nav-dropdown">
                 <NavDropdown.Item  href='vineet_agarwal_resume.pdf' download>pdf</NavDropdown.Item>
            </NavDropdown> 

            </Nav>
            <Nav>
                <Nav.Link href="#deets">
                    <Button variant="outline-info" onClick={this.props.toggleContactMe}> 
                        <FontAwesomeIcon icon= {faEnvelope} />
                    </Button>
                    </Nav.Link>
                
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
      </div>
    );
  }
}

export default MyNav;

