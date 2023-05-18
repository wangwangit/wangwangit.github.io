window.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
      document.querySelector('.popup').style.display = 'none';
    }, 3000);
  });
  
  function closePopup() {
    document.querySelector('.popup').style.display = 'none';
  }
  