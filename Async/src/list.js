import React from "react";
import Item from "./item";
import uuid from "uuid/v4";
import { getData } from "./webapi";

export default class List extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			arr: [],
			text: "",
			sort: "nosort",
			fltTerm: "",
			weather: null,
		};
		this.getText = this.getText.bind(this);
		this.addNote = this.addNote.bind(this);
		this.removeNote = this.removeNote.bind(this);
		this.setSort = this.setSort.bind(this);
		this.setFilter = this.setFilter.bind(this);
	}

	componentDidMount(){
		// this.getWeather();
		// getWeather.call(this);
		getData("http://api.openweathermap.org/data/2.5/weather?q=Minsk,by&units=metric&APPID=875012f111377f30bfe2073d73e59ee8")
		.then(response => this.setState({weather: response}), err => console.log(err));

	}

	// getWeather(){
		
	// }

	removeNote(id){
		let arrCopy = [...this.state.arr];
		//arrCopy.splice(index, 1);
		arrCopy = arrCopy.filter( item => item.id !== id )
		this.setState({arr: arrCopy});
	}

	getText(e){
		///this.state.text = "hi"; // Wrong!!!
		this.setState({text: e.target.value});
	}

	addNote(){
		let arrCopy = [...this.state.arr];
		let noteObj = {
			text: this.state.text,
			id: uuid(),
		}
		arrCopy.push(noteObj);
		this.setState({arr: arrCopy, text: ""}, () => console.log(this.state));
	}

	setSort(e){
		this.setState({sort: e.target.value});
	}

	setFilter(e){
		this.setState({fltTerm: e.target.value});
	}

	render(){

		let arrCopy = [...this.state.arr];

		if(this.state.sort == "up"){
			arrCopy.sort( (a,b) => {
				if(a.text > b.text){
					return 1
				}
				else {
					return -1
				}
			})
		}
		else if(this.state.sort == "down"){
			arrCopy.sort( (a,b) => {
				if(a.text > b.text){
					return -1
				}
				else {
					return 1
				}
			})
		}

		arrCopy = arrCopy.filter( item => {
			return item.text.toLowerCase().indexOf(this.state.fltTerm.toLowerCase()) == 0
		});

		let items = arrCopy.map( (note, index) => (
			<Item 
				removeNote={this.removeNote}
				itemText={note.text} 
				itemIndex={note.id}
				key={note.id} 
			/>));

		return (
			<ul className="list-group">
				<li>
					<div className="form-group">
						<select 
							className="form-control"
							onChange={this.setSort}
						>
							<option value="nosort">No sort</option>
							<option value="up">A-Z</option>
							<option value="down">Z-A</option>
						</select>
						<input
							onChange={this.setFilter} 
							className="form-control" 
							type="text" />
					</div>
				</li>
				{items}
				<li className="list-group-item">
					<div className="input-group">
						<input
							value={this.state.text} 
							className="form-control" 
							type="text" 
							placeholder="Enter note text"
							onChange={this.getText}
						 />
						<span className="input-group-btn">
							<button 
								className="btn btn-success" 
								onClick={this.addNote}>Clunk</button>
						</span>
					</div>				
				</li>
				<li className="list-group-item">
				{this.state.weather && <h4 className="list-group-item-heading">Current weather is: {this.state.weather.main.temp}</h4>}
				</li>
			</ul>
		);
	}

};
