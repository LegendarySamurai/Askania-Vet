import React from 'react';

const WithCarousel = WrappedCarousel => props => (
	<WrappedCarousel { ...props } />
);

export default WithCarousel;
