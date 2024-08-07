window.addEventListener('DOMContentLoaded', function () {
    var popupElement = document.querySelector('.popup');
    if (popupElement) {
        setTimeout(function () {
            popupElement.style.display = 'none';
        }, 5000);
    } else {
        console.log('No element with class .popup found');
    }
});