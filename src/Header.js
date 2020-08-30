import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

const StyledImg = styled.img`
	width: 100px;
	margin: 18px 20px 0;
	object-fit: contain;
`;
const StyledNav = styled.nav`
	background-color: #131921;
	display: flex;
	align-items: center;
`;
const StyledIcon = styled(SearchIcon)`
    background-color:#cd9042;
    padding:5px;
    height: 22px !important;
`;
const StyledDiv = styled.div`
	display: flex;
	flex: 1;
`;
const StyledInput = styled.input`
	height: 12px;
	padding: 10px;
	border: none;
	width: 100%;
`;
const StyledHeaderNav = styled.div`display: flex;`;

function Header () {
	return (
		<StyledNav className="header">
			<Link to="/">
				<StyledImg className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
			</Link>
			<StyledDiv className="header__search">
				<StyledInput className="header__searchInput" type="text" />
				<StyledIcon className="header__searchIcon" />
			</StyledDiv>
			<StyledHeaderNav className="header__nav">
				{/* link 1 */}
				<Link to="/login" className="header__link">
					<div className="header__option">
						<span>Hello</span>
						<span>Sign In</span>
					</div>
				</Link>
				{/* link 2 */}
				<Link to="/login" className="header__link">
					<div className="header__option">
						<span>Returns</span>
						<span>& Orders</span>
					</div>
				</Link>
				{/* link 3 */}
				<Link to="/login" className="header__link">
					<div className="header__option">
						<span>Your</span>
						<span>Prime</span>
					</div>
				</Link>
			</StyledHeaderNav>
		</StyledNav>
	);
}

export default Header;
