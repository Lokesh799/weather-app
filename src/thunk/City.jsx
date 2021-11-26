import axios from 'axios';
import { showCityWheather } from '../action';

// const API_KEY=a4cc52d312de69912a4a9afc7e264ad2;

export const cityWheatherRequest = (city) => async (dispatch) => {
  try {

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a4cc52d312de69912a4a9afc7e264ad2`).then((response) => {
      console.log(response)
      dispatch(showCityWheather([response.data]));
      // localStorage.setItem("sunrise", JSON.stringify(response.data.sys.sunrise))
      // localStorage.setItem("city", JSON.stringify(response.data.name))
      // localStorage.setItem("windspeed", JSON.stringify(response.data.wind.speed))

      localStorage.setItem('event', JSON.stringify([{
        sunrise: response.data.sys.sunrise,
        name: response.data.name,
        windspeed: response.data.wind.speed,
      }]));

    });
  } catch (err) {
    console.log('err', err);
  }
}
