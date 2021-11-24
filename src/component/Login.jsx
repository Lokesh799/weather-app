import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

const Login = () => {
	const [showModel, setModel] = useState(false)

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [allEntry, setEntry] = useState("");


	const handleClose = () => setModel(false);
	const handleShow = () => setModel(true);


	const handleSubmit =(event)=> {
		event.preventDefault();
		const newEntry ={username:username , password:password}
		setEntry([...allEntry,newEntry]);
		console.log(allEntry)
	}
  

	return (
		<>
		  <div>
			<Button variant="primary" onClick={() => handleShow(true)}>Login</Button>
			</div>
			<Modal show={showModel} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>LOGIN USER</Modal.Title>
				</Modal.Header>
				<Modal.Body><div className="wrapper">
					<form onSubmit={handleSubmit}>
						<div className="form-group">
							<label>username</label>
							<input value={username}
								type="text" name="username"
								className="form-control"
								onChange={e => setUsername(e.target.value)} />
						</div>
						<div className="form-group">
							<label>Enter password</label>
							<input value={password}
								type="password" name="email"
								className="form-control"
								onChange={e => setPassword(e.target.value)} />

						</div>
						{<div className="form-group">
							<input type="submit" className="btn btn-success btn-block" />
						</div>}
					</form>
				</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary">
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);

}
export default Login