import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import HomeCarousel from '../../components/carousel/carousel.component';
import CardItem from './../../components/card/card.component';
import SectionTitle from '../../components/section-title/section-title';

import './homepage.styles.scss';

import fullWidthImage from '../../assets/images/carousel/home/dog-5.jpg';
import ScrollToTop from '../../components/scroll-to-top/scroll-to-top.component';

const HomePage = () => {
	return (
		<div className="home-page">
			<section className="head-section">
				<Container maxWidth="xl" className={'head-section-container'}>
					<Grid component={'div'}>
						<Grid item xs={12}>
							<HomeCarousel />
						</Grid>
					</Grid>
				</Container>
			</section>

			<section className="section-with-cards">
				<Container maxWidth="lg" style={{ padding: '0' }}>
					<Grid container component={'div'}>
						<Grid item xs={12} component={'div'}>
							<SectionTitle text={'Секция с карточками'}/>
						</Grid>
					</Grid>
					<Grid container component={'div'}>
						<Grid item xs={6} md={4} component={'div'}>
							<CardItem/>
						</Grid>
						<Grid item xs={6} md={4} component={'div'}>
							<CardItem/>
						</Grid>
						<Grid item xs={6} md={4} component={'div'}>
							<CardItem/>
						</Grid>
					</Grid>
				</Container>
			</section>

			<section className="section-with-text-n-image" style={{ padding: '4rem 0' }}>
				<Container maxWidth="lg">
					<Grid container component={'div'}>
						<Grid item xs={12} component={'div'}>
							<SectionTitle text={'Секция с текстом и фото'}/>
						</Grid>
					</Grid>
					<Grid container spacing={3} component={'div'}>
						<Grid item container xs={12} md={6} alignItems='center' component={'div'}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</Grid>
						<Grid item xs={12} md={6} component={'div'}>
							<div className="imageContainer">
								<img src="https://trikky.ru/wp-content/blogs.dir/1/files/2018/04/maxresdefault.jpg" alt="cat"/>
							</div>
						</Grid>
					</Grid>
					<Grid container spacing={3} direction="row-reverse" component={'div'}>
						<Grid item container xs={12} md={6} alignItems="center">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</Grid>
						<Grid item xs={12} md={6} component={'div'}>
							<div className={'image-container'}>
								<img src="https://s1.1zoom.ru/big0/966/Dogs_Cats_Birds_Guinea_pigs_Parrots_Snakes_White_544776_1280x654.jpg" alt="animals"/>
							</div>
						</Grid>
					</Grid>
				</Container>
			</section>

			<section className="section-with-full-with-image" style={{ padding: '4rem 0' }}>
				<Container maxWidth="xl" style={{ padding: '0' }}>
					<Grid container component={'div'}>
						<Grid item xs={12} component={'div'}>
							<SectionTitle text={'Секция с фото на всю ширину'}/>
						</Grid>
					</Grid>
					<Grid container component={'div'}>
						<Grid item xs={12} component={'div'}>
							<img src={ fullWidthImage } alt=""/>
						</Grid>
					</Grid>
				</Container>
			</section>
			<ScrollToTop/>
		</div>
	);
};

export default HomePage;




