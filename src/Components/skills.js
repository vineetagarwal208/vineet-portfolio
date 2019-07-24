
import React, { Component } from 'react';
import { Row, Col, Card, Container, Jumbotron} from 'react-bootstrap';

const cardStyle = {border:"none",
                    width: '18rem' }
class MyNav extends Component {

  constructor(props){
    super(props);
    this.state = {
        cardData1 : [
            {
                title: "Web Apps",
                text: "I have years of experience developing Web Apps using Javascript, ReactJS and AngularJS and building REST APIs"
            },
            {
                title: "Big Data Pipelines",
                text: "I enjoy developing efficient and scalable pipelines to transform and store data. I am comfortable working with Spark, Hive etc."
                },
            {
                title: "Data Visualization",
                text: "Good data visualizations are essential to story telling. I love developing dynamic data visualizations for responsive web apps"
                },
        ],
        cardData2 : [
            {
                title: "Statistical Models",
                text: "Including but not limited to Regression, Clustering, SVMs and Trees  "
            },
            {
                title: "Deep Learning",
                text: "I find NNs to be a very interesting topic. I have worked with CNNs for image detection"
                },
            {
                title: "Automation",
                text: "It you can repeat it, I can automate it so you can spend time on better things"
                },
        ]
     };
    }
 
  componentDidMount(){
  }

  render() {
    return (
        <Container >
            <Jumbotron style={{backgroundColor:"white", maxHeight:100}} > <h2>What I can build ? </h2></Jumbotron>
        <Row style={{paddingTop:30}}>
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
        <Row>
            {this.state.cardData2.map((x) => {
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

