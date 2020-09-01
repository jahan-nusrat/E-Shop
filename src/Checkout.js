import React from 'react';
import { useStateValue } from './StateProvider';
import { CheckoutAd } from './CheckoutStyle';
import CheckoutProduct from './CheckoutProduct';

function Checkout () {
	const [ { basket }, dispatch ] = useStateValue();
	console.log(basket);
	return (
		<div className="checkout">
			<CheckoutAd
				className="checkout__ad"
				src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
				alt=""
			/>
			{basket.length === 0 ? (
				<div>
					<h2>Your Shopping Basket is empty</h2>
					<p>
						You have no items in your basket. To buy one or more items, click "Add to basket" next to he
						item.
					</p>
				</div>
			) : (
				<div>
					<h2 className="checkout__title">Your Shopping Basket</h2>
					{basket.map((item) => (
						<CheckoutProduct
							item={item.id}
							key={item.id}
							title={item.title}
							image={item.image}
							rating={item.rating}
							price={item.price}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default Checkout;
