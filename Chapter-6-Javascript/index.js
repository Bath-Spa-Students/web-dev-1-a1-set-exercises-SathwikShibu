document.addEventListener("DOMContentLoaded", function() {
    var calculateBtn = document.getElementById("calculateBtn");
    calculateBtn.addEventListener("click", calculateTotal);
});

function calculateTotal() {
    var costPerLiter = parseFloat(document.getElementById("cost").value);
    var litersPurchased = parseFloat(document.getElementById("liters").value);
    var totalCost = costPerLiter * litersPurchased;
    document.getElementById("totalCost").innerText = "Total Cost: AED" + totalCost.toFixed(2);
}