import React from 'react';
import {Col, Row} from "react-bootstrap";

const TopSection = () => {
    return (
        <Row as={'section'}>
            <Col sm={6}>
                search input
            </Col>
            <Col sm={6}>
                filter
            </Col>
        </Row>
    );
};

export default TopSection;
