import React from 'react';
import { ProductInfo, StyledProduct, ProductPrice, ProductButton, ProductImg, ProductIcon } from './productStyle';

function Product ({ id, title, image, price, rating }) {
	return (
		<StyledProduct className="product">
			<ProductInfo className="product__info">
				<p>{title}</p>
				<ProductPrice className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</ProductPrice>
				<div className="product__rating">
					{Array(rating).fill(<ProductIcon />).map((star) => {
						return star;
					})}
				</div>
			</ProductInfo>
			<ProductImg src={image} alt="" />
			<ProductButton>add to basket</ProductButton>
		</StyledProduct>
	);
}

export default Product;
