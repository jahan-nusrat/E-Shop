import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import { CheckProduct, CheckImage, CheckoutInfo, CheckoutBtn, CheckoutTitle, ProductIcon } from './CheckoutStyle';

function CheckoutProduct ({ id, title, image, rating, price }) {
	const removeFromBasket = () => {};
	return (
		<CheckProduct className="checkoutProduct">
			<CheckImage src={image} alt="" />
			<CheckoutInfo className="checkoutProduct__info">
				<CheckoutTitle className="checkoutProduct__title">{title}</CheckoutTitle>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating).fill(<ProductIcon />).map((star) => {
						return star;
					})}
				</div>
				<CheckoutBtn onClick={removeFromBasket}>Remove from basket</CheckoutBtn>
			</CheckoutInfo>
		</CheckProduct>
	);
}

export default CheckoutProduct;
