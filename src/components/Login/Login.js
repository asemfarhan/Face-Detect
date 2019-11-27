import React from 'react';

const Login = ({onChangeRoute}) =>{
return(
    <div>
        <article className="br3 shadow-5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center white">
            <main className="pa4 black-80">
            <div className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f2 tc fw6 ph0 mh0 white">Sign In</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6 white" htmlFor="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6 white" htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                </div>
                </fieldset>
                <div className="flex">
                <input
                 onClick={()=>onChangeRoute('home')}
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib white" 
                  type="submit" 
                  value="Sign in"/>
                <a href="#0" onClick={() =>onChangeRoute('register')} className="f6 pa3 link dim white db b">Register</a>
                </div>
            </div>
            </main>
        </article>
    </div>
    )
}

export default Login;