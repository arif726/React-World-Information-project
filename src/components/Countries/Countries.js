import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';


const Countries = () => {
    const [countries, setCountries] = useState([])

  useEffect(() => {

    fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
    
  }, [])
    
    return (
        
        <div>
            <h2>Countries : {countries.length}</h2>
            <div className='countriesContainer'>
                {
                    countries.map(country => <Country country={country} />)
                }
            </div>
        </div>
    );
};

export default Countries;