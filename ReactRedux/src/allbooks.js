import React from "react";
import { connect } from "react-redux";
import { setBook } from "./actions";

class AllBooks extends React.Component {

	constructor(props){
		super(props);
		this.state = {
		};
	}


	render(){

		let bookList;

		if(this.props.allBooks) {
			bookList = this.props.allBooks.map( item => (
				<li key={item.title}
					onClick={ () => this.props.setBook(item) }
				>
					{item.title}
				</li>) )
		}

		return (
			<ul>
				<li>
					<h4>All Books</h4>
				</li>
				{bookList}
			</ul>
			)
	}

};

function mapStateToProps(state){
	return {allBooks: state.allBooks} 

export default connect(mapStateToProps, {setBook: setBook})(AllBooks);



