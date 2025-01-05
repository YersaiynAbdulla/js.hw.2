// task 2
let array = [0, 6, 4, 8, 2, 9, 100, 6, 8];

// max number in array
let max = array[0];
for (let i = 1; i < array.length; i++) {
    if (max < array[i]) {
        max = array[i];
    }
}
console.log(max);

// min number in array
let min = array[0];
for (let i = 1; i < array.length; i++) {
    if (min > array[i]) {
        min = array[i];
    }
}
console.log(min);

// arifmeticMean of the numbers of array
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
let arifmeticMean = sum / array.length;
console.log(arifmeticMean);


// task 3
for (let i = 1; i <= 10; i++) {
    let row = "";
    for (let j = 1; j <= 10; j++) {
        row += (i * j).toString().padStart(4);
    }
    console.log(row);
}

// task 4
function isLetter(char) {
    let code = char.charCodeAt(0);
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122); 
}

function isDigit(char) {
    let code = char.charCodeAt(0);
    return code >= 48 && code <= 57;
}

function isSpace(char) {
    let code = char.charCodeAt(0);
    return code === 32;
}

let letters = 0;
let digits = 0;
let spaces = 0;

let inputString = 'String from user_001';
for (let i = 0; i < inputString.length; i++) {
    if (isLetter(inputString[i])) {
        letters++;
    }
    else if (isDigit(inputString[i])) {
        digits++;
    }
    else if (isSpace(inputString[i])) {
        spaces++;
    }
}
console.log(letters);
console.log(digits);
console.log(spaces);

// task 5
function factorial(number) {
    if (!Number.isInteger(number) || number < 0) {
        console.error('The number must be non-negative integer!');
        return null;
    }
    let fact = 1;
    while (number > 0) {
        fact *= number;
        number--;
    }
    return fact;
}

// task 6
function averageGrade(student) {
    let sum = 0;
    for (let grade of student.grades) {
        sum += grade;
    }
    let average = sum / student.grades.length;

    console.log(student.firstName);
    console.log(student.age);
    console.log(average);

    if (average >= 50) {
        student.status = 'passed';
    }
    else {
        student.status = 'did not pass';
    }
    console.log(student.status);
}

let student = {
    firstName: 'Yersaiyn',
    age: 19,
    course: 'PHYS 162',
    grades: [80, 90, 84, 79]
}

averageGrade(student);
