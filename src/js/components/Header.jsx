import React from 'react';
import logo from '../../icons/troll-face.svg';

function Header() {
	return (
		<header className="header">
			<img className="header__logo" src={logo} width={31} height={26} alt="Logo" />
			<h1 className="header__h1">Meme Generator</h1>
			<h2 className="header__h2">React Course - Project 5</h2>
		</header>
	);
}

export default Header;
