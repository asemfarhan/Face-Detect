import React from 'react';
import './bounding.css';
  
const Face = ({image , faceBox}) =>{
    return(
        <div className='center'>
            <div className='absolute'>
                <img id='inputImage' className='imgcenter br4 shadow-5 ma2 measure-wide-l nested-img ' height='auto' alt='' src={image}/>
                    <div  className='bounding' style={{
                        top:    faceBox.top_row,
                        right:  faceBox.right_col,
                        bottom: faceBox.bottom_row,
                        left:   faceBox.left_col
                        }} >
                    </div>
            </div>
        </div>
    )}

export default Face;