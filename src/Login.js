import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
	LoginLogo,
	LoginContainer,
	LogIn,
	LogHead,
	LoginSecondHead,
	LoginInput,
	LogInPara,
	SignInBtn,
	RegisterBtn
} from './LoginStyle';
import { auth } from './firebase';

function Login () {
	const hist = useHistory();
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const login = (event) => {
		event.preventDefault();
		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				//logged in..redirect to homepage...
				hist.push('/');
			})
			.catch((data) => alert(data.message));
	};

	const register = (event) => {
		event.preventDefault();
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				//create a user and logged in and redirect to homepage...
			})
			.catch((data) => alert(data.message));
	};

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
					<LoginInput value={email} onChange={(event) => setEmail(event.target.value)} type="text" />
					<LoginSecondHead>Password</LoginSecondHead>
					<LoginInput
						value={password}
						onChange={(event) => setPassword(event.target.value)}
						type="password"
					/>
					<SignInBtn onClick={login} type="submit">
						Sign In
					</SignInBtn>
				</form>
				<LogInPara>
					By signing-in you agree to Amazon's conditions of Use & Sale. Please see our Privacy Policy, our
					Cookies Notice and our internet-based Ads Notice.
				</LogInPara>
				<RegisterBtn onClick={register}>Create your Amazon Account</RegisterBtn>
			</LoginContainer>
		</LogIn>
	);
}

export default Login;
