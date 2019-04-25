import React from "react";

export default class Messages extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	render(){

		let messages;

		if(Array.isArray(this.props.msg) && this.props.msg.length){
			messages = this.props.msg.map( (msg, index) => (<li className="list-group-item" key={index}>{msg.text}</li>) )
		}

		return (
			<div className="col-xs-12">
				<ul className="list-group">
					<li className="list-group-item">
						<h3 className="list-group-item-heading">Messages in room</h3>
					</li>
					{messages}
				</ul>
				
			</div>
			)
	}

}
