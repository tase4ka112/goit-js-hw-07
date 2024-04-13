const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {};

  const formElements = event.target.elements;

  for (let element of formElements) {
    if (element.type !== 'submit') {
      const trimmedValue = element.value.trim();
      formData[element.name] = trimmedValue;
    }
  }

  const formValues = Object.values(formData);
  if (formValues.some(value => value === '')) {
    alert('All form fields must be filled in');
    return;
  }

  console.log(formData);

  event.target.reset();
});
