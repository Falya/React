import React from "react";
import SelBook from "./selbook";
import AllBooks from "./allbooks";

export default class Main extends React.Component{

	constructor(props){
		super(props);
		this.state = {
		};

	}

	render(){

		return (
			<div>
				<SelBook />
				<AllBooks />
			</div>);
	}

};
