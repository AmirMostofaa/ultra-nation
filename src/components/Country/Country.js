import React from 'react';
import './Country.css';
import {Link } from "react-router-dom";

const Country = (props) => {
    const {name, flag, population, capital, nativeName } = props.country;
    //console.log(props)
    return (
        <div className="singleCountry">
            <div className="country-flag">
                <img src={flag} alt="" />
            </div>
            <div className="country-details">
                <h4>{name}</h4>
                <p>Capital: {capital}</p>
                <p>Native Name: {nativeName}</p>
                <p>Population: {population}</p>
                <button onClick={() => props.handleAddCountry(props.country)}>Add Country</button>
                <Link to={"/country/"+name}><button> More About </button></Link>
                
                
            </div>
            
        </div>
    );
};

export default Country;