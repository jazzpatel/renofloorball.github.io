var Rx = require('rxjs');

var observable = Rx.Observable.create( function subscribeX(observer) {
	var id = setInterval( () => {
		observer.next('Hi');
	},1000);

	return function unsubscribe() {
		console.log('cancel observable')
		clearInterval(id)
	};
});


var subscription = observable.subscribe( x => console.log('value from observable: ',x) );
//use 'subscription' to invoke the unsubscribe() function


var observer = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};

observable.subscribe(observer);





