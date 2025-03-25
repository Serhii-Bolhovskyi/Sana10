const body = document.querySelector('body');
body.style.fontFamily = "Arial";

const div1 = document.getElementById("div1");
div1.style.cssText =
    "color: orange; background: yellow; fontSize: 16px; padding: 5px; text-align: center;";

const div2 = document.getElementById("div2");
div2.style.cssText =
    "color: blue; background: skyblue; fontSize: 14px; padding: 5px; text-align: right;";
const div3 = document.getElementById("div3");
div3.style.cssText =
    "color: red; background: lightcoral; fontSize: 12px; padding: 5px; text-align: left;";

const table = document.getElementById("table");
 for(let i = 0; i < table.rows.length; i++){
     const row = table.rows[i];
     for(let j = 0; j < row.cells.length; j++){
         if ((i + j) % 2 === 0) {
             row.cells[j].classList.add('selected');
         }
     }
 }
