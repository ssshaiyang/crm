export default function redeceName(state, action) {

	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'SALE_CHECK_PRODUCT':
			newState.data = action.payload.data;
			break;
	}
	return newState;
}           