// Array of 50 different colors
const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#F0F8FF', '#FAEBD7', '#FFBF00',
    '#FF8C00', '#FF6347', '#FF1493', '#C71585', '#D2691E', '#CD5C5C',
    '#4B0082', '#FFD700', '#ADFF2F', '#FF69B4', '#8A2BE2', '#A52A2A',
    '#DEB887', '#5F9EA0', '#7FFF00', '#D2691E', '#FF7F50', '#6495ED',
    '#FFF8DC', '#DC143C', '#00FFFF', '#00008B', '#008B8B', '#B8860B',
    '#A9A9A9', '#006400', '#BDB76B', '#8B008B', '#FF4500', '#2E8B57',
    '#FFD700', '#DAA520', '#808080', '#008000', '#ADFF2F', '#F0E68C',
    '#B0E57E', '#8A2BE2', '#A52A2A', '#DEB887', '#5F9EA0', '#7FFF00',
    '#D2691E', '#FF7F50', '#6495ED', '#FFF8DC', '#DC143C', '#00FFFF'
];

function changeColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}

// Event listeners for space key press and screen touch
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        changeColor();
    }
});

document.addEventListener('touchstart', function() {
    changeColor();
});
