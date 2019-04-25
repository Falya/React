import React from "react";
import Rooms from "./rooms";
import Messages from "./messages";
import PostMessage from "./postmessages";
import { getData } from "./webapi";

export default class Main extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			rooms: [],
			msg: [],
			roomId: null,
		};
		this.getMsg = this.getMsg.bind(this);
	}

	componentDidMount(){
		getData(`http://localhost:6060/api/`)
		.then( resp => this.setState({rooms: resp.chats}, () => console.log(this.state)) );

	}

	getMsg(roomId){
		getData(`http://localhost:6060/api/${roomId}/messages`)
		.then( resp => this.setState({msg: resp, roomId: roomId}) )
	}


	render(){

		return (
			<div className="container">
				<div className="col-xs-12 col-md-6">
					<Rooms getMsg={this.getMsg} rooms={this.state.rooms} />
					{this.state.roomId && <Messages msg={this.state.msg} />}
					{this.state.roomId && <PostMessage getMsg={this.getMsg} roomId={this.state.roomId} />}
				</div>
			</div>
			
		);
	}

};
