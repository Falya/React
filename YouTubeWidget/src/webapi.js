export function getYouTubeData(value) {
	const API_KEY = 'AIzaSyACvkTKBo_DRiv4D3gLHWKUjQmLvXNq4IE';
	let wUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${value}&type=video&maxResults=6`;
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', wUrl, true);
		xhr.responseType = 'json';
		xhr.onload = () => resolve(xhr.response);
		xhr.onerror = () => reject(xhr.status);
		xhr.send();
	});


}