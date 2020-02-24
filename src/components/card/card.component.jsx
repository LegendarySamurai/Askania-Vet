import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import reptile from './../../assets/contemplative-reptile.jpg';

import './card.styles.scss';

const useStyles = makeStyles({
	root: {}
});

const CardItem = () => {
	const classes = useStyles();

	return (
		<div className="card-item">
			<Card className={ classes.root }>
				<CardMedia
					component="img"
					alt="Contemplative Reptile"
					image={ reptile }
					title="Contemplative Reptile"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						Lizard
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
						across all continents except Antarctica
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
};

export default CardItem;
