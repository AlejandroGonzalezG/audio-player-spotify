import React from 'react';
import CancionesCard from "./CancionesCard.jsx";

const estiloDiv = {
    width: "100%",
    backgroundColor: "black",
    color: "yellow"
}

const estiloCanciones = {
    background: "black",
    color: "yellow"
}



const GeneradorCanciones = (props) => {
    let num = 0;
    return (
        <div className="list-group " style={estiloDiv}>
            {
                props.audios.length > 0 &&
                props.audios.map((audio, num=num+1) => (
                    <div className="col-12 bg-dark text-white" key={audio.url}>
                        <CancionesCard src={audio.url} alt={num} setAudioSelected={props.setAudioSelected} name={audio.name} />
                    </div>
                ))
            }
        </div>
    )
}
 

export default GeneradorCanciones; 