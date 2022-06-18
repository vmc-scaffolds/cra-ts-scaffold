import React from 'react';
import logo from './../../assets/images/logo.svg';
import './home.css';

function Home() {
	return (
		<div className='home'>
			<header className='home-header'>
				<img src={logo} className='home-logo' alt='logo' />
				<p>
					Edit <code>src/home.tsx</code> and save to reload.
				</p>
				<a
					className='home-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default Home;
