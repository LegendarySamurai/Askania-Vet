import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import './page-header.styles.scss';

import askaniaLogo from '../../assets/images/logo/logo__askania_trimmed.png';

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
});

const PageHeader = () => {
	const classes = useStyles();
	const [state, setState] = useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const toggleDrawer = (side, open) => event => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [side]: open });
	};

	const sideList = side => (
		<div
			className={ `${ classes.list }` }
			role="presentation"
			onClick={ toggleDrawer(side, false) }
			onKeyDown={ toggleDrawer(side, false) }
		>
			<List>
				{
					[
						{ name: 'Главная', key: 'home', routePath: '/' },
						{ name: 'Магазин', key: 'shop', routePath: '/shop' },
						{ name: 'Услуги', key: 'services', routePath: '/services' },
						{ name: 'О Нас', key: 'about', routePath: '/about' }
					]
						.map(({ name, key, routePath }) => (
							<ListItem component={ 'li' } key={ key }>
								<Link
									to={ routePath }
									key={ key }
								>
									{ name }
								</Link>
							</ListItem>
						)) }
			</List>
			<Divider/>
			<List>
				{
					[
						{ name: 'Доп. Страница 1', key: 'additional page 1', routePath: '/' },
						{ name: 'Доп. Страница 2', key: 'additional page 2', routePath: '/' },
						{ name: 'Доп. Страница 3', key: 'additional page 3', routePath: '/' },
					]
						.map(({ name, key, routePath }) => (
							<ListItem component={ 'li' } key={ key }>
								<Link
									to={ routePath }
									key={ key }
								>
									{ name }
								</Link>
							</ListItem>
						)) }
			</List>
		</div>
	);

	return (
		<AppBar className={ 'page-header' } position={ 'fixed' } color={ 'default' }>
			<Container maxWidth={ 'xl' }>
				<Grid container spacing={ 2 } component={ 'div' }>
					<Grid
						item
						xs={ 'auto' }
						component={ 'div' }
						style={ { display: 'flex', justifyContent: 'center', alignItems: 'center' } }
					>
						<IconButton
							href={ '' }
							edge="start"
							color="inherit"
							aria-label="menu"
							onClick={ toggleDrawer('left', true) }
						>
							<MenuIcon/>
						</IconButton>
					</Grid>
					<Grid item xs={ 'auto' } component={ 'div' }>
						<Link to="/" className="brand-logo">
							<img src={ askaniaLogo } alt="logo"/>
						</Link>
					</Grid>
				</Grid>
			</Container>
			<Drawer open={ state.left } onClose={ toggleDrawer('left', false) }>
				{ sideList('left') }
			</Drawer>
		</AppBar>
	);
};

export default PageHeader;
