import React from "react";
import "./Glossaire.css";
import { Col, Row, Container } from 'react-bootstrap';

function Glossaire() {
    return (
        <Container className="glossaire">
            <Row className="content">
                <Col></Col>
                <Col xs={6}>
                    <h2> glossaire </h2>
                    <div class="nes-container">
                        <p> Cette section contient un glossaire
                        des termes utilisés et quelques fichier audio
                        pour mettre en avant le contenu de certain article</p>
                    </div>
                </Col>
                <Col></Col>
            </Row>
            <Row className="content">
                <Col>
                </Col>
                <Col>
                    <iframe width="560" height="315"
                        title="8-BIT"
                        src="https://www.youtube.com/embed/W0WUEx1kpcE"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>   
                </Col>
                <Col>
                    <p> Voila un extrait de quelques sons 8-bit ! :)</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Glossaire;