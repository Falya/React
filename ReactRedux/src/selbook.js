import React from "react";
import { connect } from "react-redux";


class SelBook extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			
		};
	}


	render(){

		
		let selBook = this.props.selBook ? this.props.selBook.title : null;

		return (
				<ul>
					<li>
						<h4>Selected book is</h4>
					</li>
					{selBook}
				</ul>
			)
	}

};

function mapStateToProps(state){
	return {selBook: state.selBook}
};

export default connect(mapStateToProps)(SelBook);







