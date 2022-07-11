import React from 'react';

const CancionesCard = ({ alt = 'Audio', setAudioSelected, name, src }) => {
    return (
        <>
            <ul className="list-group" onClick={() => setAudioSelected({src : `https://assets.breatheco.de/apis/sound/${src}`})}>
                <li className="list-group-item bg-dark text-white" alt={alt}>{name}</li>
            </ul>
        </>
    )
}

export default CancionesCard;