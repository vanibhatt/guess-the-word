var player_1_name,player_2_name,getWord,wordLower,char1,char2,char3,middle,replace_char1,replace_char2,replace_char3,qword, check_button,row;

player_1_name=localStorage.getItem("Name Of Player One");
player_2_name=localStorage.getItem("Name Of Player Two");

document.getElementById("player_1_display").innerHTML=player_1_name+":";
document.getElementById("player_2_display").innerHTML=player_2_name+":";

var player_1_score=0;
var player_2_score=0;

document.getElementById("score_of_player_1").innerHTML=player_1_score;
document.getElementById("score_of_player_2").innerHTML=player_2_score;

document.getElementById("question_person").innerHTML="Question Turn:"+player_1_name;
document.getElementById("answer_person").innerHTML="Answer Turn:"+player_2_name;

function send(){

    getWord=document.getElementById("word").value;
    wordLower=getWord.toLowerCase();
    console.log(wordLower);

    char1=wordLower.charAt(1);
    console.log(char1);

    middle=Math.floor(wordLower.length/2);  
    char2=wordLower.charAt(middle);
    console.log(char2);

    char3=wordLower.charAt(wordLower.length-1);
    console.log(char3);

    replace_char1=wordLower.replace(char1,"_");
    console.log(replace_char1);

    replace_char2=replace_char1.replace(char2,"_");

    replace_char3=replace_char2.replace(char3,"_");

    qword="<h4 id='word_display'>Question. "+replace_char3+ "</h4>";

    input_box="<br><br> Answer. <input type='text' id='input_check_box'>";

    check_button="<br><br> <button class='btn btn-success' onclick='check()'> Check </button>";
    
    row=qword+input_box+check_button;

    document.getElementById("question").innerHTML=row;
    document.getElementById("word").value="";
}