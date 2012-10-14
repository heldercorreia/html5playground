function updateSizeInfo() {
    var vp = viewport();
    document.getElementById("sizeText").innerText = vp.width + "x" + vp.height;
}

window.onresize = function() {
    updateSizeInfo();
}

updateSizeInfo();

