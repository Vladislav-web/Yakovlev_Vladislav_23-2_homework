let button = document.querySelector('.button'),
    number = document.querySelectorAll('.number');

   button.addEventListener('click', function (e) {
      number.forEach(e => {
     e.innerHTML = Math.floor(Math.random() * 99);
    });
  })
  
  