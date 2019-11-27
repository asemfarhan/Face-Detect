import React from 'react';

const Navigation = ({ onChangeRoute , isSingedIn }  ) =>{
    if(isSingedIn)
        return(
            <div className='flex flex-row-reverse' >
                <div className='pointer link f3  pa3 ma4 mt2 white'onClick={() =>onChangeRoute('signin')}>Sign out
                </div>
            </div>
        )
    else
        return (
            <div className='flex flex-row-reverse' >
            <div className='pointer link f3  pa3 mr4 mt2 white'onClick={() =>onChangeRoute('signin')}>Sign in
            </div>
            <div className='pointer link f3  pa3  mt2 white'onClick={() =>onChangeRoute('register')}>Register
            </div>
          </div>
        )
}

export default Navigation;