const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');

const circle_coordinate = document.querySelector('.circle-coordinate');
const coordinate_text = document.querySelector('.circle-coordinate p');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  // 수직수평선 위치변경
  vertical.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;

  // 이미지 위치변경
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;

  circle_coordinate.style.left = `${x}px`;
  circle_coordinate.style.top = `${y}px`;

  coordinate_text.innerHTML = `X: ${x} <br> Y: ${y}`;
});

const click_here = document.querySelector('.img-wrap');
const kurapika = document.querySelector('.kurapika');
console.log(click_here);

click_here.addEventListener('click', (event) => {
  kurapika.src = 'images/kuruta.png';
});
