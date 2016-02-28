import {mousedown, mousemove, mouseup} from './streams';
import {context} from './canvas';

export function pen() {

    context.lineWidth = 10;

    const s1 = mousedown
        .subscribe(coord => {
            context.beginPath();
            context.moveTo(coord.x, coord.y);
        });
    const s2 = mousemove
        .pausable(
            mousedown.mapTo(true).merge(mouseup.mapTo(false)))
        .subscribe(coord => {
            context.lineTo(coord.x, coord.y);
            context.stroke();
        });

    return {
        dispose: () => {
            s1.unsubscribe();
            s2.unsubscribe();
        }
    };

}
