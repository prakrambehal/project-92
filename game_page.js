P1=localStorage.getItem("player1");
P2=localStorage.getItem("player2");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=P1+":";
document.getElementById("player2_name").innerHTML=P2+":";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="question turn-"+P1;
document.getElementById("player_answer").innerHTML="answer turn-"+P2;
function send(){
   word=document.getElementById("word").value;
   lowerword=word.toLowerCase();
   console.log(lowerword);
letter2=lowerword.charAt(1);
   console.log(letter2);
    middlenum=Math.floor(lowerword.length/2);
    middleletter=lowerword.charAt(middlenum);
    console.log(middleletter)
   lastnum= lowerword.length-1;
lastletter=lowerword.charAt(lastnum);
console.log(lastletter);
remove1=lowerword.replace(letter2,"_");
remove2=remove1.replace(middleletter,"_");
remove3=remove2.replace(lastletter,"_");
console.log(remove1);
console.log(remove2);
console.log(remove3);
question="<h4 id='displayword'> Q. "+remove3+"</h4>";
input="<br> answer:  <input type='text' id=inputbox > ";
button="<br> <br> <button class='btn btn-info  ' onclick='check()'> check</button>   ";
row=question+input+button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";
}
question_turn = "player1";
answer_turn = "player2";


function check()
{
	get_answer = document.getElementById("inputbox").value;
	answer = get_answer.toLowerCase();
	console.log("answer in lower case - " + answer);
	if(answer == lowerword)	
	{
		if(answer_turn == "player1")
		{
			player1_score = player1_score +1;
		    document.getElementById("player1_score").innerHTML = player1_score;
		}
        //complete the else loop
		else 
		{
         player2_score = player2_score +1;
         document.getElementById("player2_score").innerHTML = player2_score;	
		}
	}
	if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("player_question").innerHTML = "Question Turn - " + P2 ;
	}
    //complete the else loop
	else 
	{
		question_turn = "player1"
		document.getElementById("player_question").innerHTML = "Question turn- " + P1 ;

	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + P2 ;
	}
    //complete the else loop
	else 
	{
      answer_turn = "player1"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + P1 ;	
	}

    document.getElementById("output").innerHTML = "";
}
