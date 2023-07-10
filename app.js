const boxes = document.querySelector(".grids");
const result = document.querySelector(".resultbox");
let expr = "";
let number = "";
boxes.addEventListener("click", function (event) {
  handleEvent(event);
});
function handleEvent(event) {
  let value = event.target.textContent;
  if (value === "x") value = "*";
  if (value === "C") {
    resetAll();
  } else if (value === "=") {
    let ans = eval(expr).toString();
    expr = ans;
    result.textContent = ans;
  } else if ((value >= "0" && value <= "9") || value === ".") {
    number += value;
    result.textContent = number;
  } else {
    number = "";
    result.textContent = value;
  }
  if (value != "C" && value != "=") expr += value;
  console.log(expr);
}
function resetAll() {
  expr = "";
  number = "";
  result.textContent = "0";
}
