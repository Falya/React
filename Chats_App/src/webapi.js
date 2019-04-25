export function getWeather(){
	let req = new XMLHttpRequest();
	req.onload = () => this.setState({weather: req.response});
	req.responseType = "json";
	req.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Minsk,by&units=metric&APPID=875012f111377f30bfe2073d73e59ee8");
	req.send();
};

export function getData(url){
	return new Promise((resolve, reject) => {
		let req = new XMLHttpRequest();
		req.onload = () => resolve(req.response);
		req.onerror = () => reject(req.status);
		req.responseType = "json";
		req.open("GET", url);
		req.send();
	});
};

export function postData(url, data){
	return new Promise((resolve, reject) => {
		let req = new XMLHttpRequest();
		req.onload = () => resolve(req.response);
		req.onerror = () => reject(req.status);
		req.responseType = "json";
		req.open("POST", url);
		req.setRequestHeader("Content-Type","application/json");
		req.send(data);
	});
};

