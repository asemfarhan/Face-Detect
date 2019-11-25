import React from 'react';
import Tilt from 'react-tilt';
import logo_img from '../../images/logo.png';

const Logo = () =>{
    return(
        <div>
            <Tilt className="Tilt br2 mh5 ma4 pa3 shadow-2 tc" options={{ max : 25 }} style={{ height: 180 , width: 180 }} >
                 <div className="Tilt-inner"><img className="" alt="Logo" src={logo_img}/> </div>
            </Tilt>

        </div>
        )
}

export default Logo;