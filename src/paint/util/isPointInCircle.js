export default function (centerX, centerY, radius, x, y) {
    let dx = centerX - x;
    let dy = centerY - y;
    dx *= dx;
    dy *= dy;
    const distanceSquared = dx + dy;
    const radiusSquared = radius * radius;
    
    return distanceSquared <= radiusSquared;
}
