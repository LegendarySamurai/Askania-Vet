import React from 'react';
import Slider from 'react-slick';

import slideImage1 from '../../assets/images/carousel/home/dog-1.jpg';
import slideImage2 from '../../assets/images/carousel/home/dog-2.jpg';
import slideImage3 from '../../assets/images/carousel/home/dog-3.jpg';
import slideImage4 from '../../assets/images/carousel/home/dog-4.jpg';
import slideImage5 from '../../assets/images/carousel/home/dog-5.jpg';

import './slider.styles.scss';

const carouselImages = [
	{
		slideImage: slideImage1,
		slideText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
	},
	{
		slideImage: slideImage2,
		slideText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
	},
	{
		slideImage: slideImage3,
		slideText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
	},
];

const HomeCarousel = () => {
	const settings = {
		className: 'home-page-carousel',
		arrows: false,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		infinite: true,
		autoplay: true,
		speed: 500,
	};

	const renderCarouselSlides = (slides) => (
		slides.map(({ slideImage, slideText }, index) => (
			<div className="slide-content" key={ index }>
				<img src={slideImage} alt="animals"/>
				<div className="text-block">
					{ slideText }
				</div>
			</div>
		))
	);

	return (
		<Slider {...settings}>
			{
				renderCarouselSlides(carouselImages)
			}
		</Slider>
	);
};

export default HomeCarousel;
