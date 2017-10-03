import Rx from 'rxjs/Rx';   //http://reactivex.io/rxjs/manual/overview.html#introduction

console.log('RX: ',Rx)

//RxJS testing
var button = $('#loginbutton');
Rx.Observable.fromEvent(button, 'click').scan(count => count + 1, 0).subscribe(count => console.log(`Clicked ${count} times`));
