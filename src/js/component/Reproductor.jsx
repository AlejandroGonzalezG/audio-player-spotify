import React, { useRef, useState } from 'react';


const estiloBotonesDiv = {
    height: "1000px",
    width: "400px",
    alignItems: "flex-end",
    marginLeft: "20px"
}

const estiloBotones = {
    marginLeft: "10px",
    marginRight: "10px"
}

const Reproductor = (props) => {




    return (
        <div className="botones" style={estiloBotonesDiv}>
            <button className="anterior" style={estiloBotones}>Anterior</button>
            <button className="play" onClick={() => props.setAudioSelected.correr} style={estiloBotones}>Play</button>
            <button className="pausa" style={estiloBotones}>Pausa</button>
            <button className="siguiente" style={estiloBotones}>Siguiente</button>
            <audio ref={props.audioRef} controls autoPlay ></audio>
        </div>
    )
}


export default Reproductor 