
import React, { Component } from 'react';
import { Row, Col, Card, Container} from 'react-bootstrap';

const cardStyle = {border:"none",
                    width: '18rem' }
class MyNav extends Component {

  constructor(props){
    super(props);
    this.state = {
        cardData1 : [
            {
                title: "Web Development",
                text: "I have years of experience developing Web Apps using Javascript, ReactJS and AngularJS and building REST APIs using Python"
            },
            {
                title: "Data Analysis",
                text: "Statistics, Machine learning, Artificial Intelligence"
                },
            {
                title: "Big Data Engineering",
                text: "Optimizing storage and processing of big data, automation"
                },
        ]

     };
    }
 
  componentDidMount(){
  }

  render() {
    return (
        <Container style={{paddingTop:30}}>
        <Row>
            {this.state.cardData1.map((x) => {
                return (
                    <Col sm key={"skills"+x.title}>
                    <Card style={cardStyle}>
                    <Card.Body>
                        <Card.Title> <h3>{x.title}</h3></Card.Title>
                        <Card.Text>
                             {x.text}
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>
                )
            })}
        </Row>
        </Container>
    );
  }
}

export default MyNav;

