import React from 'react';
import {Row} from "react-bootstrap";
import {CountriesList, TopSection} from "../../components";

const Main = () => {
    return (
        <>
            <TopSection />

            <Row as={'main'} className={'g-5'}>
                <CountriesList />
            </Row>
        </>
    );
};

export default Main;
