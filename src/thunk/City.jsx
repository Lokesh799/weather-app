import axios from 'axios';
import {showCityWheather } from '../action';

export const cityWheatherRequest = () => async (dispatch) => {
  try{
       const API_KEY=f692ee3bb116b9ed27b8079d89651;
	    axios.get(`api.openweathermap.org/data/2.5/weather?q=${showCity}&appid=${API_KEY}`).then((response) => {
          console.log(response)
        dispatch(showCityWheather(response.data));    
        });
    }catch(err){
      console.log('err', err);
  }
}
