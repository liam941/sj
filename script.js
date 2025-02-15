function showMessage() {
    const message = document.getElementById('popup-message');
    message.classList.add('popup-visible');
}

function hideMessage() {
    const message = document.getElementById('popup-message');
    message.classList.remove('popup-visible');
}
