import React, { Component } from 'react';
import Slider from 'react-slick';

import dog1 from '../../assets/images/carousel/home/dog-1.jpg';
import dog2 from '../../assets/images/carousel/home/dog-2.jpg';
import dog3 from '../../assets/images/carousel/home/dog-3.jpg';
import dog4 from '../../assets/images/carousel/home/dog-4.jpg';
import dog5 from '../../assets/images/carousel/home/dog-5.jpg';

import './slider.styles.scss';

export default class CenterMode extends Component {
	render() {
		const settings = {
			className: "center",
			centerMode: true,
			infinite: true,
			centerPadding: "60px",
			slidesToShow: 3,
			speed: 500,
			// autoplay: true,
			pauseOnFocus: true,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						infinite: true,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						initialSlide: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		};
		return (
			<Slider {...settings}>
				<div>
					<div className="slide-image-container">
						<img src={dog1} alt="animals"/>
						<div className="text-block">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						</div>
					</div>
				</div>
				<div>
					<div className="slide-image-container">
						<img src={dog2} alt="animals"/>
						<div className="text-block">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						</div>
					</div>
				</div>
				<div>
					<div className="slide-image-container">
						<img src={dog3} alt="animals"/>
						<div className="text-block">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						</div>
					</div>
				</div>
				<div>
					<div className="slide-image-container">
						<img src={dog4} alt="animals"/>
						<div className="text-block">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						</div>
					</div>
				</div>
				<div>
					<div className="slide-image-container">
						<img src={dog5} alt="animals"/>
						<div className="text-block">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						</div>
					</div>
				</div>
			</Slider>
		);
	}
}
