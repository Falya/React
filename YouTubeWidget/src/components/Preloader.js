import React from 'react';
import ReactSVG from 'react-svg';
const PreLoader = () => {
	return (
		<div className='result-list'>
			<div className="loader">
				<ReactSVG src='/Double.svg'/>
			</div>
		</div>
	);
};

export default PreLoader;
