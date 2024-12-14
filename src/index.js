import './style.css';
import validateCardNumber from './scripts/validateCardNumber';
import getCardType from './scripts/getCardType';

document.getElementById('validate-btn').addEventListener('click', () => {
  const cardNumber = document.getElementById('card-number').value.trim();
  const resultDiv = document.getElementById('result');
  
  if (validateCardNumber(cardNumber)) {
    const cardType = getCardType(cardNumber);
    resultDiv.textContent = `Valid card (${cardType})`;
    showCardIcon(cardType);
  } else {
    resultDiv.textContent = 'Invalid card number';
  }
});

function showCardIcon(cardType) {
  const icons = document.querySelectorAll('#card-icons img');
  icons.forEach(icon => {
    const type = icon.dataset.type;
    if (type === cardType) {
      icon.src = `./assets/${type.toLowerCase()}.png`; 
    } else {
      icon.src = `./assets/${type.toLowerCase()}-gr.png`; 
    }
  });
}
