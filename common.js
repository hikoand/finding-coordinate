const circle = document.querySelector('.circle-wrap');
const circle_coordinate = document.querySelector('.circle-coordinate');
const coordinate_text = document.querySelector('.circle-coordinate p');

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  circle.style.left = mouseX + 30 + 'px';
  circle.style.top = mouseY + 10 + 'px';

  circle_coordinate.style.left = mouseX + 'px';
  circle_coordinate.style.top = mouseY + 'px';

  coordinate_text.innerHTML = `X: ${mouseX} <br> Y: ${mouseY}`;
});

const click_here = document.querySelector('.img-wrap');
const kurapika = document.querySelector('.kurapika');
console.log(click_here);

click_here.addEventListener('click', (event) => {
  kurapika.src = 'images/kuruta.png';
});
