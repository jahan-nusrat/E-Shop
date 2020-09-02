import styled from 'styled-components';
import { CheckoutBtn } from './CheckoutStyle';

export const LoginLogo = styled.img`
	width: 100px;
	object-fit: contain;
	margin: 20px auto;
`;
export const LoginContainer = styled.div`
	width: 300px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid lightgray;
`;
export const LogIn = styled.div`
	background-color: #ffffff;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const LogHead = styled.h1`
	font-weight: 500;
	margin-bottom: 1.2rem;
`;
export const LoginSecondHead = styled.h5`margin-bottom: 5px;`;
export const LoginInput = styled.input`
	height: 30px;
	width: 98%;
	background-color: #ffffff;
	margin-bottom: 10px;
	border: 1.5px solid #000000;
`;
export const LogInPara = styled.p`
	font-size: 12px;
	margin-top: 15px;
`;
export const SignInBtn = styled(CheckoutBtn)`
	width: 100%;
	border-radius: 2px;
	margin-top: 10px;
`;
export const RegisterBtn = styled(CheckoutBtn)`
	width: 100%;
	border-radius: 2px;
	background-color: #F0EEF0;
	border-color: darkgray;
`;
