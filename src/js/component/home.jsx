import React, { useRef, useState } from "react";

//include images into your bundle
import GeneradorCanciones from "./GeneradorCanciones.jsx";
import Reproductor from "./Reproductor.jsx";

//create your first component

const initialState = [
    { id: 1, src: "https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3", name: "Mario's castle theme.mp3"},
    { id: 2, src: "https://assets.breatheco.de/apis/sound/files/mario/songs/hurry-starman.mp3", name: "Mario's Hurry-Starman theme.mp3" },
    { id: 3, src: "https://assets.breatheco.de/apis/sound/files/mario/songs/overworld.mp3", name: "Mario's Overworld theme.mp3" },
]

const Home = () => {

	
	const [audios] = useState(initialState);
	let audioRef = useRef(null);
	const setAudioSelected = ({ src }) => {
        audioRef.current.src = src;
		correr= play()
	}

	return (
		<>
		<GeneradorCanciones audios={audios} setAudioSelected={setAudioSelected} />
		<Reproductor audioRef={audioRef} setAudioSelected={setAudioSelected} />
		</>
	);
};

export default Home;
 