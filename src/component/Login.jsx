import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getUSer, showModel } from '../action';
import { Modal } from 'react-bootstrap';
import { getUser } from '../action';
import { useHistory } from 'react-router';

const Login = () => {
	const dispatch = useDispatch();
	const show = useSelector((state) => state.modelshow.show)
	const user = useSelector((state) => state.getUser.record)
	console.log('api data', user)
	// const [showModel, setModel] = useState(false)

	let history = useHistory();

	const [userDetail, setUserDetail] = useState({
		username: "",
		password: "",
	});

	const { username, password } = userDetail;

	const handleChange = (e) => {
		setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
		console.log(userDetail)
	};

	const loginApi = (username, password) => {
		if (username === userDetail.username && password === userDetail.password) {
			return (
				history.push('/Home')
			)
		} else {
			alert("invalid Field")

		}
	}
	const handleClose = () => {
		dispatch(showModel(false));
	}
	const handleShow = () => {
		dispatch(showModel(true));
	}
	useEffect(() => {
		dispatch(getUSer())

		localStorage.setItem('list', JSON.stringify(userDetail))
	}, [userDetail]);
	return (
		<>
			<div>
				<Button variant="primary" onClick={() => handleShow(true)}>Login</Button>
			</div>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>LOGIN USER</Modal.Title>
				</Modal.Header>
				<Modal.Body><div className="wrapper">
					<form onDoubleClick={loginApi}>
						<div className="form-group">
							<label>username</label>
							<input value={username}
								type="text" name="username"
								className="form-control"
								onChange={handleChange} />
						</div>
						<div className="form-group">
							<label>Enter password</label>
							<input value={password}
								type="password" name="password"
								className="form-control"
								onChange={handleChange} />

						</div>
						{/* {<div className="form-group">
							<input type="submit" className="btn btn-success btn-block" />
						</div>} */}
					</form>
				</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					{
						user.map(user => (
							<>
								<Button type="submit" className="btn-btn-success" onDoubleClick={() => loginApi(user.username, user.password)}>
									login
								</Button>
							</>
						))}
				</Modal.Footer>
			</Modal>
		</>
	);
}
export default Login