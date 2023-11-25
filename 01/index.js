// data
let nameC = 'it-incubator';
let graduatesCount = 2000;
let areYouChampion = true;

// ui program, render
document.write('<h1>', nameC, '</h1>');
document.write('<input type="number" value="' + graduatesCount + '">');
document.write('<input type="checkbox"',  areYouChampion ? ' checked': '', '>' );

//console
console.log(nameC, graduatesCount, areYouChampion);