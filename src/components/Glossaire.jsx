import React from "react";
import "./styles/Glossaire.css";
import { Col, Row, Container } from 'react-bootstrap';

function Glossaire() {
    return (
        <Container className="glossaire">
            <Row className="content">
                <Col></Col>
                <Col xs={6}>
                    <h2> glossaire </h2>
                    
                    <p> Cette section contient un glossaire
                    des termes utilisés et quelques fichier audio
                    pour mettre en avant le contenu de certain article</p>
                    
                </Col>
                <Col></Col>
            </Row>
            <Row className="content">
                <Col>
                </Col>
                <Col>
                    <iframe 
                        title="8-BIT"
                        src="https://www.youtube.com/embed/W0WUEx1kpcE"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>   
                </Col>
                <Col>
                    <p> Voila un extrait de quelques sons 8-bit ! :)</p>
                </Col>
            </Row>
            <Row className="content">
                <Col>
                </Col>
                <Col>
                    <iframe 
                        title="16-BIT"
                        src="https://www.youtube.com/embed/BStjuHfP238"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>   
                </Col>
                <Col>
                    <p> Voila un extrait de quelques sons 16-bit ! :)</p>
                </Col>
            </Row>
            <Row className="content">
                <Col>
                </Col>
                <Col xs={6}>
                <p>
                    Musique dynamique : C'est une musique qui réagi directement aux actions du joueur, par exemple lorsque le joueur
                    décide de jouer d'un instrulment au sein du jeu, ou qu'il donne un coup d'épée, le son qui est executé sera conscidéré comme
                    de la musique dynamique.
                </p>
                <p>
                    Musique adaptative : la musique adaptative fonctionne de manière similaire à la musique dynamique, elle va réagir a ce qu'il se passe au sein du jeu
                    mais cette fois le joueur n'aura pas d'incidence sur son déroulement, par exemple un changement de musique pour le jour et la nuit.
                </p>
                <p>
                    Gameplay : Ce terme désigne la façon dont un jeu se joue, l'ensemble de règles qui vont définir la façon dont le jeu fonctionne.
                </p>
                </Col>
                <Col>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default Glossaire;