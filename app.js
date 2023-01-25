const nameInput = document.getElementById('name_input');
const dateInput = document.getElementById('date_input');
const amountInput = document.getElementById('amount_input');
const addExpenses = document.getElementById('add_Expenses');
const tableBody = document.getElementById('table-Body');
let expenseArray = [];
let dataObject = {}

// document.getElementById('name_input');
// document.getElementById('name_input');



addExpenses.addEventListener("click",function(e){
    e.preventDefault();
    dataObject = {
     spentOn: nameInput.value,
     date: dateInput.value,
     amount: amountInput.value

    }

    expenseArray.push(dataObject);

    renderExpenses(expenseArray)

    /* works */
   
})

function renderExpenses(array){
// I want to scan through the array, pick each object and and put its values in it's respective cells.
    tableBody.innerHTML = ""
    for(let i = 0; i<array.length; i++){
        tableBody.innerHTML += `
           <tr>
            <td class="name">${array[i].spentOn}</td>
            <td class="date">${array[i].date}</td>
            <td class="amount">${array[i].amount}</td>
            <td><button onclick="del()">x</button</td>
           </tr>
        `
    }
}

function del(id){
    expenseArray.splice(id,1);
    renderExpenses(expenseArray);
}





