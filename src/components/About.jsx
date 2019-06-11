import React from "react";
import "./styles/About.css";
import { Col, Row, Container } from 'react-bootstrap';


function About(props) {
    return (
        <Container className="about">
            <Row className="about-content">
                <Col></Col>
                <Col xs={12}>
                    <h2> Qui suis-je ? </h2>
                        <p> Cette section contient un glossaire
                        des termes utilisés et quelques fichier audio
                        pour mettre en avant le contenu de certain article</p>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

  
export default About;