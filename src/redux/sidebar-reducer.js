const initialState = {
	friends: [
		{ id: 1, name: 'Света', avatar: 'https://i.ibb.co/JR4BGNcY/avatar-1.png' },
		{ id: 2, name: 'Наташа', avatar: 'https://i.ibb.co/wNHzwfh6/avatar-2.png' },
		{ id: 3, name: 'Катя', avatar: 'https://i.ibb.co/sp1zH4vB/avatar-3.png' },
	],
	navItems: [
        { path: "/profile", label: "Profile" },
        { path: "/dialogs", label: "Messages" },
        { path: "/news", label: "News" },
        { path: "/music", label: "Music" },
        { path: "/settings", label: "Settings" },
        { path: "/users", label: "Find users" },
    ],
};

const sidebarReducer = (state = initialState, action) => {
	return state;
}

export default sidebarReducer;