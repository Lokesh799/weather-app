import React from "react";
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

export default function Home() {
	return (
		<>
			<h1>Wheather App</h1>
			<div>
				<Link to="/Dashbord" >Dashbord</Link>
			</div>
			<div >
				<Link to="/History" >History</Link>
			</div>

		</>
	)
}