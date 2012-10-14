// This is just a trick, there is no official way to hide scrollbars.
function hideScrollbars() {
    document.body.style.overflow = 'hidden'; // Works in Google Chrome, Mozilla Firefox, Opera.
    document.body.scroll = "no"; // Works in Microsoft IE.
}
