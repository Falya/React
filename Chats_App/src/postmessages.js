import React from "react";
import { postData } from "./webapi";

export default class PostMessage extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			selValue: "three",
		};
		this.sendData = this.sendData.bind(this);
	}

	componentDidMount(){
		//this.select.selectedIndex = 1;
	}

	sendData(){
		if(this.input.value){
			let msgObj = {
				text: this.input.value,
				roomId: this.props.roomId,
				userId: 7634576
			};
			postData("http://localhost:6060/api/addmessage", JSON.stringify(msgObj))
			.then(resp => {
				this.props.getMsg(this.props.roomId);
				this.input.value = "";
			});
		}
	}

	render(){


		return (
			<div className="col-xs-12">
				<div className="input-group">
					<input
						ref={ inp => this.input = inp } 
						className="form-control" 
						type="text" />
					<span className="input-group-btn">
						<button onClick={this.sendData} className="btn btn-success">Add new message</button>
					</span>
				</div>
				<select value={this.state.selValue} ref={sel => this.select = sel} id="sel">
				  <option value="one">1</option>
				  <option value="two">2</option>
				  <option value="three">3</option>
				</select>
			</div>
			)
	}

}
