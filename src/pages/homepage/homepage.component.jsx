import React from 'react';
import { Container, Grid } from '@material-ui/core';

import CenterMode from './../../components/slider/slider.component';
import CardItem from './../../components/card/card.component';

import { ImageContainer, Section4 } from './homepage.styles';

import './homepage.styles.scss';

const HomePage = () => {
	return (
		<div className="homePage">
			<section className="section-1">
				<Container>

				</Container>
			</section>

			<section className="section-2">
				<Container maxWidth="lg">
					<CenterMode/>
				</Container>
			</section>

			<section className="section-3">
				<Container maxWidth="lg">
					<Grid container spacing={3}>
						<Grid item container xs={12} md={6} alignItems='center'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</Grid>
						<Grid item xs={12} md={6}>
							<div className="imageContainer">
								<img src="https://trikky.ru/wp-content/blogs.dir/1/files/2018/04/maxresdefault.jpg" alt="cat"/>
							</div>
						</Grid>
					</Grid>
					<Grid container spacing={3} direction="row-reverse">
						<Grid item container xs={12} md={6} alignItems="center">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</Grid>
						<Grid item xs={12} md={6}>
							<ImageContainer>
								<img src="https://s1.1zoom.ru/big0/966/Dogs_Cats_Birds_Guinea_pigs_Parrots_Snakes_White_544776_1280x654.jpg" alt="animals"/>
							</ImageContainer>
						</Grid>
					</Grid>
				</Container>
			</section>

			<Section4>
				<Container className="slider">
					<Grid container>
						<Grid item xs={12} md={3}>
							<CardItem/>
						</Grid>
						<Grid item xs={12} md={3}>
							<CardItem/>
						</Grid>
						<Grid item xs={12} md={3}>
							<CardItem/>
						</Grid>
						<Grid item xs={12} md={3}>
							<CardItem/>
						</Grid>
					</Grid>
				</Container>
			</Section4>
		</div>
	);
};

export default HomePage;




