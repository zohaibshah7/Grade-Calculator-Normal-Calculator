// Grade Calculator
function calculateGrade() {
    var english = parseInt(document.getElementById("english").value);
    var math = parseInt(document.getElementById("math").value);
    var physics = parseInt(document.getElementById("physics").value);
    var islamiyat = parseInt(document.getElementById("islamiyat").value);
    var urdu = parseInt(document.getElementById("urdu").value);
    var biology = parseInt(document.getElementById("biology").value);
    var chemistry = parseInt(document.getElementById("chemistry").value);

    var total = english + math + physics + islamiyat + urdu + biology + chemistry;
    var average = total / 7;
    var grade;

    if (average >= 90) {
      grade = 'A😎';
    } else if (average >= 80) {
      grade = 'B😏';
    } else if (average >= 70) {
      grade = 'C🤨';
    } else if (average >= 60) {
      grade = 'D🥱';
    } else {
      grade = 'Fail🤣';
    }

    document.getElementById("result").innerHTML = "Your grade is: " + grade;
}

let screen = document.getElementById('calc-screen');

// Simple Calculator
let buttons = {
  'btn-0': '0',
  'btn-1': '1',
  'btn-2': '2',
  'btn-3': '3',
  'btn-4': '4',
  'btn-5': '5',
  'btn-6': '6',
  'btn-7': '7',
  'btn-8': '8',
  'btn-9': '9',
  'btn-plus': '+',
  'btn-minus': '-',
  'btn-multiply': '*',
  'btn-dot': '.',
  'btn-clear': 'C',
  'btn-equal': '='
};

// Add event listeners to each button
for (let btnId in buttons) {
  let btn = document.getElementById(btnId);
  btn.addEventListener('click', function() {
    if (btnId === 'btn-clear') {
      screen.value = '';
    } else if (btnId === 'btn-equal') {
      try {
        screen.value = eval(screen.value);
      } catch (error) {
        screen.value = 'Error';
      }
    } else {
      screen.value += buttons[btnId];
    }
  });
}