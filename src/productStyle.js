import styled from 'styled-components';
import StarIcon from '@material-ui/icons/Star';

export const StyledProduct = styled.div`
	display: flex;
	flex-direction: column;
	max-height: 400px;
	min-width: 100x;
	background-color: #ffffff;
	margin: 10px;
	z-index: 1;
	padding: 20px;
	align-items: center;
	justify-content: flex-end;
`;

export const ProductIcon = styled(StarIcon)`
color: yellow;
`;

export const ProductImg = styled.img`
	width: 100%;
	max-height: 200px;
	object-fit: contain;
	margin-bottom: 15px;
`;

export const ProductPrice = styled.p`margin-top: 5px;`;
export const ProductInfo = styled.div`
	height: 100px;
	margin-bottom: 15px;
`;

export const ProductButton = styled.button`
	background-color: #f0c14b;
	border: 1px solid;
	border-color: #846a29;
`;

/* import { injectGlobal } from 'styled-components';

injectGlobal`
  html {
    height: 100%;
    width: 100%;
  } */
