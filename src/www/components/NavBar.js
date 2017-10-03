import React from 'react'
import Login from './Login'
import Clock from './Clock'

export default class NavBar extends React.Component {
  render() {
    return (
        <nav id="header" className="navbar navbar-expand-md fixed-top navbar-light bg-light" role="navigation" data-spy="affix" data-offset-top="0">
                
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

                    
                    <Login />
                
                    <Clock />
        
                </div>
        </nav>
    )
  }
}

//// <button id="searchbutton" class="btn btn-outline-success my-2 my-sm-0" >Test</button> -->

                    // <ul class="navbar-nav mr-auto" >
                    //     <li class="nav-item dropdown">
                    //         <a class="nav-link" href="#" class="dropdown-toggle" data-toggle="dropdown">Settings<span class="glyphicon glyphicon-user pull-right"></span></a>
                    //         <ul class="dropdown-menu">
                    //             <li ><a href="#">Account Settings <span class="glyphicon glyphicon-cog pull-right"></span></a></li>
                    //             <li class="divider"></li>
                    //             <li><a href="#">User stats <span class="glyphicon glyphicon-stats pull-right"></span></a></li>
                    //             <li class="divider"></li>
                    //             <li><a href="#">Messages <span class="badge pull-right"> 42 </span></a></li>
                    //             <li class="divider"></li>
                    //             <li><a href="#">Favourites Snippets <span class="glyphicon glyphicon-heart pull-right"></span></a></li>
                    //             <li class="divider"></li>
                    //             <li><a href="#">Sign Out <span class="glyphicon glyphicon-log-out pull-right"></span></a></li>
                    //         </ul>
                    //     </li>
                    // </ul>