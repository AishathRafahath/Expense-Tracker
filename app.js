
let nameInput = document.getElementById('name_input');
let dateInput = document.getElementById('date_input');
let amountInput = document.getElementById('amount_input');
let addExpenses = document.getElementById('add_Expenses');
let thetable = document.getElementById('table');
let count = -1;
let dataArray = []
let collectedData = {};

addExpenses.addEventListener("click",function(e){
    e.preventDefault();
    collectedData = {
        name: nameInput.value,
        date: dateInput.value,
        amount: amountInput.value
    }
    dataArray.push(collectedData);
    nameInput.value = ""
    dateInput.value = ""
    amountInput.value = ""
    render(dataArray);


})

function render(object){


    for(let i=0; i<1; i++){
        count ++;
       let row = document.createElement("tr");
       row.setAttribute("id",`row${count}`)
       let nameCell = document.createElement("th");
            nameCell.textContent = object.name;
       let dateCell = document.createElement("th");
            dateCell.textContent = object.date;
       let amountCell = document.createElement("th");
           amountCell.textContent = object.amount;
        let delCell = document.createElement("th");
        let delBtn = document.createElement("button")
            delBtn.textContent = "x"
            delBtn.className = "del"

            delBtn.addEventListener("click",function(){
                return function deleteRow(count){
                    let idkwhatimdoing = document.getElementById(`row${count}`)
                    idkwhatimdoing.remove()

                }
            })

        // console.log(count);
        console.log(dataArray)

       row.appendChild(nameCell);
       row.appendChild(dateCell);
       row.appendChild(amountCell);
       delCell.appendChild(delBtn);
       row.appendChild(delCell);
       thetable.appendChild(row);

    }
}
// button removes item from array
// displays new array on page

