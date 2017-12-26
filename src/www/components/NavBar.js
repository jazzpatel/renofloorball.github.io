import React from 'react'
import Login from './Authentication'
import Clock from './Clock'
import { ButtonGroup, DropdownButton, MenuItem  } from 'react-bootstrap'
import { auth, isAuthenticated, storageKey } from '../services/Firebase'
import { _ } from 'underscore'
import { signOut } from '../actions/thunks/authenticationThunk'


import Button from 'muicss/lib/react/button';
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'

class NavBar extends React.Component {

  constructor(props) {
    super(props)
    console.log('navbar. received props from parent: ',props)
    this.state = { status: false, redirect: false }
  }

  handleSignOut = () => {
    console.log('signing out...')

    this.props.signOut()

    // auth.signOut().then(function() {
    //   console.log('signout successful')
      
    // }).catch(function(error) {
    //   console.log('signout failed - error: ',error)
    // });


    this.setState( { status: true, redirect: false })
  }  

  redirectPage(eventKey, event) {
    console.log('select menuitem: ', eventKey, ', event: ',event)
    this.setState( { redirect: true } )
  }

  render() {
    console.log('NavBar - rendering - authenticationState: ',this.props.authenticationState)

    // if( this.props.authenticationState.accesstoken !== null ) {
    //     console.log('redirecting to protected page since valid accesstoken: ',this.props.authenticationState.accesstoken)
    //     return ( <Redirect to="/accounthomepage" />)
    // }

    if( this.props.authenticationState.accesstoken != null && this.state.redirect ) {
        //this.refer = !this.refer
        return ( <Redirect to="/accounthomepage" />)
    }
    return (

        <div>
            <nav id="header" className="navbar navbar-expand-md  navbar-light bg-light" role="navigation" data-spy="affix" data-offset-top="0">
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active"><a className="nav-link" href="#leader-area"><i className="fa fa-home"></i> Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#info"><i className="fa fa-cogs"></i> Info</a></li>
                            <li className="nav-item"><a className="nav-link" href="#portfolio"><i className="fa fa-flask"></i> Portfolio</a></li>
                            <li className="nav-item"><a className="nav-link" href="#sponsor"><i className="fa fa-puzzle-piece"></i> Sponsor</a></li>
                            <li className="nav-item"><a className="nav-link" href="#about"><i className="fa fa-info"></i> About</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact"><i className="fa fa-envelope"></i> Contact</a></li>
                        </ul>

                        { console.log('NavBar - in the middle of rendering...:',this.props.authenticationState.authSuccess)}
                        { this.props.authenticationState.authSuccess === true && this.props.authenticationState.signOutSuccess === false ? 
                            (
                                <div>
                                  
                                         <ButtonGroup className="nav-item">
                                            <DropdownButton id="dropdown-btn-m=enu" bsStyle="success" title="My Account">
                                              <MenuItem key="1" eventKey="1" onSelect={this.redirectPage.bind(this)}>Member page</MenuItem>
                                              <MenuItem key="2" eventKey="2" onSelect={this.handleSignOut.bind(this)}>Sign Out</MenuItem>
                                            </DropdownButton>

                                            <Button variant="raised" onClick={this.handleSignOut.bind(this)}>Sign Out</Button> 
                                         </ButtonGroup>

                                    
                                </div>
                            )
                            : 
                            (
                                <div> 
                                    {this.props.authenticationState.authSuccess}
                                    <Login />   
                                </div>
                            )
                        }
                          
            
                    </div>
            </nav>
       
             
        </div>
    )
  }
}


  const mapStateToProps = (state, ownProps) => {
    console.log('NavBar - mapStateToProps - state: ',state)
  

    return {
          authenticationState: state.auth,
        
    };
  };

const mapDispatchToProps = (dispatch) => {
    console.log('NavBar - mapDispatchToProps ')
    return {
        signOut: () => dispatch(signOut()),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);


