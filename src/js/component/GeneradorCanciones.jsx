import React, { useRef, useState } from 'react';
import CancionesCard from "./CancionesCard.jsx";

const estiloDiv = {
    width: "400px"
}



const GeneradorCanciones = (props) => {

    return (
        <div className="list-group" style={estiloDiv}>
            {
                props.audios.length > 0 &&
                props.audios.map((audio) => (
                    <div className='col' key={audio.id}>
                        <CancionesCard src={audio.src} alt={`Image ${audio.id}`} setAudioSelected={props.setAudioSelected} name={audio.name} />
                    </div>
                ))
            }
        </div>
    )
}


export default GeneradorCanciones 