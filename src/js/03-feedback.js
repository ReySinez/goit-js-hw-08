import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const formStateKey = 'feedback-form-state';

const saveFormState = () => {
  const formState = {
    email: emailInput.value,
    message: messageInput.value
  };
  localStorage.setItem(formStateKey, JSON.stringify(formState));
};

const loadFormState = () => {
  const savedFormState = localStorage.getItem(formStateKey);
  if (savedFormState) {
    const formState = JSON.parse(savedFormState);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
};

const clearFormState = () => {
  localStorage.removeItem(formStateKey);
  emailInput.value = '';
  messageInput.value = '';
};

form.addEventListener('input', throttle(saveFormState, 500));
window.addEventListener('load', loadFormState);
form.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log({
    email: emailInput.value,
    message: messageInput.value
  });
  clearFormState();
});
