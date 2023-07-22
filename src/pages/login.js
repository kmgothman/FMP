import React from 'react';
import {BrowserRouter, Route, Link, Navigate, useNavigate} from "react-router-dom"
import Logo from '../components/navigation/Logo/Logo.png'

class Login extends React.Component {
  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
     this.state = {
      signInEmail: '',
      signInPassword: '',
      toDashboard: false
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
  	
  	
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
        	this.setState({toDashboard: true})
        	this.props.loadUser(user)
          
          // this.props.onRouteChange('home');
        }
      })
  }



  render () {
  	if (this.state.toDashboard) {return (<Navigate to="/" />)
    } else {
	     return(
        <div style={{backgroundImage: 'url("/background.jpg")',
                     backgroundRepeat: "no-repeat",
                     backgroundSize: "cover"}} className="landing">
        <div className="box-home">
          <div className="box-top"> 
            <img width="100" alt="Logo" src={Logo}/>
          </div>
          <div className="fieldset">
            <fieldset>
             <div>
             <h1>email</h1>
             <input type="email" name="email-address" onChange={this.onEmailChange}/>
             </div>
             <div>
             <h1>password</h1>
             <input type="password" name="password" pattern="^(?=.*([A-Z].*[a-z].*[\d+_%@!$*~-]|\d.*[a-z+_%@!$*~-]|[+_%@!$*~-].*[a-z\d])|[a-z].*([A-Z].*[\d+_%@!$*~-]|\d.*[A-Z+_%@!$*~-]|[+_%@!$*~-].*[A-Z\d])|\d.*([A-Z].*[a-z+_%@!$*~-]|[a-z].*[A-Z+_%@!$*~-]|[+_%@!$*~-].*[A-Za-z])|[+_%@!$*~-].*([A-Z].*[a-z\d]|[a-z].*[A-Z\d]|\d.*[A-Za-z])))(?!.*{{escapeRegExp(username)}})[\w+_%@!$*~]+$"
             minLength="8" onChange={this.onPasswordChange}ref={this.password}/>
             </div>
            </fieldset>
            <div>
             <input id="signinbutton" onClick={this.onSubmitSignIn} type="submit" value="Sign In"/>
             </div>
            <div className='navigate'>
             <Link className='a' to="/register">Create an Account </Link>
             <Link className='a' to="/">Home Page</Link>
            </div>
          </div>
        </div>
    </div>
	);}
}
}

export default Login;
