export const initialState = {
	basket : [],
	user   : null
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_TO_BASKET':
			return {
				...state,
				basket : [ ...state.basket, action.item ]
			};
			break;
		case 'REMOVE_FROM_BASKET':
			let newBasket = [ ...state.basket ];
			let index = newBasket.filter((pd) => pd.id !== action.item.id);
			/* let index = newBasket.findIndex((basketItem) => basketItem.id !== action.item.id);
			if (index >= 0) {
				newBasket.splice(index, 1);
			}
			else {
				console.warn('cant find');
			} */
			return {
				...state,
				/* basket: newBasket, */
				basket : index
			};
			break;
		default:
			return state;
	}
};

export default reducer;
