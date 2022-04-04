import React, { useState, useEffect } from 'react';

function Meme() {
	const [allMemes, setAllmemes] = useState({});
	useEffect(_ => {
		async function getMemes() {
			const response = await fetch('https://api.imgflip.com/get_memes');
			const data = await response.json();
			setAllmemes(data.data.memes);
		}
		getMemes();
	}, []);

	const [meme, setMeme] = useState({
		topText: '',
		bottomText: '',
		randomImage: 'https://i.imgflip.com/cv1y0.jpg',
	});

	function hendleChange(event) {
		const { name, value } = event.target;
		setMeme(prevMeme => ({ ...prevMeme, [name]: value }));
	}

	function getRandomImage() {
		const randomNumber = Math.floor(Math.random() * allMemes.length);
		const rundomURL = allMemes[randomNumber].url;
		setMeme(prevMeme => ({ ...prevMeme, randomImage: rundomURL }));
	}

	return (
		<main className="main">
			<div className="main__form">
				<input
					className="main__form-input"
					id="topText"
					type="text"
					name="topText"
					placeholder="Type for top text"
					onChange={hendleChange}
				/>
				<input
					className="main__form-input"
					id="bottomText"
					type="text"
					name="bottomText"
					placeholder="Type for bottom text"
					onChange={hendleChange}
				/>
				<button className="main__form-button" type="button" onClick={getRandomImage}>
					Get a new meme image
				</button>
			</div>
			<div className="main__form-meme">
				<img className="main__form-meme-image" src={meme.randomImage} width={585} height="auto" alt="" />
				<p className="main__form-memme-text main__form-memme-text--top">{meme.topText}</p>
				<p className="main__form-memme-text main__form-memme-text--bottom">{meme.bottomText}</p>
			</div>
		</main>
	);
}

export default Meme;
