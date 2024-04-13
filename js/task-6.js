function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('input[type="number"]');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createButton.addEventListener('click', () => {
  const amount = parseInt(input.value);

  if (amount < 1 || amount > 100) {
    alert('Будь ласка, введіть число від 1 до 100');
    return;
  }

  createBoxes(amount);
  input.value = '';
});

destroyButton.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();

  let size = 30;
  let boxesHTML = '';

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    boxesHTML += `<div style="width: ${size}px; height: ${size}px; background-color: ${color}; margin-bottom: 10px;"></div>`;
    size += 10;
  }

  boxesContainer.insertAdjacentHTML('beforeend', boxesHTML);
}

