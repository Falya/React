// Action creator

export function setBook(bookObj){

	//// Some logic can be placed here

	return { // Action
		type: "SET_BOOK",
		payload: bookObj,
	}
}