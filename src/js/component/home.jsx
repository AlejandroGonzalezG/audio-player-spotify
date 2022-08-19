import React, { useRef, useState, useEffect } from "react";

//include images into your bundle
import GeneradorCanciones from "./GeneradorCanciones.jsx";
import Reproductor from "./Reproductor.jsx";

//create your first component
 

const Home = () => {

	 
	const [audios, setAudios] = useState("");
	let audioRef = useRef(null);
	const setAudioSelected = ({ src, name }) => {
        audioRef.current.src = src;
        audioRef.current.name = name;
	}

    const pausa = () => {
        audioRef.current.pause();
    }

    const play = () => {
        audioRef.current.play();
    }

    const siguiente = (name) => {
        let current = audios.findIndex((element) => element.name == name)
        setAudioSelected({src :`https://assets.breatheco.de/apis/sound/${audios[current+1].url}`, name : audios[current+1].name },)
        console.log(audioRef.current.name)
    }

    const anterior = (name) => {
        let current = audios.findIndex((element) => element.name == name)
        setAudioSelected({src :`https://assets.breatheco.de/apis/sound/${audios[current-1].url}`, name : audios[current-1].name },)
        console.log(audioRef.current.name)
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
		<Reproductor audioRef={audioRef} setAudioSelected={setAudioSelected} pausa={pausa} play={play} siguiente={siguiente} anterior={anterior} />
		</>
	);
};

export default Home;
 