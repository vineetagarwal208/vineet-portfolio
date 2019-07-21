
import React, { Component } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';

class ContactMe extends Component {

  constructor(props){
    super(props);
    this.state = {
        
        }
     };
 

  componentDidMount(){
  }

  render() {
    return (
      <div>
        <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            I will never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group controlId="Message">
            <FormControl as="textarea" placeholder="Message" aria-label="With textarea" />
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
      </div>
    );
  }
}

export default ContactMe;

