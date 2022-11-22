// Write your solution in this file!
var customerName = "bob";


function upperCaseCustomerName() {
   customerName = customerName.toUpperCase();
   console.log(customerName);
}

function setBestCustomer() {
    bestCustomer = "not bob";
    console.log(bestCustomer);
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
    console.log(bestCustomer);
}

const leastFavoriteCustomer = "manny";
function changeLeastFavoriteCustomer() {
    return leastFavoriteCustomer = "clair";
}