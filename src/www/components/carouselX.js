


export default class Carousel {
    constructor() {

    }

    start() {
        var urls = ['../assets/images/areyouready.jpg', '../assets/images/goalie1.jpg', '../assets/images/carbon_fibre.png']

        //$('section[id~="leader-area"]').css("background-color: red");
        setInterval(function() {
            var i = Math.floor(Math.random() * 3)
                //console.log('i: ',i, ', url: ',urls[i])
            $('section[id="motivation-area-2"]').css("background-image", "url(" + urls[i] + ")");
        }, 3000);
    }

}