import React from 'react';
import { useStateValue } from './StateProvider';
import { CheckoutAd, CheckoutDiv, CheckTitle } from './CheckoutStyle';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout () {
	const [ { basket }, dispatch ] = useStateValue();

	return (
		<CheckoutDiv className="checkout">
			<div className="checkout__left">
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
						<CheckTitle className="checkout__title">Your Shopping Basket</CheckTitle>
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								rating={item.rating}
								price={item.price}
							/>
						))}
					</div>
				)}
			</div>
			{basket.length > 0 && (
				<div className="checkout__right">
					<Subtotal />
				</div>
			)}
		</CheckoutDiv>
	);
}

export default Checkout;
