function getUserDatas(id, endpoint = '/') {
	return fetch(`http://localhost:3000/user/${id}${endpoint}`).then((data) => data.json().catch((error) => error));
}

export default getUserDatas;
