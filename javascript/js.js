//idex.html
function calculateInsurance(){
    var name = document.getElementById("yourName").value;
    var age = Number(document.getElementById("age2").value);
    var country = document.getElementById("country2").value;
    var horsepower = Number(document.getElementById("horsepower2").value);

    if(country == 1){
        var x = ((horsepower*100)/(age+50)).toFixed(2);
        document.getElementById("result").innerHTML = (`${name}, your insurance costs ${x} €`);
    } else if(country == 2){
        var x = ((horsepower*120)/(age+100)).toFixed(2);
        document.getElementById("result").innerHTML = (`${name}, your insurance costs ${x} €`);
    } else if(country == 3){
        var x = ((horsepower*150)/(age+50)).toFixed(2);
        document.getElementById("result").innerHTML = (`${name}, your insurance costs ${x} €`);
        }
        
}
document.getElementById("submit").addEventListener("click", calculateInsurance, false);

