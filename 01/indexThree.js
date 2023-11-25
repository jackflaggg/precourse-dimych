let currentUser = {
    name: 'Rasul',
};

let card1 = {
    type: 'debit',
    isActive: true,
    networkType: 'mastercard',
    currencyType: 'USD',
    currentBalance: 5750.53,
    number: 5282345678901289,
    expirationYear: 2025,
    expirationMonth: 9
};

let card2 = {
    type: 'credit',
    isActive: false,
    networkType: 'visa',
    currencyType: 'EUR',
    currentBalance: 1343.53,
    number: 9232654321012032,
    expirationYear: 2026,
    expirationMonth: 4
};

let cards = [card1, card2];

//render
document.write('<h1>', 'Hello, ' + currentUser.name, '</h1>');
document.write('<h2>', 'Cards: ', '</h2>');

for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    document.write('<div>');
    document.write('<b>', card.type + ' card', '</b>', '<br>');
    document.write('<b>', card.networkType, '</b>', '<br>');
    document.write('<b>','current balance','</b>', '<br>');
    document.write('<span>', card.currentBalance,'</span>', '<br>');
    document.write('<h4>', card.number,'</h4>');
    document.write('<span>', card.expirationMonth, '/', card.expirationYear, '</span>');
    document.write('</div>');
}

