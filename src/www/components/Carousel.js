import React from 'react'

const sectionStyle = { height: '700px' }
const rowStyle = {height: '300px' }
const videoStyle = { backgroundSize: 'cover' }
const imgStyle = {backgroundSize: '100%' }

export default class Carousel extends React.Component {
  render() {
    return (
   	    <section id="leader-area" style={sectionStyle} className="clip module content">
		        <div className="container">
		            <div className="row" style={rowStyle}>
		                <div className="col-md-12">

		                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
		                      <ol className="carousel-indicators">
		                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
		                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
		                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
		                      </ol>
		                      <div className="carousel-inner">
		                         <div className="item active">
		                             <video className="d-block w-100 " style={videoStyle} autoPlay loop id="vd_div">
		                                    <source src="videos/rfc.mp4" /> Your browser does not support this video format.
		                            </video>
		                        </div>
		                        <div className="item">
		                          <img className="d-block w-100 " style={imgStyle} src="images/windedwarriorbanner.jpg" alt="First slide" />
		                        </div>
		                        <div className="item">
		                          <img className="d-block w-100 " style={imgStyle} src="images/floorballSinglePlayerAction2.jpg" alt="Second slide" />
		                        </div>
		                        <div className="item">
		                          <img className="d-block w-100 " style={imgStyle} src="images/goalie2.jpg" alt="Third slide" />
		                        </div>


		                      </div>
		                      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
		                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		                        <span className="sr-only">Previous</span>
		                      </a>
		                      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
		                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
		                        <span className="sr-only">Next</span>
		                      </a>
		                    </div>

		                </div>
		            </div>
		        </div>
		    </section>

    )}}