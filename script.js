$(".display-btn").on("click", displayTable);

$("#ctc, #increment, #age, #noOfyrs, .display-btn").keypress(function(e) {
    if(e.which == 13)  // the Enter key code
        displayTable();
});  

function displayTable() {
    $("#display-table tbody").empty();
    $("#display-table").removeClass("hide");

    let no = 1,
        increasedSalary = 0,
        annualSalary = $(".annual-salary").val() ? 
                                roundNumber(parseFloat($(".annual-salary").val())) : 0,
        incrementPercentage = $(".increment-percentage").val() ? 
                                roundNumber(parseFloat($(".increment-percentage").val())) : 0,
        total = annualSalary,
        age = $(".age").val() ? parseInt($(".age").val()) : "N/A",
        numberOfYears = $(".noOfyrs").val() ? parseInt($(".noOfyrs").val()) : 12;

    for (let index = 0; index < numberOfYears; index++) {
        addRow(no, increasedSalary, annualSalary, total, age);
        no++;
        increasedSalary = roundNumber(annualSalary * (incrementPercentage / 100));
        annualSalary = roundNumber(annualSalary + increasedSalary);
        total = roundNumber(total + annualSalary);
        if (age != "N/A") {
            age++;
        }
    }
}

function addRow(no, increasedSalary, annualSalary, total, age) {
    let row = "<tr><th scope='row'>" + no + "</th>" +
        "<td class='text-success'>" + "+"+ increasedSalary + "</td>" +
        "<th>" + annualSalary + "</th>" +
        "<td>" + total + "</td>" +
        "<td class='text-primary'>" + age + "</td></tr>";
    $("#display-table tbody").append(row);
}

// Round Number 2 decimal places 72.1436 ~ 72.14
function roundNumber(num) {
    return Math.round(num * 100) / 100;
}