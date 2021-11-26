import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { cityWheatherRequest } from "../thunk/City";
import { showCity } from '../action'
import { Button } from "react-bootstrap"

export default function Dashbord() {
	const apiFetch = useSelector(state => state.getCity.fetchApi)
	const city = useSelector(state => state.getCity.city)
	const dispatch = useDispatch()
	// console.log(apiFetch)

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(cityWheatherRequest(city))

	};
	return (
		<>
			<div>
				<div>
					<h1>welcome to Dashbhord</h1>
				</div>
				<label>City...</label>
				<input
					type="text" name="city"
					onChange={(e) => dispatch(showCity(e.target.value))} />
				<Button variant="secondary" onClick={handleSubmit}>Search</Button>
				{apiFetch.map((data) => (
					<>
						<div>
							<ul className="list-group">
								<li class="list-group-item">wheather Detail...........</li>

								<li class="list-group-item list-group-item-primary">
									Country: {data.sys.country}<br />
								</li>
								<li class="list-group-item list-group-item-warning">
									Sunrise:  {data.sys.sunrise}<br />
								</li>
								<li class="list-group-item list-group-item-light">
									name:  {data.name}<br />
								</li>
								<li class="list-group-item list-group-item-success">
									windSpeed: {data.wind.speed}<br />
								</li>
								<li class="list-group-item list-group-item-primary">
									clouds: {data.weather[0].description}
								</li>
							</ul>
						</div>
					</>
				))}


			</div>

		</>
	)
}