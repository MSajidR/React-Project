import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'


const WeatherApi = () => {
const apiKey = "901d672d14c778eefb41af3fd3871f1f"

const [posts, setPosts] = React.useState([]);


axios.get(`https:/api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}`)
      .then(res => {
        const persons = res.data;
      }).then(e => res.jason())
      console.log(e)

// axios.get(`https:api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}`)

// // const CityName = "London"

// .then(res => {
//     const ApiData = res.data;
//     setPosts({ ApiData });
//     console.log(posts)
//   })
    // React.useEffect(() => {
    //     axios.get(`https:api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}`)
    //       .then(res => {
    //         const newPosts = res
    //           .map(obj => obj.data);
      
    //         setPosts(newPosts);
    //       });
    //   }, []);

    return(
        <div>
        <h1>Axios Try</h1>
      
      </div>

    );
}


export default WeatherApi;