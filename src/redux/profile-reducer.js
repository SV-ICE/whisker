import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

const inialState = {
	posts: [
		{ id: 1, message: 'Hi! How are you?', likes: 15 },
		{ id: 2, message: 'It is my first post', likes: 20 },
	],
	profile: null,
	status: '',
};

const profileReducer = (state = inialState, action) => {

	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 5,
				message: action.newPostText,
				likes: 0,
			};
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: '',
			};
		case SET_USER_PROFILE:
			return { ...state, profile: action.profile }
		case SET_STATUS:
			return { ...state, status: action.status }
		case DELETE_POST:
			return { ...state, posts: state.posts.filter(p => p.id !== action.postId) }
		default:
			return state;
	}
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });

export const getProfile = (userId) => async (dispatch) => {
	const data = await profileAPI.profile(userId)
	dispatch(setUserProfile(data));
}

export const getStatus = (userId) => async (dispatch) => {
	const data = await profileAPI.getStatus(userId)
	dispatch(setStatus(data));
}

export const updateStatus = (status) => async (dispatch) => {
	const data = await profileAPI.updateStatus(status)
	if (data.resultCode === 0) {
		dispatch(setStatus(status));
	};
}

export default profileReducer;