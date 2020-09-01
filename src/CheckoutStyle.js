import styled from 'styled-components';
import StarIcon from '@material-ui/icons/Star';

export const CheckoutAd = styled.img`
	width: 100%;
	margin-bottom: 10px;
	object-fit: cover;
`;

export const CheckProduct = styled.div`
	display: flex;
	padding: 1rem;
	align-items: center;
	margin: 0.8rem 0;
`;
export const CheckImage = styled.img`height: 160px;`;
export const CheckoutInfo = styled.div`padding-left: 1rem;`;
export const CheckoutBtn = styled.button`
	background: #f0c14b;
	border: 1px solid #846a29;
	margin-top: 1rem;
	padding: 0.5rem;
	cursor: pointer;
`;
export const CheckoutTitle = styled.p`
	font-size: 1.05rem;
	font-weight: 800;
`;
export const ProductIcon = styled(StarIcon)`
color:#EA912C;
`;

export const CheckoutDiv = styled.div`
	display: flex;
	padding: 20px;
	background-color: #ffffff;
	height: max-content;
`;

export const CheckTitle = styled.h2`
	border-bottom: 1px solid #bbbbbb;
	padding: 10px;
`;
