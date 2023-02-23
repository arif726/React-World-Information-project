import React from 'react';
import './Country.css';

const Country = (props) => {
    console.log(props.country)
    
    const { name, flag, region, capital, population } = props.country;
    return (
        <div className='countryContainer'>
            <h4>{name}</h4> 
            <img src={flag} alt="" />
            <p><small>Region : {region}</small></p>
            <p>Capital : {capital}</p>
            <p>Population : {population}</p>
        </div>
    );
};

export default Country;