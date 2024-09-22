var elem = document.getElementById("weight");
elem.onkeyup = function(e){
    if(e.keyCode == 13){
        calculateBMI();
    }
} 

function calculateBMI() {
    //Formula: weight (lb) / [height (in)]2 x 703
    // check if input is valid

    if (document.getElementById('weight').value <= 4 || document.getElementById('weight').value >= 1401 || document.getElementById('height').value <= 20 || document.getElementById('height').value >= 101) {
        document.getElementById("result").innerHTML = "Invalid input";
        document.getElementById("result").style.color = "red";
        return;
    } else { // if input is valid calculate!
        var weight = document.getElementById('weight').value;
        var height = document.getElementById('height').value;
        var bmi = (weight / (height * height)) * 703;
        console.log(Math.round(bmi));
        document.getElementById("result").innerHTML = "Your BMI is " + Math.round(bmi) + " lbs";

        if (bmi >= 18.5 && bmi <= 24.9) { // if its not 18.5 - 24.9 its unhealthy
            document.getElementById("result").style.color = "#228B22"; // green
        } else {
            document.getElementById("result").style.color = "#C41E3A"; // red
        }
    }
}