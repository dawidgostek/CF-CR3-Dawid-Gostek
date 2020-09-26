//team.html
console.log(teamMembers);
var team = JSON.parse(teamMembers);
console.table(team);

for (var i = 0; i < team.length; i++){
    document.getElementById("result").innerHTML += `<div id='team1${i}' style='text-align: center'> <img ${team[i].image} id='img${i}' class='img' style='width: 70%'> 
    <p>${team[i].name}</p><p>e-mail: ${team[i].email} <p id='more${i}'>more</p></div>`;
}

function printText(i){
	console.log(team[i].text);
}

var images = document.getElementsByClassName("img");
images[0].addEventListener("click", function(){
	printText(this.id)
} ,false);