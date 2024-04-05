const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

let w,
  h,
  balls = [];
let mouse = {
  x: undefined,
  y: undefined
};
let rgb = [
  'rgb(26, 188, 156)',
  'rgb(46, 204, 113)',
  'rgb(52, 152, 219)',
  'rgb(155, 89, 182)',
  'rgb(241, 196, 15)',
  'rgb(230, 126, 34)',
  'rgb(231, 76, 60)'
];

function init() {
  resizeReset();
  animationLoop();
}

function resizeReset() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}

function animationLoop() {
  ctx.clearRect(0, 0, w, h);
  ctx.globalCompositeOperation = 'lighter';
  drawBalls();

  let temp = [];
  for (let i = 0; i < balls.length; i++) {
    if (balls[i].time <= balls[i].ttl) {
      temp.push(balls[i]);
    }
  }
  balls = temp;
  requestAnimationFrame(animationLoop);
  counter--;
}

function drawBalls() {
  for (let i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].draw();
  }
}

let counter = 0;
let isFiring = false;
const limiter = 70;

function mousemove(e) {
  const movement = Math.abs(e.movementX) + Math.abs(e.movementY);
  
  if (!isFiring) {
    if (movement < limiter) return;
  }
  if(movement < 5) return;
  if (movement > limiter) {
    counter = 30;
    isFiring = true;
  }
  if (counter < 0) return (isFiring = false);

  mouse.x = e.x;
  mouse.y = e.y;

  for (let i = 0; i < 3; i++) {
    balls.push(new Ball(e.movementX, e.movementY));
  }
}

function mouseout() {
  mouse.x = undefined;
  mouse.y = undefined;
}

function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

function easeOutQuart(x) {
  return 1 - Math.pow(1 - x, 4);
}

class Ball {
  constructor(directionX, directionY) {
    this.directionX = directionX;
    this.directionY = directionY;
    this.start = {
      x: mouse.x + getRandomInt(-20, 20),
      y: mouse.y + getRandomInt(-20, 20),
      size: getRandomInt(5, 10)
    };
    this.end = {
      x: this.start.x + getRandomInt(-50, 50) + this.directionX * 5,
      y: this.start.y + getRandomInt(-50, 50) + this.directionY * 5
    };

    this.x = this.start.x;
    this.y = this.start.y;
    this.size = this.start.size;

    this.style = rgb[getRandomInt(0, rgb.length - 1)];

    this.time = 0;
    this.ttl = 125;
  }
  draw() {
    ctx.fillStyle = this.style;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
  update() {
    if (this.time <= this.ttl) {
      let progress = 1 - (this.ttl - this.time) / this.ttl;

      this.size = this.start.size * (1 - easeOutQuart(progress));
      this.x = this.x + (this.end.x - this.x) * 0.01;
      this.y = this.y + (this.end.y - this.y) * 0.01;
    }
    this.time++;
  }
}

window.addEventListener('DOMContentLoaded', init);
window.addEventListener('resize', resizeReset);
window.addEventListener('mousemove', mousemove);
window.addEventListener('mouseout', mouseout);
