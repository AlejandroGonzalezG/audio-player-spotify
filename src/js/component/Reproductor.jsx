import React from 'react';
import {FaArrowRight, FaArrowLeft, FaPlay, FaPause} from 'react-icons/fa';



const estiloBotonesDiv = {
    alignItems: "flex-end",
    marginLeft: "20px",
    marginTop: "10px",
    marginBottom: "10px"
}

const estiloBotones = {
    marginLeft: "10px",
    marginRight: "10px",
    height: "43px"
}

const estiloAudio = {
    margin: "10px"
}

const Reproductor = (props) => {
    return (
        <div className="col-4" style={estiloBotonesDiv}>
            <div className="contenedor">
                <button className="anterior" style={estiloBotones}><FaArrowLeft /></button>
                <button className="play" style={estiloBotones}><FaPlay /></button>
                <button className="pausa" onClick={() => props.setAudioSelected} style={estiloBotones}><FaPause /></button>
                <button className="siguiente" style={estiloBotones}><FaArrowRight /></button>
            </div>
            <div className="contenedor">
                <audio ref={props.audioRef} controls autoPlay style={estiloAudio} ></audio>
            </div>
        </div>
    )
}


export default Reproductor;