import axios from 'axios';
import React from 'react'
const options = {
  method: 'GET',
  url: 'https://starbucks-store-data.p.rapidapi.com/uk',
  headers: {
    'X-RapidAPI-Key': '95df2953ffmsh4e0aa6f0934eecbp1c1b79jsna0644eb42e2d',
    'X-RapidAPI-Host': 'starbucks-store-data.p.rapidapi.com'
  }
};


const App = () => {
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  return (
    <h1 className='app'>App</h1>
  )
}

export default App