import axios from "axios"

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "bf85bf9f-6330-4cb5-9697-a63e52efd906",
	},
});

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance
			.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data);
	},
	follow(userId) {
		return instance
			.post(`follow/${userId}`, {})
			.then(response => response.data);
	},
	unfollow(userId) {
		return instance
			.delete(`follow/${userId}`)
			.then(response => response.data);
	}
}

export const authAPI = {
	auth() {
		return instance
			.get(`auth/me`)
			.then(response => response.data);
	},
	login(email, password, rememberMe = false) {
		return instance
			.post(`auth/login`, { email, password, rememberMe });
	},
	logout() {
		return instance
			.delete(`auth/login`);
	}
}

export const profileAPI = {
	profile(userId) {
		return instance
			.get(`profile/${userId}`)
			.then(response => response.data);
	},
	getStatus(userId) {
		return instance
			.get(`profile/status/${userId}`)
			.then(response => response.data);
	},
	updateStatus(status) {
		return instance
			.put(`profile/status`, { status: status })
			.then(response => response.data);
	}
}