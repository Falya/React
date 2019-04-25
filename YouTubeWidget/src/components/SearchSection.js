import React, {Component} from 'react';


class SearchSection extends Component {
	constructor(props) {
		super(props);
		this.state ={
		};

	}

	render() {
		// console.log(this.props);
		let {onChangeMethod: onChange, onClickMethod: onClick} = this.props;
		return (
			<form className='search-field' onSubmit={onClick}>
				<input type="text" value={this.props.value} name="search" placeholder='Search' onChange={onChange}/>
				<input type="submit" value="Search"/>
			</form>
		);
	}
}


export default SearchSection;
