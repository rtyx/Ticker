var headlines = document.getElementsByClassName('list');
var container = document.getElementById('container');
var moveLeft = 100;
var firstChild = headlines[0];
var movingAnimation;

function moveHeadLines() {
    moveLeft = moveLeft - 2;
    container.style.left = moveLeft + "px";
    if (firstChild.offsetWidth + container.offsetLeft < 0) {
        var removed = container.removeChild(headlines[0]);
        container.appendChild(removed);
        moveLeft = moveLeft + firstChild.offsetWidth;
        firstChild = headlines[0];
    }
    movingAnimation = window.requestAnimationFrame(moveHeadLines);
}

container.addEventListener("mouseover", function stopThere() {
    window.cancelAnimationFrame(movingAnimation);
});

container.addEventListener("mouseout", function resume() {
    movingAnimation = window.requestAnimationFrame(moveHeadLines);
});

movingAnimation = window.requestAnimationFrame(moveHeadLines);
