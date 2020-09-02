import React from 'react';
import { Link } from 'react-router-dom';
import { LoginLogo, LoginContainer, LogIn, LogHead, LoginSecondHead, LoginInput } from './LoginStyle';

function Login () {
	return (
		<LogIn className="login">
			<Link to="/">
				<LoginLogo
					className="login__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
					alt=""
				/>
			</Link>
			<LoginContainer className="logo__container">
				<LogHead>Sign-in</LogHead>
				<form>
					<LoginSecondHead>E-mail</LoginSecondHead>
					<LoginInput type="text" />
					<LoginSecondHead>Password</LoginSecondHead>
					<LoginInput type="password" />
					<button>Sign In</button>
				</form>
				<p>
					By signing-in you agree to Amazon's conditions of Use & Sale. Please see our Privacy Policy, our
					Cookies Notice and our internet-based Ads Notice.
				</p>
				<button>Create your Amazon Account</button>
			</LoginContainer>
		</LogIn>
	);
}

export default Login;
