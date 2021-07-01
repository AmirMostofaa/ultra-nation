import React from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetail.css';
import {useState, useEffect} from 'react';

const CountryDetail = () => {

    const {cName} = useParams();

    const [country, setCountry] = useState([]);

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${cName}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            
            const newCountry = data[0];
            setCountry(newCountry)
            console.log(newCountry)
        })

    }, []);

    
    //console.log(country[0].name);

    return (
        <div className="cDetail">
            <div className="details">
                <img src={country.flag} alt="" />
                <div className="fDetail">
                    <h1>{country.name}</h1>
                    <p>Capital: {country.capital}</p>
                    <p>Native Name: {country.nativeName}</p>
                    <p>Population: {country.population}</p>
                    <p>Region: {country.region}</p>
                    <p>Alpha 2 Code: {country.alpha2Code}</p>
                    <p>Alpha 3 Code: {country.alpha3Code}</p>
                    <p>Numeric Code: {country.numericCode}</p>

                    <a href="/"><button>Go Back</button></a>
                </div>
            </div>
        </div>
    );
};

export default CountryDetail;