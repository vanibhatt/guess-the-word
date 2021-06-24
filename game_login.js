var player_1_name;
var player_2_name;

function addUsers(){
    player_1_name=document.getElementById("player_1_login").value;
    player_2_name=document.getElementById("player_2_login").value;
    localStorage.setItem("Name Of Player One",player_1_name);
    localStorage.setItem("Name Of Player Two", player_2_name);
    window.location.replace("game_page.html");
}