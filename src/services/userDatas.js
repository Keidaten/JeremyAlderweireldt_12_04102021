/**
 * Get datas from API by ID/endpoint
 * @param {Number} id user ID
 * @param {String} endpoint API endpoint where we need datas
 * @returns {Promise}
 */
function getUserDatas(id, endpoint = '/') {
	return fetch(`http://localhost:3000/user/${id}${endpoint}`).then((data) => data.json().catch((error) => error));
}

export default getUserDatas;
