const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', event => {
  const valueTrimmed = event.target.value.trim();
  if (valueTrimmed === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = valueTrimmed;
  }
});
