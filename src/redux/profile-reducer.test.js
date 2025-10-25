import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
	posts: [
		{ id: 1, message: 'Hi! How are you?', likes: 15 },
		{ id: 2, message: 'It is my first post', likes: 20 },
	],
};

it('length of posts should be increase', () => {
	let action = addPostActionCreator('my test');
	let newState = profileReducer(state, action);
	expect(newState.posts.length).toBe(3);
});

it('message should be correct', () => {
	let action = addPostActionCreator('my test');
	let newState = profileReducer(state, action);
	expect(newState.posts[2].message).toBe('my test');
});

it('likes should be 0', () => {
	let action = addPostActionCreator('my test');
	let newState = profileReducer(state, action);
	expect(newState.posts[2].likes).toBe(0);
});

it('after del length of messages should be decreace', () => {
	let action = deletePost(1);
	let newState = profileReducer(state, action);
	expect(newState.posts.length).toBe(1);
});

it('after del length of messages shouldn\'t be decreace if id is incorrect', () => {
	let action = deletePost(1000);
	let newState = profileReducer(state, action);
	expect(newState.posts.length).toBe(2);
});