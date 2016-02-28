import isPointInCircle from './isPointInCircle';

export default function (context, centerX, centerY, radius) {
    const x = centerX + Math.trunc(Math.random() * radius * 2) - radius;
    const y = centerY + Math.trunc(Math.random() * radius * 2) - radius;
    if (isPointInCircle(centerX, centerY, radius, x, y)) {
        context.fillRect(x, y, 1, 1);
    }
}


