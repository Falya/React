import React from "react";

export default function(props){

	let deleteMe = () => props.removeNote(props.itemIndex);

	return (<li className="list-group-item">
				<p className="list-group-item-text">
					{props.itemText}
					<span
						onClick={deleteMe} 
						className="glyphicon glyphicon-remove pull-right">
					</span>
				</p>
			</li>);
};
