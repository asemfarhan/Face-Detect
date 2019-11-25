import React from 'react';
  
const ImageForm = ( {onClickDetect_ImageForm , onChangeInputText_ImageForm} ) =>{
    return(
        <div>
            <div  className='db center'>
                <p className=' b pv2 tracked tc white '> 
                    {'Hellow to face detect website.'}
                </p>
                <div className='flex center '>
                    <input placeholder='http:\\...'
                        className='input-reset br2 mv1 b--black-20 pa2 mb2 db w-50 tc' 
                        onChange={onChangeInputText_ImageForm} 
                        type='text' />  
                    <button                    
                        className='ph3 pv2 grow bg-black link bg-transparent hover-bg-black hover-white  w-20' 
                        onClick={onClickDetect_ImageForm} >Detect Face</button>
                </div>
            </div>
        </div>
        )
}

export default ImageForm;