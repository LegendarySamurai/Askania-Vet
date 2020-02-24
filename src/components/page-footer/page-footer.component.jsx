import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import './page-footer.scss';

const PageFooter = () => (
	<AppBar
		className={'page-footer'}
		position={'static'}
		color={'default'}
		component={'footer'}
	>
		<Container maxWidth={ 'xl' }>
			<Grid container component={'div'}>
				<Grid xs={12} component={'div'}>
					<p style={{ padding: '1rem 0', textAlign: 'right', fontSize: '.875rem' }}>
						Аскания Вет. Все права защищены. 2020
					</p>
				</Grid>
			</Grid>
		</Container>
	</AppBar>
);

export default PageFooter;
