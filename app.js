
let nameInput = document.getElementById('name_input');
let dateInput = document.getElementById('date_input');
let amountInput = document.getElementById('amount_input');
let addExpenses = document.getElementById('add_Expenses');
let thetable = document.getElementById('table');


let allInputArray = [
    {name : nameInput.value,
     date :  dateInput.value,
     amount : amountInput.value
    },

]

addExpenses.addEventListener("click",function(){
    allInputArray.name.push();
    render(allInputArray)
})
function render(array){
    array.forEach(function(spending,index){
        let row = document.createElement("tr")
        let cellone = document.createElement("th")
            cellone.textContent = array.name;
        let celltwo = document.createElement("th")
            celltwo.textContent = array.date;
        let cellthree = document.createElement("th")
            cellthree.textContent = array.amount;
        row.appendChild(cellone);
        row.appendChild(celltwo);
        row.appendChild(cellthree);
        thetable.appendChild(row)
    })
}
// When i input something and when i press enter I want to console log howdy

