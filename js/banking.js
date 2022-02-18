const depositeButton = document.getElementById("deposit-button");
const withdrawButton = document.getElementById("withdraw-button");



function updateCurency(inputField, curencyDisplay) {
    const amount = parseFloat(document.getElementById(inputField).value);
    if(isNaN(amount)==true || amount < 0){
        alert ("Invalid Number")
    }
    else{
        document.getElementById(curencyDisplay).innerText = amount;
        return amount;
    }
    document.getElementById(inputField).value= " ";
};


function updateTotal(){
    const deposit = parseFloat(document.getElementById("deposit-input").value);
    const withdraw =  parseFloat(document.getElementById("withdraw-input").value);
    const total = parseFloat(document.getElementById("balance-total").innerText);

    const remainingBalance = deposit - withdraw + total;

    document.getElementById("balance-total").innerText= remainingBalance;
    
}

depositeButton.addEventListener("click", function(){
    updateCurency("deposit-input","deposit-total");
    updateTotal()
});
withdrawButton.addEventListener("click", function(){
    updateCurency("withdraw-input","withdraw-total");
});