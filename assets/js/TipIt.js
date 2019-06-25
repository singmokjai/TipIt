// Calculate Tip

function calculateTip () {

    // Grabbing input values

    var billAmt = $('#Bill').val();

    var serviceQual = $('select#serviceQual').val();

    console.log(serviceQual);

    var numPeople = $('#peopleShare').val();


    // Validating input values

    if (billAmt === "" || serviceQual === "") {

        alert("Please enter missing values.");
        return;
    }

    // Validate service quality

    if (serviceQual === "" || numPeople === "") {

        alert("Please select quality of service.");
        return;
    }

    // Validate value for people

    if (numPeople === "") {

        alert("Please enter number of people splitting bill.");
        return;
        
    } 

    

    

    // Calculate Tip

    var total = (billAmt * serviceQual) / numPeople;

    // console.log(total)


    // Round tip amount

    roundedTotal = Math.round(total * 100) / 100;

    // Fixed two digit decimal

    total = total.toFixed(2);



    $('#tip').html(total);
}

    // Calling the calculate function
    $(document).ready(function() {
    $('#calculate').on("click", function() {
    
        calculateTip();

        
    });

})
