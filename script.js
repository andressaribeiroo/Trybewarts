const inputHeaderEmailV = document.querySelector('#email-header');
const inputHeaderPasswordV = document.querySelector('#password-header');
const btnLogin = document.querySelector('#btn-login');
const contador = document.querySelector('#counter');
const textarea = document.querySelector('#textarea');
const submitBtn = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
const icon = document.querySelector('#icon');
const nome = document.querySelector('#input-name');
const lastname = document.querySelector('#input-lastname');
const emailForm = document.querySelector('#input-email');
const house = document.querySelector('#house');
const form = document.querySelector('#evaluation-form');
const result = document.querySelector('#form-data');
const darkMode = document.querySelector('.material-symbols-outlined');


const formAvaliation = (e) => {
    e.preventDefault();
  
    const family = document.querySelector('input[name=family]:checked');
    const contents = document.querySelectorAll('.subject:checked');
    const note = document.querySelector('input[name=rate]:checked');
  
    result.style.display = 'flex';
    form.style.display = 'none';
    result.innerText = `
    Nome: ${nome.value} ${lastname.value}
    Email: ${emailForm.value}
    Casa: ${house.value}
    Família: ${family.value}
    Matérias: ${[...contents].map((content) => content.value).join(', ')}
    Avaliação: ${note.value}
    Observações: ${textarea.value}
    `;
  };

function submit() {
  submitBtn.disabled = !agreement.checked;
}

window.onload = function check() {
  result.style.display = 'none';
  agreement.addEventListener('change', submit);
};

submitBtn.addEventListener('click', formAvaliation);

textarea.addEventListener('input', () => {
  contador.innerHTML = 500 - textarea.value.length;
});

btnLogin.addEventListener('click', () => {
  if (inputHeaderEmailV.value === 'tryber@teste.com' && inputHeaderPasswordV.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});


icon.addEventListener('click', () => {
  const dark = document.body.classList.toggle('dark');
   if (dark) {
    console.log('dark');
    icon.innerText = 'light_mode';
    icon.style.color = '#fff';
  } else {
    console.log('light');
    icon.innerText = 'dark_mode';
    icon.style.color = '#000';
  }
});
