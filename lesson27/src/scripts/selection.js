const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth
canvas.height = window.innerWidth

canvas.onmousedown = function (e) {
    let x = e.clientX;
    let y = e.clientY;
    context.clearRect(0, 0, window.innerWidth, window.innerWidth);
    context.fillStyle = "rgba(133, 178, 221, 0.8)";
    context.fillRect(x, y, 1, 1);

    canvas.onmousemove = function (e) {
        let xEnd = e.clientX;
        let yEnd = e.clientY;
        context.fillRect(x, y, xEnd - x, yEnd - y);
    }
}
canvas.onmouseup = function (e) {
    canvas.onmousemove = null;
}