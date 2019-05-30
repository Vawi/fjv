import React from "react";
import { Col, Row } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="footer">
            <Row>
                <Col lg={2}>
                <div className="share">
                    <a href="https://www.linkedin.com/in/valentin-winnen-239668106/"><i title="Linkedin !" className="nes-icon linkedin"></i></a>
                    <a href="https://github.com/Vawi?tab=repositories"><i title="Github !" className="nes-icon github"></i></a>
                </div>
                </Col>
                <Col lg={8}>
                </Col>
                <Col lg={2}>
                </Col>
            </Row>
        </footer>
    );
}

export default Footer;