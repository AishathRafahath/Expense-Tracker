const nameInput = document.getElementById('name_input');
const dateInput = document.getElementById('date_input');
const amountInput = document.getElementById('amount_input');
const addExpenses = document.getElementById('add_Expenses');
let expenseArray = [];
// document.getElementById('name_input');
// document.getElementById('name_input');

/* works */

addExpenses.addEventListener("click",function(){
    let dataObject = {
        name: nameInput.value,
        date: dateInput.value,
        amount: amountInput.value
    }

    expenseArray.push(dataObject);
    console.log(dataObject)
})



