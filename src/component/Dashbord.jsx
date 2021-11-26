import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { cityWheatherRequest } from "../thunk/City";
import {showCity} from '../action'
import {Button} from "react-bootstrap"

export default function Dashbord(){
	const apiFetch= useSelector(state=>state.getCity.fetchApi)
	const city=useSelector(state=>state.getCity.city)
	const  dispatch=useDispatch()
	console.log(apiFetch)

			 const handleSubmit= async(e)=>   {
        e.preventDefault();
        dispatch(cityWheatherRequest(city))

      };
return(
	<>
	<div>
		<label>City...</label>
		<input 
		type="text" name="city"
		onChange={(e)=>dispatch(showCity(e.target.value))}/>
     <Button variant="secondary" onClick={handleSubmit}>Search</Button>
		 {apiFetch.map((data)=>(
			 <>
			 <div>
			 Country:{data.sys.country}<br/>
			 name:{data.name}<br/>
			 clouds:{data.weather[0].description}
			 </div>
			 </>
		 ))}

		</div>

	</>
)
}