import {Observable} from 'rxjs/Observable'; 

import {canvas} from './canvas';

export const mousedown = Observable.fromEvent(canvas, 'mousedown')
    .map(event => ({ x: event.offsetX, y: event.offsetY }));
export const mouseup = Observable.fromEvent(canvas, 'mouseup')
    .map(event => ({ x: event.offsetX, y: event.offsetY }));
export const mousemove = Observable.fromEvent(canvas, 'mousemove')
    .map(event => ({ x: event.offsetX, y: event.offsetY }));

