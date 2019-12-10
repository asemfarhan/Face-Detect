import React from 'react';


class Login extends React.Component {

constructor(props){
    super(props);
    this.state = {
    emailField : '',
    passwordField : ''
    }
}

onChangeEmail = (event) =>
{   
    console.log(event.target.value);
    this.setState({emailField : event.target.value});
}

onChangePassword=(event)=>
{   
    console.log(event.target.value);
    this.setState({passwordField : event.target.value});
}
 
onSubmitLogin= () => {
    console.log('----------------- start login  ');
    fetch('https://mysterious-eyrie-08602.herokuapp.com/signin', {
        method : 'post',
        headers : {'Content-Type': 'application/json'},
        body : JSON.stringify({
        email :  this.state.emailField,
        password : this.state.passwordField
        })
    })
    .then(res=> res.json())
    .then(data => {
        console.log('-----------------then data  ',data);
        console.log('-----------------then isArray  ',Array.isArray(data));

        if(Array.isArray(data))
        {
        this.props.onChangeRoute('home', true); 
            this.props.onLoadUser(data);
            console.log('data.lenght data.lenght')
            console.log('-----------------if ');
        this.props= ({isSingedIn:true})
        }
        else{ 
           this.props= ({isSingedIn:false});
            console.log('else ----',this.props.isSingedIn)
        }

    })
    .catch(err=>{ 
        this.props= ({isSingedIn:false})
        console.log('err catac',err)
    })
}

render(){
    const {onChangeRoute}= this.props;
         return(
            <div>
                <article className="br3 shadow-5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center white">
                    <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 tc fw6 ph0 mh0 white">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6 white" htmlFor="email-address">Email</label>
                            <input 
                            onChange={this.onChangeEmail}
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address"  
                            id="email-address"
                            required />
                        </div>

                        <div className="mv3">
                            <label className="db fw6 lh-copy f6 white" htmlFor="password">Password</label>
                            <input 
                            onChange={this.onChangePassword}
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password"  
                            id="password"
                            required
                            />
                        </div>
                        </fieldset>
                        <div className="flex">
                        <input
                         onClick={this.onSubmitLogin}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib white" 
                        type="submit" 
                        value="Sign in"/>

                        <div onClick={() =>onChangeRoute('register')} className="f6 pa3 link pointer dim white db b">Register</div>
                        </div>
                    </div>
                    </main >
                </article>
            </div>
            )

    }

}

export default Login;