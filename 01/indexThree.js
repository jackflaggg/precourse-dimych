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

//render
document.write('<h1>', 'Hello, ' + currentUser.name, '</h1>');
document.write('<h2>', 'Cards: ', '</h2>');

//render card 1
document.write('<div>');
document.write('<b>', card1.type + ' card', </b>', '<br>');
document.write('<b>', card1.networkType, '</b>', '<br>');
document.write('<b>','current balance','</b>', '<br>');
document.write('<span>', card1.currentBalance,'</span>', '<br>');
document.write('<h4>', card1.number,'</h4>');
document.write('<span>', card1.expirationMonth, '/', card1.expirationYear, '</span>');
document.write('</div>');

//render card 2
document.write('<div>');
document.write('<b>', card2.type + ' card', </b>', '<br>');
document.write('<b>', card2.networkType, '</b>', '<br>');
document.write('<b>','current balance','</b>', '<br>');
document.write('<span>', card2.currentBalance,'</span>', '<br>');
document.write('<h4>', card2.number,'</h4>');
document.write('<span>', card2.expirationMonth, '/', card2.expirationYear, '</span>');
document.write('</div>');