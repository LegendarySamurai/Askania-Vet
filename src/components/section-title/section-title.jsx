import React from 'react';

import './section-title.scss';

const SectionTitle = ({ text }) => (
	<div className={ 'section-headline-container' }>
		<h2 className={ 'section-headline' }>{ text }</h2>
		<div className="section-headline-decoration">
			<div className="section-headline-decoration-inner"/>
		</div>
	</div>

);

export default SectionTitle;
