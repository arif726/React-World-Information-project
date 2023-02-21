import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Countries/>
      <Country/>
    </div>
  );
}

function Countries() {
  const [countries, setCountries] = useState([])

  useEffect(() => {

    fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
    
  },[])
  
  return (
    <div>
      <h1>Welcome</h1>
      <p>Countries : {countries.length}</p>
      {
        countries.map(country=><Country name = {country.name} capital ={country.capital}></Country>)
      }
    </div>
  )
}

function Country(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Capital : {props.capital}</p>
    </div>
  )
}

export default App;
