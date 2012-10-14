var eventText = document.getElementById("eventText");
var keyCodeText = document.getElementById("keyCodeText");
var charCodeText = document.getElementById("charCodeText");
var whichText = document.getElementById("whichText");

function printCode(ev) {
    keyCodeText.innerText = ev.keyCode;
    charCodeText.innerText = ev.charCode;
    whichText.innerText = ev.which;
}

function onKeyPressEvent(ev) {
    console.log("press");
    eventText.innerText = "press";
    printCode(ev);
}

function onKeyDownEvent(ev) {
    console.log("down");
    eventText.innerText = "down";
    printCode(ev);
}

function onKeyUpEvent(ev) {
    console.log("up");
    eventText.innerText = "up";
    printCode(ev);
}

document.onkeypress = onKeyPressEvent;
document.onkeydown = onKeyDownEvent;
document.onkeyup = onKeyUpEvent;
