import React from 'react';
  
const ImageForm = ( {onClickDetect_ImageForm , onChangeInputText_ImageForm , user} ) =>{
    return( 
        <div>
            <div  className=' center' style={{display :'block'}}>
                <div>
                    <p className=' pv2 tracked tc white '> 
    {'Hello '} <b>{user.name}</b>{' to face detect website - Enteries #  :  '} <b>{ user.enteries}</b>
                    </p>
                </div>
                <div className='flex center '>
                    <input placeholder='http:\\...'
                        className='input-reset br2 mv1 b--black-20 pa2 mb2 db w-50 tc' 
                        onChange={onChangeInputText_ImageForm} 
                        type='text' />  
                    <button                    
                        className='ph3 pv2 grow link white bg-black-50 hover-bg-black hover-white  w-20' 
                        onClick={onClickDetect_ImageForm} >Detect Face</button>
                </div>
            </div>
        </div>
        )
}

export default ImageForm;