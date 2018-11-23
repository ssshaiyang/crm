export default function redeceName(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'ADD_MODAL_SALESUPPORT_FORM_GET_DATA':
			newState.data = action.payload.data;
			break;
		
	}
	return newState;
}