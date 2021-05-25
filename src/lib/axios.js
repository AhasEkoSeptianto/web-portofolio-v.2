import Axios from 'axios';


var post = async (request) => {
	await Axios({
		method: 'post',
		// url: 'http://localhost:3001/api/all-portofolio',
		url:'https://server-webportofolio.herokuapp.com/api/all-portofolio',
		data: request,
		headers: {
			'content-type': 'multipart/form-data',
		},
	}).then(res => {return res} ).catch(err => {return "server error"});
};

var get = async () => {
	var resApi = [];
	// await Axios.get('http://localhost:3001/api/all-portofolio')
	// 	.then(res => resApi = res).catch(err => resApi = err);
	// 	
	await Axios.get('https://server-webportofolio.herokuapp.com/api/all-portofolio')
		.then(res => resApi = res).catch(err => resApi = err);
	return resApi;
}

export { post, get };