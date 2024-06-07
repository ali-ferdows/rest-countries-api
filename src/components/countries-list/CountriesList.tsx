import React, {useContext} from 'react';
import styles from './CountriesList.module.css';
import {Col} from "react-bootstrap";
import CountriesAPI from "../../context/CountriesAPI";
import {NavLink} from "react-router-dom";
import Loading from "../Loading/Loading";

const CountriesList = () => {

    const { data, loading } = useContext(CountriesAPI);

    if (loading) {
        return (
            <Loading />
        );
    }

    data.map(item => {
        console.log(item.population);
    })

    return (
        <>
            {data.length > 0 && data.map(item => (
                <Col sm={3} as={'section'} key={item.name['common']}>
                    <div className={`${styles['contents_card']}`}>
                        <NavLink to={`/country/${item.name['common']}`} >
                            <img src={item.flags['svg']} alt={item.flags['alt']} />
                        </NavLink>
                        <div className={styles['content']}>
                            <NavLink to={`/country/${item.name['common']}`} >
                                <h3 className={styles['content_title']}>{item.name['common']}</h3>
                            </NavLink>
                            <div className={styles['content_population']}>
                                <span className={styles['content_population_title']}>Population: </span>
                                <span>{item.population}</span>
                            </div>
                            <div className={styles['content_region']}>
                                <span className={styles['content_region_title']}>Region: </span>
                                <span>{item.region}</span>
                            </div>
                            <div className={styles['content_capital']}>
                                <span className={styles['content_capital_title']}>Capital: </span>
                                <span>{item.capital}</span>
                            </div>
                        </div>
                    </div>
                </Col>
            ))}
        </>
    );
};

export default CountriesList;
