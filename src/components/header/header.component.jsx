import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';

import './header.styles.scss';

import Logo from '../../assets/logo.png';

const Header = () => {
	return (
		<Container maxWidth="lg" className='header'>
			<Link to="/" className="logo-container">
				<img style={{width: '30%'}} src={Logo} alt="logo"/>
			</Link>

			<div className="options">
				<Link className="about-us" to="/about">О нас</Link>
				<Link className="our-services" to="/services">Услуги</Link>
				<Link className="shop" to="/shop">Магазин</Link>
			</div>
		</Container>
	);
};

export default Header;
