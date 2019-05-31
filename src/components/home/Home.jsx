import React from "react";
import './Home.css';
import { Col, Row, Container } from 'react-bootstrap';

function Home() {
    return (
        <Container className="home">
            <Row>
                <Col></Col>
                <Col xs={6}>
                    <h2> Bienvenue sur ce blog ! </h2>
                        <p> Rare site d'article autour du jeu vidéo a proposer une approche très orienté recherche . . . blalbalbla</p>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

export default Home;