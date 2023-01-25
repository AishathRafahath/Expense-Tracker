const nameInput = document.getElementById('name_input');
const dateInput = document.getElementById('date_input');
const amountInput = document.getElementById('amount_input');
const addExpenses = document.getElementById('add_Expenses');
const tableBody = document.getElementById('table-Body');
let expenseArray = [];
let dataObject = {}
let count = -1;

// document.getElementById('name_input');
// document.getElementById('name_input');
window.addEventListener("load",function (){
    let arr = JSON.parse(localStorage.getItem("spendings"))
    renderExpenses(arr,count);
 })


addExpenses.addEventListener("click",function(e){
    e.preventDefault();
    dataObject = {
     spentOn: nameInput.value,
     date: dateInput.value,
     amount: amountInput.value

    }

    expenseArray.push(dataObject);
    localStorage.setItem("spendings",JSON.stringify(expenseArray))
    count++;
    console.log(count);
    renderExpenses(expenseArray,count)

    /* works */
   
})

function renderExpenses(array,id){
// I want to scan through the array, pick each object and and put its values in it's respective cells.
    tableBody.innerHTML = ""

    for(let i = 0; i<array.length; i++){
        tableBody.innerHTML += `
           <tr>
            <td class="name">${array[i].spentOn}</td>
            <td class="date">${array[i].date}</td>
            <td class="amount">${array[i].amount}</td>
            <td><button onclick="del(id)">x</button</td>
           </tr>
        `
    }
}

function del(index){
    expenseArray.splice(index,1);
    renderExpenses(expenseArray);
    localStorage.setItem("spendings",JSON.stringify(expenseArray))
}





