const left = document.querySelector("#left");
const right = document.querySelector("#right");
const point = document.querySelector("#items");

const step = items.firstElementChild.getBoundingClientRect().width;
const slidesInView = 1;
const maxRight = (items.children.length - slidesInView) * step;
const minRight = 0;
let currentRight = 0;

right.addEventListener('click', e =>{
  if (currentRight < maxRight) {
    currentRight += step;
    point.style.right = `${currentRight}px`;
  } else {
    currentRight = 0;
    items.style.right = 0;
  }
  e.preventDefault();
})

left.addEventListener('click', e =>{
  if (currentRight > 0){
    currentRight -= step;
    point.style.right = `${currentRight}px`;
  } else {
    currentRight = maxRight;
    items.style.right = maxRight + `px`;
  }
  e.preventDefault();
})
