
// Custom Function
function calculateTip() {
    //Store the data Inputs
    var billAmount     = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("service-quality").value;
    var numPeople      = document.getElementById("totalPeople").value;

    // Validation
    if(billAmount === "") {
        return window.alert("Please Enter the Bill Amount");
    } else if(numPeople === "") {
        return window.alert("Please enter the Number of People sharing the Bill");
    } else if(billAmount <= 0) {
        return window.alert("Bill Amount Can\'t be negative");
    } else if(serviceQuality == 0) {
        return window.alert("Please Choose the Service Quality");
    }
  
    if(numPeople < 0) {
        return window.alert("Number of People Amount Can\'t be negative");
    } else if(numPeople == 1) {
        document.getElementById("each").style.display = "none";
    } 
    else {
        document.getElementById("each").style.display = "block";
    }

    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    if(isNaN(total)) {
        window.alert("Please Enter a number for the tip to be calculated");
        return;
    }
    if(total < 1) {
        total = total * 100;
        document.getElementById("cent").style.display = "inline-block";         
        document.getElementById("dollar-sign").style.display = "none"; 
        document.getElementById("total-tip").style.display = "block";  
        document.getElementById("tip").innerHTML = total; 
    } else {
        document.getElementById("total-tip").style.display = "block";  
        document.getElementById("tip").innerHTML = total;  
    }
}

// hide the tip amount
document.getElementById("total-tip").style.display = "none";
document.getElementById("each").style.display = "none";
document.getElementById("cent").style.display = "none";

// Clicking the button for calls for our custom function
document.getElementById("calculate").onclick = function() {calculateTip();};
                         