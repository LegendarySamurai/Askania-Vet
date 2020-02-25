import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './carousel-custom-arrow.scss';

library.add(faChevronLeft);

const CarouselCustomArrow = ({ className, onClick }) => {
	return (
		<button className={ className } onClick={ onClick }>
			<FontAwesomeIcon icon={ faChevronLeft }/>
		</button>
	);
};

export default CarouselCustomArrow;
