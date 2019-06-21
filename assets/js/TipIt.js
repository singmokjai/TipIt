// Calculate Tip

function calculateTip () {

    // Grabbing input values

    var billAmt = $('#Bill').value;

    var serviceQual = $('#serviceQual').value;

    var numPeople = $('#peopleShare').value;

    // Validating input values

    if (billAmt === "" || serviceQual === 0) {

        alert("Please enter values");
        return;
    }

    // Validate value for people

    if (numPeople === "") {

        alert("Please enter number of people splitting bill.");
        return;
    }

    // Calculate Tip

    var total = (billAmt * serviceQual) / numPeople;

    // Round tip amount

    total = Math.round(total * 100) / 100;

    // Fixed two digit decimal

    total = total.toFixed(2);

    $('#tip').html(total);
}

    // Calling the calculate function

    $('#calculate').click(function() {
        calculateTip();
    });


