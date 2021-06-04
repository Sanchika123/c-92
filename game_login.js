
function login(){
    var name1= document.getElementById("player1_name_input").value;
    var name2= document.getElementById("player2_name_input").value;
    localStorage.setItem("name1",name1 );
    localStorage.setItem("name2",name2 );
    window.location= "game_page.html";
}