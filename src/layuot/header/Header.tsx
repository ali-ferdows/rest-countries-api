import React from 'react';
import {Col, Row} from "react-bootstrap";

const Header = () => {
    return (
        <Row as={'header'}>
            <Col sm={6}>
                title
            </Col>
            <Col sm={6}>
                light and dark mode
            </Col>
        </Row>
    );
};

export default Header;
