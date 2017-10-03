window.jQuery = window.$ = require('jquery/dist/jquery.min')

import bootstrap from 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrapmaterial from 'bootstrap-material-design/dist/js/bootstrap-material-design';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';


import styles from '../css/main.css'
import components from '../components/lightbox/lightbox.css'


//import template from '../scenes/header.html';



import React from 'react'
import ReactDOMServer from 'react-dom/server'
import ReactDOM from 'react-dom'
import Main from './ReactMain.js'


import {
  version,
} from '../../../package.json'



const rootEl = document.getElementById('react-root')
let render = () => {
  const Root = require('./ReactMain').default
  ReactDOM.render(<Root />, rootEl)
}
render()

// Method A
// module.exports = function render(locals, callback) {
//   var html = ReactDOMServer.renderToStaticMarkup(React.createElement(Main, locals))
//   console.log('html: ',html)
//   callback(null, '<!DOCTYPE html>' + html)
// }

//Method B
//ReactDOM.render(<Main />, document.getElementById('react-root'));



console.log('jquery: ',$)
console.log('bootstrap: ',bootstrap)
//document.write('<div>hello</div>');


let body = `
   <!-- Used to add drop shadow effect on elements -->
    <svg height="0" xmlns="http://www.w3.org/2000/svg">
        <filter id="drop-shadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
            <feOffset dx="12" dy="12" result="offsetblur" />
            <feFlood flood-color="rgba(0,0,0,0.5)" />
            <feComposite in2="offsetblur" operator="in" />
            <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic" />
            </feMerge>
        </filter>
    </svg>
    <!-- Nav Menu Section style="position: fixed; top: 0; width: 100%;"  -->
    <!-- Nav Menu Section End -->
    



    <!-- <div class="divider shadowed"></div> -->


    <!-- Motivation Area Section -->
    <section id="motivation-area" class="module parallax parallax-1">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                  <blockquote style="border-left: none">
                    <p style="font-size: 8.5vmin; color: rgba(255, 255, 255, 0.8); text-align: center; text-transform: uppercase; text-shadow: 0 0 10px rgba(0, 0, 0, 0.2)">
                    "You miss 100 percent of the shots you don’t take"
                    </p>
                  </blockquote>
                  
                </div>
            </div>
        </div>
    </section>
    <!-- Motivation Area Section End-->
    
    <!-- Service Section -->
    <section id="info" class="clip module content">
        <div class="container text-center">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="title" style="color: white">What we do</h1>
                    <h2 class="subtitle">...and why we play floorball</h2>

                    <div class="card-deck">
                      <div class="card effect3">
                        <img class="card-img-top img-floorballSinglePlayerAction1" alt="Card image cap">
                        <div class="card-body">
                          
                        <h3 style="color:#bdc3c7; margin-bottom: 1.5em; ">Who are we</h3>
                          <p class="card-text">We are a group of sport enthusiasts that come together on a regular basis to play Floorball. The game allows a fun and exciting way to exercise and promote better health.
                                Since we started our team we have enjoyed all the benefits of this great sport and continue to encourage others to join us as well.</p>
                          
                        </div>
                      </div>
                      <div class="card effect2">
                        <img class="card-img-top img-floorballaction"  alt="Card image cap">
                        <div class="card-body">
                          <h3 style="color:#bdc3c7; margin-bottom: 1.5em; ">What is Flooball</h3>
                          <p class="card-text">
                            Fast paced, safe and low cost <br><br>
                            Like indoor hockey but played with lightweight fiberglass or carbon fibre sticks <br><br>
                            Played in many countries around the world <br><br>
                            Rapidly growing and focus is on speed and skill <br><br>
                            Contender as an Olympic sport        
                          </p>
                         
                        </div>
                      </div>
                      <div class="card effect4">
                        <img class="card-img-top img-goalie-vit-schulmeister-floorball-18454838" alt="Card image cap">
                        <div class="card-body">
                          <h3 style="color:#bdc3c7; margin-bottom: 1.5em; ">Benefits of Floorball</h3>
                          <p class="card-text">
                            Exciting sport for all age groups<br><br>
                            Physically builds endurance, strength and agility<br><br>
                            Low cost and easy to learn<br><br>
                            Promotes great social camaraderie<br><br>
                            </p>
                          
                        </div>
                      </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <!-- Service Section End -->
    <!-- P2 Area Section -->
    <section id="motivation-area-2" class="module parallax parallax-2">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <blockquote style="border-left: none">
                    <p style="font-size: 8.5vmin; color: rgba(255, 255, 255, 0.8); text-align: center; text-transform: uppercase; text-shadow: 0 0 10px rgba(0, 0, 0, 0.2)">
                    "It's not the team with the best players that win, It's the players with the best team that wins."
                    </p>
                  </blockquote>
                  
                </div>
            </div>
        </div>
    </section>
    <!-- P2 Area Section End-->
    <!-- Portfolio Section -->
    <section id="portfolio" class="clip module content">
        <div class="container text-center">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="title">Portfolio</h1>
                    <h2 class="subtitle"></h2>
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div class="portfolio-item wow fadeInLeft" data-wow-delay=".5s">
                            <a href="#"><img src="./images/team/21055284_1241987665907195_8005402143760143794_o.jpg" style="filter: grayscale(100%)" alt=""></a>
                            <div class="overlay">
                                <div class="icons">
                                    <a data-lightbox="image1" href="./images/team/21055284_1241987665907195_8005402143760143794_o.jpg" class="preview"><i class="fa fa-search-plus fa-4x"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div class="portfolio-item wow fadeInLeft" data-wow-delay=".7s">
                            <a href="#"><img src="./images/team/21078786_10155694928444837_5728630881547213793_n.jpg" style="filter: grayscale(100%)" alt=""></a>
                            <div class="overlay">
                                <div class="icons">
                                    <a data-lightbox="image1" href="./images/team/21078786_10155694928444837_5728630881547213793_n.jpg" class="preview"><i class="fa fa-search-plus fa-4x"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div class="portfolio-item wow fadeInLeft" data-wow-delay=".9s">
                            <a href="#"><img src="./images/team/21122252_1241988895907072_6538481359875669944_o.jpg" style="filter: grayscale(100%)" alt=""></a>
                            <div class="overlay">
                                <div class="icons">
                                    <a data-lightbox="image1" href="./images/team/21122252_1241988895907072_6538481359875669944_o.jpg" class="preview"><i class="fa fa-search-plus fa-4x"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12" data-wow-delay="1.1s">
                        <div class="portfolio-item wow fadeInRight">
                            <a href="#"><img src="./images/team/21150269_10210268993341947_6371180934318348797_n.jpg" style="filter: grayscale(100%)" alt=""></a>
                            <div class="overlay">
                                <div class="icons">
                                    <a data-lightbox="image1" href="./images/team/21150269_10210268993341947_6371180934318348797_n.jpg" class="preview"><i class="fa fa-search-plus fa-4x"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 wow fadeInRight" data-wow-delay="1.3s">
                        <div class="portfolio-item">
                            <a href="#"><img src="./images/team/IMG_20170826_194515.jpg" style="filter: grayscale(100%)" alt=""></a>
                            <div class="overlay">
                                <div class="icons">
                                    <a data-lightbox="image1" href="./images/team/IMG_20170826_194515.jpg" class="preview"><i class="fa fa-search-plus fa-4x"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 wow fadeInRight" data-wow-delay="1.5s">
                        <div class="portfolio-item">
                            <a href="#"><img src="./images/team/21077753_1241989509240344_5113821606325636730_n.jpg" style="filter: grayscale(100%)" alt=""></a>
                            <div class="overlay">
                                <div class="icons">
                                    <a data-lightbox="image1" href="./images/team/21077753_1241989509240344_5113821606325636730_n.jpg" class="preview"><i class="fa fa-search-plus fa-4x"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Portfolio Section End -->


    <!-- P3 Area Section -->
    <section id="motivation-area-3" class="module parallax parallax-3">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <blockquote style="border-left: none">
                    <p style="font-size: 8.5vmin; color: rgba(255, 255, 255, 0.8); text-align: center; text-transform: uppercase; text-shadow: 0 0 10px rgba(0, 0, 0, 0.2)">
                    "Good players inspire themselves, Great players inspire others"
                    </p>
                  </blockquote>
                  
                </div>
            </div>
        </div>
    </section>
    <!-- P3 Area Section End-->
    <!-- Client Section -->
    <section id="sponsor" class="clip module content">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="title">Sponsors</h1>
                    <h2 class="subtitle">We are proud to have the following sponsors supporting our effort</h2>
                    <div class="wow fadeInDown">
                        <img class="col-md-3 col-md-3 col-sm-3 col-xs-12" src="./images/img/clients/ThePowderMan.png" style="filter: grayscale(100%);" alt="client-1">
                        <img class="col-md-3 col-md-3 col-sm-3 col-xs-12" src="./images/img/clients/img2.png" alt="client-2">
                        <img class="col-md-3 col-md-3 col-sm-3 col-xs-12" src="./images/img/clients/img3.png" alt="client-3">
                        <img class="col-md-3 col-md-3 col-sm-3 col-xs-12" src="./images/img/clients/img4.png" alt="client-4">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Client Section End -->
    <!-- About Section -->
    <section id="about" class="clip">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="title"></h1>
                    <h2 class="subtitle"></h2>
                    <div class="col-md-12">
                        <div class="card-deck">
                            <div class="card-body" style="padding: 10px; text-align: center; box-shadow: 4px 3px 0px #8888A9; background-color: aliceblue;">
                                <div class="card-img-top">
                                    <iframe height="300vmin" width="100%" src="https://www.youtube.com/embed/zdYRRCxnEDY" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>
                            <div class="card-body" style="padding: 10px; text-align: center; box-shadow: 4px 3px 0px #8888A9; background-color: aliceblue;">
                                <div class="card-img-top">
                                    <iframe height="300vmin" width="100%" src="https://www.youtube.com/embed/wuLlMzJps8I" frameborder="0" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>

    

                        <p>
                        </p>
                    </div>
                   
                </div>
            </div>
        </div>
    </section>
    <!-- About Section End -->
    <!-- Conatct Section -->
    <section id="contact" class="clip">
        <div class="container text-center">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="title">Contact us</h1>
                    <h2 class="subtitle">We look forward to adding more members or answer any questions you may have</h2>
                    <form role="form" class="contact-form" action="https://formspree.io/renofloorball@gmail.com" method="post">
                        <div class="col-md-6 wow fadeInLeft" data-wow-delay=".5s">
                            <div class="form-group">
                                <div class="controls">
                                    <input type="text" class="form-control" placeholder="Name" name="name">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="controls">
                                    <input type="email" class="form-control email" placeholder="Email" name="email">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="controls">
                                    <input type="text" class="form-control requiredField" placeholder="Subject" name="subject">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="controls">
                                    <textarea rows="7" class="form-control" placeholder="Message" name="message"></textarea>
                                </div>
                            </div>
                            <button type="submit" id="submit" class="btn btn-lg btn-common">Send</button>
                            <div id="success" style="color:#34495e;"></div>
                        </div>
                    </form>
                    <div class="col-md-6 wow fadeInRight">
                        <div class="social-links">
                            <a class="social" href="#" target="_blank"><i class="fa fa-facebook fa-2x"></i></a>
                            <a class="social" href="#" target="_blank"><i class="fa fa-twitter fa-2x"></i></a>
                            <a class="social" href="#" target="_blank"><i class="fa fa-google-plus fa-2x"></i></a>
                            <!--<a class="social" href="#" target="_blank"><i class="fa fa-linkedin fa-2x"></i></a>-->
                        </div>
                        <div class="contact-info">
                            <p><i class="fa fa-map-marker"></i> Reno NV, USA</p>
                            <p><i class="fa fa-envelope"></i> renofloorball@gmail.com</p>
                        </div>
                        <p >
                             <br>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Conatct Section End-->
    <div id="copyright">
        <div class="container">
            <div class="col-md-10">
                <p>©  <a href="http://renofloorball.org">Reno Floorball</a></p>
            </div>
            <div class="col-md-2">
                <span class="to-top pull-right"><a href="#hero-area"><i class="fa fa-angle-up fa-2x"></i></a></span>
            </div>
        </div>
    </div>

    <script>

    </script>
  
`

document.write(body)

import './rxtesting'
import pageutils from './pageutil';
pageutils.startSmoothScrolling();



