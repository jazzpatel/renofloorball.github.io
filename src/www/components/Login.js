import React from 'react'

export default class Login extends React.Component {
  render() {
    return (

    	<form className="form-inline mt-2 mt-md-0">
          <input id="usernameinput" className="form-control mr-sm-2" type="text" placeholder="Username" aria-label="username" />
          <input id="passwordinput" className="form-control mr-sm-2" type="password" placeholder="Password" aria-label="password" />
          <button id="loginbutton" className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
        </form>
        )
	}
}