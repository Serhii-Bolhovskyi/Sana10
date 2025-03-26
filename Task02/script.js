let text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ea earum incidunt minima nihil. Blanditiis consectetur cumque debitis delectus dolor dolorem dolorum, eos laboriosam, modi nemo , quasi quos sint voluptatibus!`;

const arrText = text.split(" ");
const indexOfWords = [12, 6, 18, 25];

const newText = arrText.filter((_, index) => indexOfWords.includes(index)).join(" ");
const lowerText = newText.toLowerCase();

let target = "in"
let regex = new RegExp(`\\w*${target}\\w*`, "gi");
let matches = text.match(regex);

function reversetext(text) {
    return text.split("").reverse().join("")
}

function ucFirst(txt) {
    let newTxt = txt[0].toUpperCase() + txt.slice(1);
    return newTxt;
}

console.log(newText);
console.log(lowerText);
console.log(matches);
console.log(arrText);
console.log(reversetext(text));
console.log(ucFirst("some text"));
