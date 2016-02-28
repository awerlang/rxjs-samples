import {Observable} from 'rxjs/Observable';

import plotRandomDot from '../util/plotRandomDot';
import {mousedown, mouseup} from './streams';
import {context} from './canvas';

const RADIUS = 30;

export function spray() {
    const s1 = Observable.interval(5)
        .pausable(
            mousedown.mapTo(true).merge(mouseup.mapTo(false)))
        .combineLatest(mousedown, (t, c) => c)
        .subscribe(coord => {
            plotRandomDot(context, coord.x, coord.y, RADIUS);
        });

    return {
        dispose: () => {
            s1.unsubscribe();
        }
    };

}
