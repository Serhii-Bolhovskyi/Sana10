let text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ea earum incidunt minima nihil. Blanditiis consectetur cumque debitis delectus dolor dolorem dolorum, eos laboriosam, modi nemo, quasi quos sint voluptatibus!`;
const arrText = text.split(" ");
const indexOfWords = [12, 6, 18, 25];
const newStr = arrText.filter((_, index) => indexOfWords.includes(index)).join(" ");
console.log(newStr)