import React from 'react';
import Tilt from 'react-tilt';
import logo_img from '../../images/logo.png';

const Logo = () =>{
    return(
        <div>
            <Tilt className="Tilt br2 mh5 ma4 pa3 bg-black-50 shadow-2 tc" options={{ max : 25 }} style={{ height: 160 , width: 160 }} >
                 <div className="Tilt-inner"><img className="" alt="Logo" src={logo_img}/> </div>
            </Tilt>

        </div>
        )
}

export default Logo;