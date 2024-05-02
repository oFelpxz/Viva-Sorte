const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");
const inputField = document.querySelector("#input");

const ticket1 = document.querySelector("#ticket1")
const ticket2 = document.querySelector("#ticket2")
const ticket3 = document.querySelector("#ticket3")
const ticket4 = document.querySelector("#ticket4")
const ticket5 = document.querySelector("#ticket5")
const ticket6 = document.querySelector("#ticket6")

// Pega o valor inicial.
let currentValue = parseInt(inputField.value, 10) || 10; //Caso falhe, ele assume que o valor é 10

plusButton.addEventListener("click", function() {
  // Troca o valor do currentValue
  currentValue = Math.min(currentValue + 10, 500); // Limite de 500

  // Atualiza o valor no site.
  inputField.value = currentValue;
});

minusButton.addEventListener("click", function() {
  // Troca o valor do currentValue
  currentValue = Math.max(currentValue - 10, 0); // Limite mínimo para 0

  // Atualiza no site o valor
  inputField.value = currentValue;
});

// Ticket 1
ticket1.addEventListener("click",function(){
  currentValue = 10

  inputField.value = currentValue
})

// Ticket 2
ticket2.addEventListener("click",function(){
  currentValue = 20

  inputField.value = currentValue
})

// Ticket 3
ticket3.addEventListener("click",function(){
  currentValue = 50

  inputField.value = currentValue
})


// Ticket 4
ticket4.addEventListener("click",function(){
  currentValue = 100

  inputField.value = currentValue
})

// Ticket 5
ticket5.addEventListener("click",function(){
  currentValue = 200

  inputField.value = currentValue
})

// Ticket 6
ticket6.addEventListener("click",function(){
  currentValue = 500

  inputField.value = currentValue
})

console.log("Initial value:", currentValue); // Loga o valor inicial.
