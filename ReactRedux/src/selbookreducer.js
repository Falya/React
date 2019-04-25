let defState = null

export default function(state = defState, action){
	switch (action.type) {
		case "SET_BOOK":
		return action.payload;
	}
	return state
}