let decrease = document.querySelector('.decrease'),
  increase = document.querySelector('.increase'),
  number = document.querySelector('.number'),
  reset = document.querySelector('.reset'),
  counter = document.querySelector('.counter');
count = 0;
number.style.color = 'grey';

increase.addEventListener('click', function () {
  count++;
  number.innerHTML = count;
  if (count > 0) {
    number.style.color = 'green';
  } else if (count == 0) {
    number.style.color = 'grey';
  }
})

decrease.addEventListener('click', function () {
  count--;
  number.innerHTML = count;
  if (count < 0) {
    number.style.color = 'red';
  } else if (count == 0) {
    number.style.color = 'grey';
  }
})

reset.addEventListener('click', function () {
  count = 0;
  number.innerHTML = count;
  number.style.color = 'grey';
})