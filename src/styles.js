import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

export const StyledImg = styled.img`
	width: 100px;
	margin: 18px 20px 0;
	object-fit: contain;
`;
export const StyledNav = styled.nav`
	background-color: #131921;
	display: flex;
	align-items: center;
	position: sticky;
	top: 0;
	z-index: 100;
`;
export const StyledIcon = styled(SearchIcon)`
    background-color:#cd9042;
    padding:5px;
    height: 22px !important;
`;
export const StyledDiv = styled.div`
	display: flex;
	flex: 1;
`;
export const StyledInput = styled.input`
	height: 12px;
	padding: 10px;
	border: none;
	width: 100%;
`;
export const StyledHeaderNav = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

export const HeaderLink = styled(Link)`
    color:#ffffff;
    text-decoration:none;
`;

export const HeaderOption = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 10px;
`;
export const HeaderOptionOne = styled.span`font-size: 10px;`;

export const HeaderOptionTwo = styled.span`
	font-size: 13px;
	font-weight: 800;
`;

export const HeaderBasket = styled.div`
	display: flex;
	align-items: center;
`;

export const HeaderBasketCount = styled(HeaderOptionTwo)`
	margin: 0 10px;
	padding-top:7px;
`;
