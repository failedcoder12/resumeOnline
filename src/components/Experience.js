import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Badge } from 'react-bootstrap';
import { expData } from '../data/data'

const Experience = () => {
    return (
        <div className="mt-5">
            <Container style={{textAlign: "center"}}>
                <p style={{fontSize: "30px"}}>Experience</p>
            </Container>
                    
            <Row className="mx-3"> 
            <Col md={2}></Col>
            <Col md={8} style={{textAlign: "center", borderTopStyle: "dotted" }}>
            </Col>
            <Col md={2}></Col>
            </Row>

            {
                expData.map(exp => (
                    <Row className="mx-3 mt-3"> 
                    <Col md={2}></Col>
                    <Col md={8} style={{textAlign: "center"}}>
                        <Container className="mt-3">
                            <Row>
                                <Col md={4}>
                                    <h3>{exp.name}</h3>   
                                    <h5>{exp.post}</h5>
                                    <p><i>{exp.time}</i></p>
                                </Col>
                                <Col md={8} style={{textAlign: "left"}}>
                                    {exp.work}
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col md={2}></Col>
                    </Row>
                ))
            }
    
        </div>
    );
};

export default Experience;