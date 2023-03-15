import React, { useState } from 'react';
import logo1 from '../img/imagen_ia_1_2l.png';
import logoHover from '../img/imagen_ia_12.png';

function Logo() {
    const [isHovered, setIsHovered] = useState(false);

    const toggleHover = () => {
        setIsHovered(!isHovered);
    };

    return (
        <div className="logo-contenedor">
        <img
            className="logo"
            src={isHovered ? logoHover : logo1}
            alt="Logo"
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
        />
        </div>
    );
}

export default Logo;