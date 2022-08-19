import React from 'react';

const CancionesCard = ({ setAudioSelected, name, src }) => {
    return (
        <>
            <ul className="list-group" onClick={() => setAudioSelected({src : `https://assets.breatheco.de/apis/sound/${src}`, name : name})}>
                <li className="list-group-item bg-dark text-white">{name}</li>
            </ul>
        </>
    )
}
 
export default CancionesCard; 