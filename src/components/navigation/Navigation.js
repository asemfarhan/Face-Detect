import React from 'react';

class Navigation extends React.Component {

render(){
    const {onChangeRoute,  isSingedIn}= this.props;
    if(isSingedIn){
        return(
            <div className='flex flex-row-reverse' >
                <div className='pointer link f3  pa3 ma4 mt2 white'onClick={() => onChangeRoute('signout')}>Sign out
                </div>
            </div>
        )}
    else{
        return (
            <div className='flex flex-row-reverse' >
            <div className='pointer link f3  pa3 mr4 mt2 white'onClick={() => onChangeRoute('signin')}>Sign in
            </div>
            <div className='pointer link f3  pa3  mt2 white'onClick={() => onChangeRoute('register')}>Register
            </div>
          </div>
        )}
        
    }
}

export default Navigation;