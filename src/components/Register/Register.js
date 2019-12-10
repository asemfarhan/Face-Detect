import React from 'react';


class Register extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            nameField: '',
            emailField:'',
            passwordField:''
        }
    }
    
onChangeName = (event) =>
{   
    console.log(event.target.value);
    this.setState({nameField : event.target.value});
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

onSubmitRegister= () => {
    //console.log('----------------- start register  ');
    fetch('https://mysterious-eyrie-08602.herokuapp.com/register', {
    method:'post',
    headers : {'Content-Type': 'application/json'},
    body : JSON.stringify({
    name        : this.state.nameField,
    email       : this.state.emailField,
    password    : this.state.passwordField
        }) 
    })
    .then(res  => res.json())
    .then(user => {
        if(user[0].id)
        {   this.props.onChangeRoute('home', true); 
            this.props.onLoadUser(user);
        }
        else{ 
           this.props= ({isSingedIn:false});       
            console.log('else ',user)
        }
    })
    .catch(err=>{ 
        this.props= ({isSingedIn:false})
        //console.log('err catac',err)
    })
}

    render(){
        return(
            <div>
            <article className="br3 shadow-5 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center white">
                <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f2 tc fw6 ph0 mh0 white">Register</legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 white" htmlFor="name">Name</label>
                        <input onChange={this.onChangeName}
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="name"  id="name"/>
                    </div>

                    <div className="mt3">
                        <label className="db fw6 lh-copy f6 white" htmlFor="email-address">Email</label>
                        <input  onChange={this.onChangeEmail}
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                    </div>

                    <div className="mv3">
                        <label className="db fw6 lh-copy f6 white" htmlFor="password">Password</label>
                        <input onChange={this.onChangePassword}
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                    </div>

                    </fieldset>
                    <div className="flex">
                    <input
                     onClick={this.onSubmitRegister}
                      className="b ph3 pv2 link input-reset ba b--black bg-transparent grow pointer f6 dib white" 
                      type="submit" 
                      value="Register"/>
                    </div>
                </div>
                </main>
            </article>
            </div>
            )
    }
}

export default Register;