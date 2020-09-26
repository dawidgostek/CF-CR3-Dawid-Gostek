//team.html
console.log(teamMembers);
var team = JSON.parse(teamMembers);
console.table(team);

for (var i = 0; i < team.length; i++){
    document.getElementById("result").innerHTML += `<div id='team1${i}' style='text-align: center'> <img ${team[i].image} id='img${i}' class='img' style='width: 70%'> 
    <p>${team[i].name}</p><p>e-mail: ${team[i].email}</p><p class='more'>more</p></div>`;
    }

var t = document.getElementsByClassName("more")

t[0].addEventListener("click",function(){
    document.getElementById("team10").innerHTML = `<img ${team[0].image} id='img${i}' class='img' style='width: 70%'> 
    <p>${team[0].name}</p><p>e-mail: ${team[0].email}</p><p>${team[0].tel}</p><p>${team[0].text}</p>` 
    },false);

t[1].addEventListener("click",function(){
    document.getElementById("team11").innerHTML = `<img ${team[1].image} id='img${1}' class='img' style='width: 70%'> 
    <p>${team[1].name}</p><p>e-mail: ${team[1].email}</p><p>${team[1].tel}</p><p>${team[1].text}</p>` 
    },false);
t[2].addEventListener("click",function(){
    document.getElementById("team12").innerHTML = `<img ${team[2].image} id='img${2}' class='img' style='width: 70%'> 
    <p>${team[2].name}</p><p>e-mail: ${team[2].email}</p><p>${team[2].tel}</p><p>${team[2].text}</p>` 
    },false);
