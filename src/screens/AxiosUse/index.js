import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { getSuggestedQuery } from '@testing-library/react';
import { Timer10Sharp } from '@material-ui/icons';



const AxiosUse = () => {

    let apiKey = "901d672d14c778eefb41af3fd3871f1f"
const [data, setData] = useState([])
const [inputData, setInputData] = useState([])
const [isloading, setIsloading] = useState(true)

  const geetData = async () =>{
    
      console.log('btn pressed')
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputData}&appid=${apiKey}`)
    const parsed = await  response.json()
    console.log(parsed)
    setData(parsed)
    console.log('PErsonal ',inputData)
 console.log("arry data: ", data)
    
    // const getData =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}`
    // ).then((res)=> console.log(res.jason()));
    setIsloading(false)

    
}

const showData = () => {

}

    return(
        <div>
            <h1 style={{fontSize: '3em'}}> Weather App </h1>  

                <h1>City Name</h1>
            <input type='text' placeholder='Enter City Name'  value={inputData} onChange={e=>{
                setInputData(e.target.value)
                console.log(e.target.value)} }/>
            <button onClick={geetData}>Done</button>
            {!isloading? 
            <div><h3>City Name: {data.name}</h3>
            <h3>Temperature: {Math.floor(data.main.temp - 273.15)}</h3>
                </div>
            : <h1> Searching</h1>
            }
        </div>
    );
}


export default AxiosUse;

