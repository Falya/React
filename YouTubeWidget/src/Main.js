import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import SearchSection from './components/SearchSection';
import Header from './components/Header';
import {getYouTubeData} from './webapi';
import VideoList from './components/VideoList'
import {createBrowserHistory} from 'history';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			queryText: '',
			videoList: {},
			searching: false,
			isLoaded: false,
		};
		this.handleChangeSearchSection = this.handleChangeSearchSection.bind(this);
		this.handleClickSearchSection = this.handleClickSearchSection.bind(this);
	}

	handleChangeSearchSection(e) {
		let queryText = e.target.value;
		this.setState({queryText});
	}

	handleClickSearchSection(e) {
		e.preventDefault();
		console.log('history', createBrowserHistory);

		this.setState({
			searching: true,
			videoList: {},
			isLoaded: false
		});
		getYouTubeData(this.state.queryText)
			.then(response => this.setState({
				videoList: response,
				queryText: '',
				isLoaded: true
			}), err => console.log(err));

	}

	componentWillMount() {

	}

	componentDidMount() {

	}


	render() {
		let path =this.props.location.href.slice(this.props.location.href.lastIndexOf('/') + 1);
		console.log(this.state);

		return (
			<div>
				<Router history={createBrowserHistory}>
					<Header	/>
					<main>
						<SearchSection value={this.state.queryText} onChangeMethod={this.handleChangeSearchSection} onClickMethod={this.handleClickSearchSection}/>
						{path && <VideoList  location={path}/>}
						{this.state.searching && <VideoList  isLoaded={this.state.isLoaded} items={this.state.videoList.items}/>}

					</main>
				</Router>
			</div>
		);
	}
}


export default Main;
