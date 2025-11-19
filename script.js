const marquee = document.getElementById('marquee');
const container = document.querySelector('.container');
let direction = 1; // 1 = direita, -1 = esquerda
let position = 0;
const speed = 2; // pixels por frame

function animate() {
  const maxPosition = container.clientWidth - marquee.clientWidth;
  position += direction * speed;

  if (position >= maxPosition || position <= 0) {
    direction *= -1; // inverte a direção
  }

  marquee.style.left = position + 'px';
  requestAnimationFrame(animate);
}

// Inicializa a posição
marquee.style.left = '0px';
animate();
