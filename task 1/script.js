// (function () {
//   let screen = document.querySelector(".screen");
//   let buttons = document.querySelectorAll(".btn");
//   let clear = document.querySelector(".btn-clear");
//   let equal = document.querySelector(".btn-equal");
//   let delValue = document.getElementById("del");

//   window.onload = () => {
//     input.value = "";
//   };

//   buttons.forEach(function (button) {
//     button.addEventListener("click", function (e) {
//       let value = e.target.dataset.num;
//       screen.value += value;
//     });
//   });

//   equal.addEventListener("click", function (e) {
//     e.preventDefault();
//     if (screen.value === "") {
//       screen.value = "";
//     } else {
//       let answer = eval(screen.value);
//       screen.value = answer;
//     }
//   });

//   clear.addEventListener("click", function (e) {
//     e.preventDefault();
//     screen.value = "";
//   });

//   delValue.addEventListener("click", () => {
//     input.value = input.value.substr(0, input.value.length - 1);
//   });
// })();



let equal_pressed = 0;
//Refer all buttons excluding AC and DEL
let button_input = document.querySelectorAll(".input-button");
//Refer input,equal,clear and erase
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
  input.value = "";
};

//Access each class using forEach
button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equal_pressed == 1) {
      input.value = "";
      equal_pressed = 0;
    }
    //display value of each button
    input.value += button_class.value;
  });
});

//Solve the user's input when clicked on equal sign
equal.addEventListener("click", () => {
  equal_pressed = 1;
  let inp_val = input.value;
  try {
    //evaluate user's input
    let solution = eval(inp_val);
    //True for natural numbers
    //false for decimals
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
  } catch (err) {
    //If user has entered invalid input
    alert("Invalid Input");
  }
});

//Clear Whole Input
clear.addEventListener("click", () => {
  input.value = "";
});
//Erase Single Digit
erase.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});

