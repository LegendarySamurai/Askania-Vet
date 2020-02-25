import React, { useState, useEffect } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './scroll-to-top.styles.scss';

library.add(faAngleDoubleUp);


const ScrollToTop = (props) => {
	const [visibility, setVisibility] = useState(false);

	const toggleVisibility = () => {
		if (window.pageYOffset > 600) {
			setVisibility(true);
		}
		else {
			setVisibility(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	};

	useEffect(() => {
		document.addEventListener('scroll', toggleVisibility);

		return () => document.removeEventListener('scroll', toggleVisibility);
	}, [visibility]);

	return (
		<React.Fragment>
			{
				visibility && (
					<div className={ 'scroll-to-top' } onClick={ scrollToTop }>
						<FontAwesomeIcon icon={ faAngleDoubleUp }/>
					</div>
				)
			}
		</React.Fragment>
	);
};

export default ScrollToTop;
