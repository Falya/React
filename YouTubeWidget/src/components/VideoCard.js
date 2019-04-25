import React, {Component} from 'react';


export default class VideoCard extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		let {item} = this.props;
		console.log("+++", item);

		return (
			<div>
				<figure>
				<img src={item.snippet.thumbnails.high.url} alt="" />
				<figcaption>{item.snippet.title}</figcaption>
				</figure>
			</div>
		);
	}
}


