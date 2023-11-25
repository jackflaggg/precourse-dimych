// Просто пример:
let marks = [{
    title: 'JS',
    value: 10,
},
    {
        title: 'CS',
        value: 6,
    }
];

let arr = [1, 2, 3, true];

for (let index = 0; index < arr.length; index++){
    console.log(arr[index]);
}
// отобразим в консоли все заголовки с оценками
for (let i = 0; i <= marks.length; i++) {
    let mark = marks[i];
    console.log("title: " + marks.title, ", mark: " + marks.value);
}
