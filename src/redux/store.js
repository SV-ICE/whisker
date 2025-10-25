import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Hi! How are you?', likes: 15 },
				{ id: 2, message: 'It is my first post', likes: 20 },
			],
			newPostText: 'new post text',
		},
		dialogPage: {
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
			newMessageBody: ''
		},
		sidebar: {
			friends: [
				{ id: 1, name: 'Света', avatar: 'https://i.ibb.co/JR4BGNcY/avatar-1.png' },
				{ id: 2, name: 'Наташа', avatar: 'https://i.ibb.co/wNHzwfh6/avatar-2.png' },
				{ id: 3, name: 'Катя', avatar: 'https://i.ibb.co/sp1zH4vB/avatar-3.png' },
			],
		}
	},
	_callSubscriber() {
		console.log('state changed');
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);
		
		this._callSubscriber(this._state);
	},
}


export default store;
window.store = store;