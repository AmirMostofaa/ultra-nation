import React from 'react';
import './Nation.css';
import Country from '../Country/Country';
import {useState, useEffect} from 'react';

const Nation = () => {
    const [countries, setCountries] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
        
    }, [])

    const handleAddCountry = (country) => {
        //console.log('Country Added!')
        const newCart = [...cart, country];
        setCart(newCart)
    }

    const total = cart.reduce((total, country) => total + country.population, 0)


    return (
        <div className="nation">
            
            <div className="head">
                <div className="nation-head">
                    <h2>🚩Ultra Nation</h2>
                    <h3>Country Loaded: {countries.length}</h3>
                </div>
                <div className="nation-added">
                    <h3>Country Added: {cart.length}</h3>
                    <p>Total Population:</p>
                    <p>{total}</p>
                </div>
            </div>

            <div className="countries">
                {
                    countries.map(country => 
                    <Country 
                    country={country}
                    handleAddCountry={handleAddCountry}
                    ></Country>)
                }
            </div>

        </div>
    );
};

export default Nation;