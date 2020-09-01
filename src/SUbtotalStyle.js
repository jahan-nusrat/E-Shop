import styled from 'styled-components';
import { CheckoutBtn } from './CheckoutStyle';

export const SubtotalDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 300px;
	height: 100px;
	padding: 20px;
	background-color: #f3f3f3;
	border: 1px solid #dddddd;
	border-radius: 3px;
`;
export const SubtotalGift = styled.small`
	display: flex;
	align-items: center;
`;

export const SubtotalInput = styled.input`margin-right: 5px;`;
export const SubtotalBtn = styled(CheckoutBtn)``;
