import React from "react";
import { Col, Row } from 'react-bootstrap';
import './Footer.css';

function Footer() {
    return (
            <Row className="footer">
                <Col lg={2}>
                <div className="share">
                    <a href="https://www.linkedin.com/in/valentin-winnen-239668106/"><i title="Linkedin !" className="nes-icon linkedin"></i></a>
                    <a href="https://github.com/Vawi?tab=repositories"><i title="Github !" className="nes-icon github"></i></a>
                </div>
                </Col>
                <Col lg={8}>
                    <h5>I AM THE FOOTER</h5>
                </Col>
                <Col lg={2}>
                    Contact
                </Col>
            </Row>
    );
}

export default Footer;