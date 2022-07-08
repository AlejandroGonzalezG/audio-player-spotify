import React, { useRef, useState } from 'react';

const CancionesCard = ({ src, alt = 'Audio', setAudioSelected, name }) => {
    return (
        <>
            <ul className="list-group" onClick={() => setAudioSelected({src : src})}>
                <li src={src} className="list-group-item" alt={alt}>{name}</li>
            </ul>
        </>
    )
}

export default CancionesCard;