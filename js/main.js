var turnMessage = "It's X turn";
var userTurn = "X";
var isWin = false;

var changeTurn = function(x){
  if(x.innerHTML == ""){
    x.innerHTML = userTurn;
    
    if(userTurn == "X"){
      document.getElementById("displayMsg").innerHTML = turnMessage.replace("X", "O");
      userTurn = "O";
    }
    else{
      document.getElementById("displayMsg").innerHTML = turnMessage.replace("O", "X");
      userTurn = "X";  
    }
  } 
  checkWin();
};


var checkWin = function(){
  if(checkRows() || checkColumns() || checkDiagonals()){
    if(userTurn == "X"){
      alert("User O wins the game!!!");
    }
    else{
      alert("User X wins the game!!!");
    } 

    //Reset the board
    //startNewGame();
  } 


};

//Resets the board to the starting position
var startNewGame = function(){
  for(var i=1; i<=3; i++){
    for(var j=1; j<=3; j++){
      document.getElementById(i + "_" + j).innerHTML = "";
      document.getElementById(i + "_" + j).style.backgroundColor = "white";
    }
  }
  userTurn = "X";
  document.getElementById("displayMsg").innerHTML = turnMessage.replace("O", "X");
}

//Checks the rows if the values are equal
var checkRows = function(){
  //Loop each row
  for(var i=1; i<=3; i++){
      if(document.getElementById(i + "_1").innerHTML == document.getElementById(i + "_2").innerHTML && document.getElementById(i + "_2").innerHTML == document.getElementById(i + "_3").innerHTML && document.getElementById(i + "_1").innerHTML != ""){
        
        document.getElementById(i + "_1").style.backgroundColor = "green";
        document.getElementById(i + "_2").style.backgroundColor = "green";
        document.getElementById(i + "_3").style.backgroundColor = "green";
        isWin = true;
        return isWin;
      } 
  }
  return false;
};

//Checks three columns if the values are equal
var checkColumns = function(){
  //Loop each row
  for(var i=1; i<=3; i++){
      if(document.getElementById("1_" + i).innerHTML == document.getElementById("2_" + i).innerHTML && document.getElementById("2_" + i).innerHTML == document.getElementById("3_" + i).innerHTML && document.getElementById("1_" + i).innerHTML != ""){
        document.getElementById("1_" + i).style.backgroundColor = "green";
        document.getElementById("2_" + i).style.backgroundColor = "green";
        document.getElementById("3_" + i).style.backgroundColor = "green";
        isWin = true;
        return isWin;
      } 
  }
  return false;
};


//Check the two diagonals if the values are equal
var checkDiagonals = function(){
  if(document.getElementById("1_1").innerHTML == document.getElementById("2_2").innerHTML && document.getElementById("2_2").innerHTML == document.getElementById("3_3").innerHTML && document.getElementById("2_2").innerHTML != ""){
    document.getElementById("1_1").style.backgroundColor = "green";
    document.getElementById("2_2").style.backgroundColor = "green";
    document.getElementById("3_3").style.backgroundColor = "green";
    isWin = true;
    return isWin;
  }else if(document.getElementById("1_3").innerHTML == document.getElementById("2_2").innerHTML && document.getElementById("2_2").innerHTML == document.getElementById("3_1").innerHTML && document.getElementById("2_2").innerHTML != ""){
    document.getElementById("1_3").style.backgroundColor = "green";
    document.getElementById("2_2").style.backgroundColor = "green";
    document.getElementById("3_1").style.backgroundColor = "green";
    isWin = true;
    return isWin;
  }else
    return false;
};