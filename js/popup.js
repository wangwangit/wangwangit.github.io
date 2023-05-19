window.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
      document.querySelector('.popup').style.display = 'none';
    }, 5000);
  });
  
  function closePopup() {
    document.querySelector('.popup').style.display = 'none';
  }
  