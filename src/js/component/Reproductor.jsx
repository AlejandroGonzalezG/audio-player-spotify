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
                <button className="anterior" style={estiloBotones} onClick={() => props.anterior(props.audioRef.current.name)}><FaArrowLeft /></button>
                <button className="play" title='play' onClick={() => props.play()} style={estiloBotones}><FaPlay /></button>
                <button className="pausa" title='pause' onClick={() => props.pausa()} style={estiloBotones}><FaPause /></button>
                <button className="siguiente" onClick={() => props.siguiente(props.audioRef.current.name)} style={estiloBotones}><FaArrowRight /></button>
            </div>
            <div className="contenedor">
                <audio ref={props.audioRef} style={estiloAudio} autoPlay ></audio>
            </div>
        </div>
    )
}


export default Reproductor;