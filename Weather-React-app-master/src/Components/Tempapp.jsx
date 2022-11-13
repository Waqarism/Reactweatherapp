import React, { useEffect, useState } from 'react';
import './Css/Style.css';

const Tempapp = () => {

    const[city, setCity] = useState(null);
    const [search, setSearch] = useState("Ballari");

    useEffect( () =>{
        const fetchApi = async () => {
            const URL = (`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=0f37d3612f812701a1f6fd649bcdb7f9`);
            const response = await fetch(URL);
            const resJSON = await response.json();
            setCity(resJSON.main);
        }
        fetchApi();
    }, [search])
  return (
   <>
   <div className='box'>
       <div className='inputData'>
            <input type="search" className='inputField' value={search} 
            onChange={(e)=> {setSearch(e.target.value)} }/>
       </div>
   
   {
       !city ? (
           <p className='errorMsg'> No Data Found </p>
       ) : (
        <div>
        <div className='info'>
            <i className='fa-solid fa-cloud-sun fa-3x'></i>
        <h2 className='location'>
        <i className="fa-solid fa-street-view"></i>{search}
        </h2>
        <h1 className='temp'>
             {city.temp}℃ 
        </h1>
        <h3 className='tempmin_max'> Min : {city.temp_min}℃ | Max: {city.temp_max}℃</h3>
    </div>
    <div className="wave -one"></div>
    <div className="wave -two"></div>
    <div className="wave -three"></div>
    </div>
       )
   }
   </div>
   </>
  )
}

export default Tempapp;
