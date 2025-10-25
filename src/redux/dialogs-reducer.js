const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
	dialogs: [
		{ id: 1, name: 'Света', avatar: 'https://i.ibb.co/JR4BGNcY/avatar-1.png' },
		{ id: 2, name: 'Наташа', avatar: 'https://i.ibb.co/wNHzwfh6/avatar-2.png' },
		{ id: 3, name: 'Катя', avatar: 'https://i.ibb.co/sp1zH4vB/avatar-3.png' },
	],
	messages: [
		{ id: 1, message: "Иди в угол" },
		{ id: 2, message: "Посмотри тик ток" },
		{ id: 3, message: "Когда зайдешь?" },
	],
};

const dialogsReducer = (state = initialState, action) => {

	switch (action.type) {
		case SEND_MESSAGE:
			let body = action.newMessageBody;
			return {
				...state,
				messages: [...state.messages, { id: 4, message: body }]
			}
		default:
			return state;
	}

}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default dialogsReducer;