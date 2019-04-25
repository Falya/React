import React from "react";

export default class Rooms extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	render(){

		let rooms;

		if(Array.isArray(this.props.rooms) && this.props.rooms.length){
			rooms = this.props.rooms.map( room => (
				<li 
					onClick={() => this.props.getMsg(room.id)}
					className="list-group-item" 
					key={room.id}>
					{room.name}
				</li>) 
			);
		}

		return (
			<div className="col-xs-12">
				<ul className="list-group">
					<li className="list-group-item">
						<h3 className="list-group-item-heading">Rooms</h3>
					</li>
					{rooms}
				</ul>
				
			</div>
			)
	}

}
