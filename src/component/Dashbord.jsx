import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { cityWheatherRequest } from "../thunk/City";

export default function dashbord(){
	const apiFetch= useSelector(state=>state.getCity.fetchApi)
	const city=useSelector(state=>state.getCity.city)
}