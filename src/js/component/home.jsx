import React, { useRef, useState, useEffect } from "react";

//include images into your bundle
import GeneradorCanciones from "./GeneradorCanciones.jsx";
import Reproductor from "./Reproductor.jsx";

//create your first component
 

const Home = () => {

	
	const [audios, setAudios] = useState("");
	let audioRef = useRef(null);
	const setAudioSelected = ({ src }) => {
        audioRef.current.src = src;
	}

    const pausa = () => {
        audioRef.current.pause();
    }

    const play = () => {
        audioRef.current.play();
    }

    const siguiente = () => {
        audioRef.current.src = audioRef.current.src[alt+1];
    }

	useEffect(() => {
        getAudios();
    }, [])

	const getAudios =  () => {
        fetch('https://assets.breatheco.de/apis/sound/songs', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                if (response.status === 404) throw new Error('Pagina no encontrada');
                return response.json();
            })
            .then((data) => {
                setAudios(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

	return (
		<>
		<GeneradorCanciones audios={audios} setAudioSelected={setAudioSelected} />
		<Reproductor audioRef={audioRef} setAudioSelected={setAudioSelected} pausa={pausa} play={play} siguiente={siguiente} />
		</>
	);
};

export default Home;
 