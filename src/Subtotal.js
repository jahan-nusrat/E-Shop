import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { SubtotalDiv, SubtotalGift, SubtotalInput, SubtotalBtn } from './SUbtotalStyle';

function Subtotal () {
	const [ { basket }, dispatch ] = useStateValue();
	const getBasketTotal = (basket) => basket.reduce((acc, curr) => acc + curr.price, 0);
	return (
		<SubtotalDiv className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<React.Fragment>
						<p>
							Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
						</p>
						<br />
						<SubtotalGift className="subtotal__gift">
							<SubtotalInput type="checkbox" /> This order contains a gift
						</SubtotalGift>
					</React.Fragment>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={'text'}
				prefix={'$'}
				thousandSeparator={true}
			/>

			<SubtotalBtn>Proceed to checkout</SubtotalBtn>
		</SubtotalDiv>
	);
}

export default Subtotal;
