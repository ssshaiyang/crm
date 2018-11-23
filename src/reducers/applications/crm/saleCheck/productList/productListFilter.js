export default function saleCheckListFilter(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'SALE_CHECK_PRODUCT_LIST_FILTER':
			newState.filterValue = action.payload.filter;
			break;
	}
	return newState;
}                  