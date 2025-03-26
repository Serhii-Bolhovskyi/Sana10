//task 3.1
const paragraphs = document.querySelectorAll("#paragraphs p");

const lengths = Array.from(paragraphs).map(p => p.innerText.length)
console.log(lengths)

// task 3.2
let arr = [20, 17, 4, -4, 10, -9, 13, 4, 12, 22, 13, 19, 1, 3];
const maxEl = Math.max(...arr);
const minEl = Math.min(...arr)

let even = 0;
let odd = 0;

let moreThanOneNum = 0;

let possitive = 0;
let negative = 0;

for(const i of arr) {
    if (i > 0)
        possitive++;
    else if (i < 0)
        negative++;

    if(i % 2 === 0)
        even++;
    else
        odd++;

    if(i >= 10 || i <= -10) {
        moreThanOneNum++;
    }
}

const newArr = [...arr].sort((a, b) => a -b );
const reverseArr = [...arr].reverse();


console.log("Максимальний елемент масиву: " + maxEl, "Мінімальний елемент масиву: " + minEl);
console.log("К-ть парних чисел: " + even, "К-ть непарних чисел: " + odd);
console.log("К-ть чисел, що містить більше ніж одну цифру: " + moreThanOneNum);
console.log("К-ть додатний чисел: " + possitive, "К-ть відʼємних чисел: " + negative);

console.log(newArr)

console.log(reverseArr)
