import React from 'react';
import { Link } from 'react-router-dom';
import { LoginLogo, LoginContainer } from './LoginStyle';

function Login () {
	return (
		<div className="login">
			<Link to="/">
				<LoginLogo
					className="login__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					alt=""
				/>
			</Link>
			<LoginContainer className="logo__container">
				<h1>Sign-in</h1>
				<form>
					<h5>E-mail</h5>
					<input type="text" />
					<h5>Password</h5>
					<input type="password" />
					<button>Sign In</button>
				</form>
				<p>
					By signing-in you agree to Amazon's conditions of Use & Sale. Please see our Privacy Policy, our
					Cookies Notice and our internet-based Ads Notice.
				</p>
			</LoginContainer>
		</div>
	);
}

export default Login;
