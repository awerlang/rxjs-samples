import {Observable} from 'rxjs/Observable';
import '../rx-imports';
import './operators/pausable';

import {clear, pen, spray} from './tools/index';

const btnClear = document.getElementById('clear');
const btnPen = document.getElementById('pen');
const btnSpray = document.getElementById('spray');

const tools = {
    clear: clear,
    pen: pen,
    spray: spray
};

Observable.fromEvent(btnPen, 'click')
    .mapTo('pen')
    .merge(Observable.fromEvent(btnSpray, 'click')
        .mapTo('spray'))
    .merge(Observable.fromEvent(btnClear, 'click')
        .mapTo('clear'))
    .startWith('pen')
    .distinctUntilChanged()
    .map(tool => tools[tool]())
    .scan((previous, current) => {
        previous.dispose();
        return current;
    })
    .subscribe();
