import $ from 'jquery';
import _ from 'lodash';
import bootstrap from 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import 'bootstrap-material-design';



console.log('bootstrap: ', bootstrap)
console.log('jQuery: ', $.fn.jquery)
console.log(_.VERSION)
console.log('hello from app.js');


console.log('initialize bootstrap material design...', $.material.init() )


