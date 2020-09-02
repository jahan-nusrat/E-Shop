import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import {
	StyledDiv,
	StyledHeaderNav,
	StyledIcon,
	StyledImg,
	StyledInput,
	StyledNav,
	HeaderLink,
	HeaderOption,
	HeaderOptionOne,
	HeaderOptionTwo,
	HeaderBasket,
	HeaderBasketCount
} from './styles';
import { auth } from './firebase';

function Header () {
	const [ { basket, user } ] = useStateValue();
	const login = () => {
		if (user) {
			auth.signOut();
		}
	};

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
				<HeaderLink to={!user && '/login'} className="header__link">
					<HeaderOption onClick={login} className="header__option">
						<HeaderOptionOne className="header__optionOne">Hello </HeaderOptionOne>
						<HeaderOptionTwo className="header__optionTwo">{user ? 'Sign Out' : 'Sign In'}</HeaderOptionTwo>
					</HeaderOption>
				</HeaderLink>

				<HeaderLink to="/" className="header__link">
					<HeaderOption className="header__option">
						<HeaderOptionOne className="header__optionOne">Returns</HeaderOptionOne>
						<HeaderOptionTwo className="header__optionTwo">& Orders</HeaderOptionTwo>
					</HeaderOption>
				</HeaderLink>

				<HeaderLink to="/" className="header__link">
					<HeaderOption className="header__option">
						<HeaderOptionOne className="header__optionOne">Your</HeaderOptionOne>
						<HeaderOptionTwo className="header__optionTwo">Prime</HeaderOptionTwo>
					</HeaderOption>
				</HeaderLink>

				<HeaderLink to="/checkout" className="header__link">
					<HeaderBasket className="header__optionBasket">
						<ShoppingBasketIcon />
						<HeaderBasketCount>{basket.length}</HeaderBasketCount>
					</HeaderBasket>
				</HeaderLink>
			</StyledHeaderNav>
		</StyledNav>
	);
}

export default Header;
