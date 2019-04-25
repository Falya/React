import React, {Component} from 'react';

class ViewVideo extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		console.log("View", this.props);
		let {videoId} = this.props;
		let url = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
		return (
			<div className='overlay'>
				<iframe width="760" height="428" src={url} frameBorder="0"
						allow="autoplay" allowFullScreen>
				</iframe>
			</div>
		);
	}
}



export default ViewVideo;
