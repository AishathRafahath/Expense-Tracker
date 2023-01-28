let nameInput = document.getElementById("name_input");
let dateInput = document.getElementById("date_input");
let amountInput = document.getElementById("amount_input");
let addBtn = document.getElementById("add_Expenses");
let tableBody = document.getElementById("table-Body");
let budgetInput = document.getElementById("budget_input");
let budgetvalue = document.getElementById("budget-value");
let addBudget = document.getElementById("add-budget");
let inputObject = {};
let inputArray = [];

// if(budgetvalue.value){
//     window.addEventListener("load",function(){
//         budgetvalue.textContent = localStorage.getItem("budgetValue")
//     })
// }



let value = localStorage.getItem("budgetValue")
budgetvalue.textContent = value;

addBudget.addEventListener("click",function(){
    if(budgetInput.value && budgetInput.value > 0){
        budgetvalue.textContent = budgetInput.value;
        localStorage.setItem("budgetValue",budgetvalue.textContent)
    }
    
    
})



    let dataFromstorage = JSON.parse(localStorage.getItem("inputData"));
    if(dataFromstorage){
        inputArray = dataFromstorage;
        renderExpenses(inputArray)
    }


addBtn.addEventListener("click",function(e){
    if((nameInput.value)&&(dateInput.value)&&(amountInput.value)){
    e.preventDefault();
     inputObject = {
        name : nameInput.value,
        date : dateInput.value,
        amount : amountInput.value
    }

    inputArray.push(inputObject)
    localStorage.setItem("inputData",JSON.stringify(inputArray))
    renderExpenses(inputArray)

   let value =  budgetvalue.textContent;
   let changedValue = +value
   let newValue = changedValue - inputObject.amount;
   budgetvalue.textContent = newValue;
   localStorage.setItem("budgetValue",budgetvalue.textContent);
}
    nameInput.value = "";
    dateInput.value = "";
    amountInput.value = "";

})

function renderExpenses(array){
    tableBody.innerHTML = ""
    array.forEach(function(object,index){
        let row = document.createElement("tr");
        row.className = "bodyRow"
        let nameCell = document.createElement("td");
            nameCell.innerText = object.name;
            nameCell.className = "Cell"
        let dateCell = document.createElement("td");
            dateCell.innerText = object.date;
            dateCell.className = "Cell"
        let amountCell = document.createElement("td");
            amountCell.innerText = object.amount
            amountCell.className = "Cell"
        let btnCell = document.createElement("td");
        btnCell.className = "Cell"
        let btnEl = document.createElement("button");
            btnEl.innerText = "x"
            btnEl.className = "delBtn"

            btnEl.addEventListener("click",function(){
                deleteObject(object,index)
            })

            tableBody.appendChild(row);
            row.appendChild(nameCell)
            row.appendChild(dateCell)
            row.appendChild(amountCell)
            row.appendChild(btnCell)
            btnCell.appendChild(btnEl);

            console.log(index)

    })
}

function deleteObject(obj,id){
  
    let add = budgetvalue.textContent;
    let changedtoNumber = +add;
    let objamountToNum = +obj.amount
    let newValue = changedtoNumber + objamountToNum;
    budgetvalue.textContent = newValue;
    value = localStorage.setItem("budgetValue",budgetvalue.textContent)
    console.log(newValue)
   
    
    inputArray.splice(id,1);
    localStorage.setItem("inputData",JSON.stringify(inputArray))
    renderExpenses(inputArray);

}

