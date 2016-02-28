import {Subject} from 'rxjs/Subject'; 
import {Observable} from 'rxjs/Observable'; 

function pausable(pauser, observable = this) {
    const subj = new Subject();

    const nextEmitter = x => subj.next(x);
    const nextBuffer = x => {};

    let subscriber = nextBuffer;
    observable.subscribe(x => subscriber(x));

    pauser.subscribe(value => {
        if (value) {
            subscriber = nextEmitter;
        } else {
            subscriber = nextBuffer;
        }
    })

    return subj;
};

Observable.prototype.pausable = pausable;