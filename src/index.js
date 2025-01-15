import './style.css';
import validateCardNumber from './scripts/validateCardNumber';
import getCardType from './scripts/getCardType';

document.querySelector('.validate-btn').addEventListener('click', () => {
  const cardNumber = document.querySelector('.card-number').value.trim();
  const resultDiv = document.querySelector('.result');

  if (validateCardNumber(cardNumber)) {
    const cardType = getCardType(cardNumber);
    resultDiv.textContent = `Valid card (${cardType})`;
    showCardIcon(cardType);
  } else {
    resultDiv.textContent = 'Invalid card number';
  }
});

function showCardIcon(cardType) {
  const icons = document.querySelectorAll('.card-icons img');
  icons.forEach(icon => {
    const type = icon.dataset.type;
    if (type.toLowerCase() === cardType.toLowerCase()) {
      icon.src = require(`./assets/${type.toLowerCase()}.png`); 
    } else {
      icon.src = require(`./assets/${type.toLowerCase()}-gr.png`); 
    }
  });
}