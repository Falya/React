import React, {Component} from 'react';
import VideoCard from './VideoCard';
import PreLoader from './Preloader';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import ViewVideo from './ViewVideo';

class VideoList extends Component {
	constructor(props) {
		super(props);

		this.state ={
			isLoaded: false,
		};

		this.makeLinks = this.makeLinks.bind(this);
		this.makeRouts = this.makeRouts.bind(this);
	}

	makeLinks() {
		console.log('Map');
		let {items} = this.props,
			mapedItems;
		if (items) {
			mapedItems = [...items].map(item => <Link className="item fadein" to={`/${item.id.videoId}`}><VideoCard item={item} key={item.id.videoId}/></Link>);
			mapedItems = <div className='result-list'>{mapedItems}</div>;
			return mapedItems;
		}
	}
	makeRouts() {
		let {items} = this.props,
			mapedItems;
		if (items) {
			mapedItems = [...items].map(item => <Route path={`/${item.id.videoId}`} render={() => {
				return <ViewVideo videoId={item.id.videoId}/>
			}}/>);
			mapedItems = <div>{mapedItems}</div>;
			return mapedItems;
		}
	}

	componentWillReceiveProps(nextProps){

		let {isLoaded} = this.props;
		console.log('---', isLoaded);
		console.log('---', nextProps.isLoaded);
		(isLoaded != nextProps.isLoaded) && this.setState({isLoaded: nextProps.isLoaded});
	}
	render() {

		console.log("isLoaded", this.state.isLoaded);
		console.log("location", this.props.location);
		return (

				<section>
					{this.props.location && <Route path={`/${this.props.location}`} render={() =>
						<ViewVideo videoId={this.props.location}/>
					}/>}
					{this.state.isLoaded ? <Route exact path='/' component={this.makeLinks}/> : <Route exact path='/' component={PreLoader}/>}
						{this.state.isLoaded && this.makeRouts()}

				</section>

		);
	}
}


export default VideoList;
