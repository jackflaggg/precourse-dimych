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

document.write('<h1>', 'Hello, ' + currentUser.name, '</h1>');
document.write('<h2>', 'Cards: ', '</h2>');
document.write('div');
document.write('<b>', card1.type + ' card', </b>');
document.write('<b>', card1.networkType, '</b>');
document.write('<b>','current balance','</b>');
document.write('<span>', card1.currentBalance,'</span>');

document.write('div');