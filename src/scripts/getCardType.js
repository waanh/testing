export default function getCardType(cardNumber) {
    const cleaned = cardNumber.replace(/\D/g, '');
  
    if (/^4/.test(cleaned)) return 'Visa';
    if (/^5[1-5]/.test(cleaned)) return 'MasterCard';
    if (/^3[47]/.test(cleaned)) return 'American Express';
    if (/^6(?:011|5)/.test(cleaned)) return 'Discover';
    if (/^35(2[89]|[3-8][0-9])/.test(cleaned)) return 'JCB';
    if (/^220[0-4]/.test(cleaned)) return 'Mir';
    
    return 'Unknown';
  }
  