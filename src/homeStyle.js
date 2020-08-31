import styled from 'styled-components';

export const StyledHome = styled.div `
	max-width: 1250px;
	margin: 0 auto;
`;

export const HomeImg = styled.img `
	width: 100%;
	mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
	z-index: -1;
	margin-bottom: -150px;
`;

export const HomeRow = styled.div `
	display: flex;
	z-index: 1;
	margin: 0 5px;
	justify-content: center;
`;