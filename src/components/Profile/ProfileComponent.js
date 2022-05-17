import React, { useEffect } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import ProfilePicture from '../../assets/images/b082020.jpg';
import ResumePDF from '../../shared/BrennoLima112020.pdf';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { gsap } from 'gsap';
import './profile.css';

const useStyles = makeStyles({
	brand: {
		fontSize: '1.6rem',
		fontWeight: '600',
	},
	profilePic: {
		opacity: 1,
	},
	about: {},
});

const Profile = () => {
	const classes = useStyles();
	useEffect(() => {
		// var tl = gsap.timeline().to('#about', { opacity: 1, duration: 2 });
		// tl.to('#about', { fontSize: '10rem', duration: 5 });
	}, []);

	return (
		<div className='container profile-container' id='profile'>
			<h1 className='profile-title m-5'>Profile</h1>

			<Grid container columns={3}>
				<Grid.Column computer={5} mobile={16}>
					<div className='c1 mt-md-5 '>
						<h1 className='center-align-text' id='about'>
							About Me
						</h1>
						<hr />
						<p>
							Hi! Thanks for visiting my personal page. I am Brenno, a Developer
							with 2 years of experience in creating awesome websites.
							Passionate about technology since I was a kid (specially games at
							that time!). I've joined a Computer Science University in 2014 to
							pursue my career in IT, and have been gathering knowledge until
							then. A fast and adaptive learner, organized and committed
							professional with good communication skills, positive and can do
							attitude.
						</p>
					</div>
				</Grid.Column>
				<Grid.Column computer={6} mobile={16}>
					<div className='c2'>
						<Image
							className={classes.profilePic}
							src={ProfilePicture}
							size='large'
							centered
							circular
							id='profile-pic'
						/>
					</div>
				</Grid.Column>
				<Grid.Column computer={5} mobile={16}>
					<div className='c3 mt-md-5'>
						<h1 className='center-align-text'>Details</h1>
						<hr />
						<p>
							<strong>Name:</strong>
						</p>
						<p>Brenno Cesar Ferreira Lima</p>
						<p>
							<strong>Location:</strong>
						</p>
						<p>Greater Toronto Area - Ontario.</p>
						<p>
							<strong>Resume:</strong>
						</p>
						<a className='black fa fa-file-pdf-o' href={ResumePDF} download>
							{' '}
							Resume.pdf
						</a>
					</div>
				</Grid.Column>
			</Grid>
			<div className='row justify-content-center m-5'>
				<i>
					"Nothing is particularly hard if you divide it into small jobs." –
					<strong> Henry Ford</strong>
				</i>
			</div>
		</div>
	);
};

export default Profile;
