import React from 'react';
import Slider from 'react-slick';

import WithCarousel from '../with-carousel/with-carousel.component';

import './carousel.styles.scss';

const Carousel = ({ content, className, settings }) => {
	const renderCarouselSlides = content => (
		content.map(({ slideImage, slideText }, index) => (
			<div className="slide-content" key={ index }>
				<img src={slideImage} alt="animals"/>
				<div className="text-block">
					{ slideText }
				</div>
			</div>
		))
	);

	return (
		<Slider className={ className } { ...settings }>
			{ renderCarouselSlides(content) }
		</Slider>
	);
};

export default WithCarousel(Carousel);
// export default Carousel;
