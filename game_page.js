var player1_name= localStorage.getItem("name1");
var player2_name= localStorage.getItem("name2");

var player1_score= 0;
var player2_score= 0;

document.getElementById("player1_name").innerHTML = player1_name+ " : ";
document.getElementById("player2_name").innerHTML = player2_name+ " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML= "Question turn - "+ player1_name;
document.getElementById("player_answer").innerHTML= "Answer turn - "+ player2_name;

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowercase = "+ word);

    var charat1=word.charAt(1);
    console.log(charat1)

    lenght_divide_by2= Math.floor(word.length/2);//2
    var charat2= word.charAt(lenght_divide_by2);
    console.log(charat2);

    var charat3=word.charAt(word.length-1);
    console.log(charat3);
//string.replace(chartobereplaced,replacement);
 // class
    var string_1= word.replace(charat1, "_");
    var string_2= string_1.replace(charat2, "_");
    var string_3= string_2.replace(charat3, "_");
    console.log(string_1);
    console.log(string_2);
    console.log(string_3);
    question_word = "<h4 id='word_display'> Q. "+string_3+"</h4>"; 
    input_box = "<br>Answer : <input type='text' id='input_check_box'>"; 
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"; 
    row = question_word + input_box + check_button ;
     document.getElementById("output").innerHTML = row; 
    document.getElementById("word").value = "";
}

var question_turn= player1_name;
var answer_turn= player2_name;

function check(){
    var result= "";
    var get_answer= document.getElementById("input_check_box").value;
    var answer= get_answer.toLowerCase();
    console.log("answer in lowercase"+ answer);

    if(answer==word){
        result="Correct answer";
        document.getElementById("correct_audio").play();
            if(answer_turn==player1_name){
            player1_score= player1_score+1;
            document.getElementById("player1_score").innerHTML= player1_score;
        }
        else{
            player2_score= player2_score+1;
            document.getElementById("player2_score").innerHTML= player2_score;
        }
    }
    else{
        result="Oops wrong answer";
    }
    if(question_turn==player1_name)
    {
        question_turn= player2_name;
        document.getElementById("player_question").innerHTML = "Question turn -"+ question_turn;
    }
    else
    {
        question_turn= player1_name;
        document.getElementById("player_question").innerHTML = "Question turn -"+ question_turn;   
    }

    if(answer_turn==player2_name)
    {
        answer_turn= player1_name;
        document.getElementById("player_answer").innerHTML = "Answer turn -"+ answer_turn;
    }
    else
    {
        answer_turn= player2_name;
        document.getElementById("player_answer").innerHTML = "Answer turn -"+ answer_turn;   
    }
   
    document.getElementById("output").innerHTML=result;

}