const body = document.querySelector("body");
const countDiv = 3;
let countTr = 3, countTd = 3 ;
for (let i = 1; i <= countDiv; i++) {
    const newDiv = document.createElement("div");
    newDiv.className = 'table'
    const newTable = document.createElement("table");


    for (let j = 0; j < countTr; j++) {
        const newTr = document.createElement("tr");

        for (let k = 0; k < countTd; k++) {
            const newTd = document.createElement("td");
            // newTd.textContent = `${j + 1}, ${k + 1}`;
            newTr.appendChild(newTd);
        }

        newTable.appendChild(newTr);
    }
    newDiv.appendChild(newTable);
    body.appendChild(newDiv);
    countTr++;
    countTd++;
}

const tables = document.querySelectorAll(".table");

tables.forEach(table => {
    const cells = table.querySelectorAll("td");

    cells.forEach((cell, index) => {
        if ((index + 1) % 2 === 0) {
            cell.classList.add("selected");
        }
    });
});