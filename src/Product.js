import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import { StyledProduct } from './productStyle';

function Product ({ id, title, image, price, rating }) {
	return (
		<StyledProduct className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating).fill(<StarIcon />).map((star) => {
						return star;
					})}
				</div>
			</div>

			<button>add to basket</button>
		</StyledProduct>
	);
}

export default Product;
