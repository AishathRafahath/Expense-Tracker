
let nameInput = document.getElementById('name_input');
let dateInput = document.getElementById('date_input');
let amountInput = document.getElementById('amount_input');
let addExpenses = document.getElementById('add_Expenses');
let thetable = document.getElementById('table');

let dataArray = []

addExpenses.addEventListener("click",function(e){
    e.preventDefault();
    let collectedData = {
        name: nameInput.value,
        date: dateInput.value,
        amount: amountInput.value
    }
    dataArray.push(collectedData);
    nameInput.value = ""
    dateInput.value = ""
    amountInput.value = ""
    console.log(dataArray);
    render(collectedData);


})

function render(object){
    for(let i=0; i<1; i++){
       let row = document.createElement("tr");
       let nameCell = document.createElement("th")
            nameCell.textContent = object.name;
       let dateCell = document.createElement("th")
            dateCell.textContent = object.date;
       let amountCell = document.createElement("th")
           amountCell.textContent = object.amount;

       row.appendChild(nameCell);
       row.appendChild(dateCell);
       row.appendChild(amountCell);

        thetable.appendChild(row);

        console.log('howdy');
    }
}





// When i input something and when i press enter I want to console log howdy

