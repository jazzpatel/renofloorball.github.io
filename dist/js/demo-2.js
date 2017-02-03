(function() {

    var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;

    var fillPattern; 
    // Main
    initHeader();
    addListeners();

    function initHeader() {
        width = window.innerWidth;
        height = pageHeight();
        target = {x: 0, y: height};

        largeHeader = document.getElementById('large-header');
        largeHeader.style.height = height+'px';

        canvas = document.getElementById('demo-canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create particles
        circles = [];
        for(var x = 0; x < width*0.5; x++) {
            var c = new Circle();
            circles.push(c);
        }
        animate();
    }

    // Event handling
    function addListeners() {
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function pageHeight() {
        var body = document.body,
            html = document.documentElement;

        var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
        //var height = window.innerHeight;
        return height;
    }

    function resize() {
        width = window.innerWidth;
        height = pageHeight();

        largeHeader.style.height = height+'px';
        canvas.width = width;
        canvas.height = height;
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in circles) {
                circles[i].draw();
            }
        }
        requestAnimationFrame(animate);
    }

    // Canvas manipulation
    function Circle() {
        var _this = this;

        // constructor
        (function() {
            _this.pos = {};
            init();
            console.log(_this);
        })();

        function init() {
            _this.pos.x = Math.random()*width;
            //_this.pos.y = height+Math.random()*100;
            _this.pos.y = Math.random()*100;
            _this.alpha = 0.1+Math.random()*0.3;
            _this.scale = 0.1+Math.random()*1.3;
            _this.velocity = Math.random()*5;
        }

        this.draw = function() {
            if(_this.alpha <= 0) {
                init();
            }
            //_this.pos.y -= _this.velocity;
            _this.pos.y += _this.velocity;
            _this.alpha -= 0.0005;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(255,255,255,'+ _this.alpha+')';
            //ctx.fillStyle = fillPattern;
            ctx.fill();
        };
    }

   var imageObj = new Image();

  imageObj.onload = function() {
     fillPattern = ctx.createPattern(imageObj, 'no-repeat');
     console.log('fillpattern: ',fillPattern);
  };
  imageObj.src = 'http://www.bcfloorball.com/wp-content/uploads/2010/11/cr8er-300x300.jpg';



})();