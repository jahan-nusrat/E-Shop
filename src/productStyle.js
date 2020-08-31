import styled from 'styled-components';

export const StyledProduct = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ProductImg = styled.img`
	width: 100%;
	max-height: 200px;
	object-fit: contain;
	margin-bottom: 15px;
`;

export const ProductPrice = styled.div`margin-top: 5px;`;
export const ProductInfo = styled.div`
	height: 100px;
	margin-bottom: 15px;
`;

export const ProductButton = styled.button`background-color: #f0c14b;`;
