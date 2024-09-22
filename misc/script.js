function calculateBMI() {
    //Formula: weight (lb) / [height (in)]2 x 703
    // check if input is valid

    if (document.getElementById('weight').value <= 5 || document.getElementById('weight').value >= 1400 || document.getElementById('height').value <= 21 || document.getElementById('height').value >= 100) {
        document.getElementById("result").innerHTML = "Invalid input";
        document.getElementById("result").style.color = "red";
        return;
    } else { // if input is valid calculate!
        var weight = document.getElementById('weight').value;
        var height = document.getElementById('height').value;
        console.log(Math.round((weight / (height * height)) * 703));
        document.getElementById("result").innerHTML = "Your BMI is " + Math.round((weight / (height * height)) * 703) + " lbs";
        document.getElementById("result").style.color = "#333";
    }
}