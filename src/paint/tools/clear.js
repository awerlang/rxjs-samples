import {canvas, context} from './canvas';

export function clear() {

    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    return {
        dispose: () => {
        }
    };

}
