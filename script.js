function isLeapYear(year){
    let result = false;
    if(year>1 && year <9999){
        result = year%4 === 0;
        result = result && (year%100 !== 0);
        result = result || (year%400 === 0);
    }
  return result;
}

function clearEntry(){
  document.getElementById("year-holder").value="";
  document.getElementById("answer-holder").innerHTML="";
}

function generateRandomYear(){
  document.getElementById("year-holder").value = Math.floor(Math.random() * (9999 - 1582 + 1) + 1582);
  document.getElementById("answer-holder").innerHTML = "";
}

function displayLeapYearResult(){
   
    let year = document.getElementById("year-holder").value;
    if(year === "" || isNaN(year)){
      window.alert("Year is missing or invalid");
      return;
    }
    else{
      let result = document.getElementById("answer-holder");
      if(isLeapYear(year)){
        result.style.color = "tomato";
        result.innerHTML = "Is a Leap Year";
      }
      else{
        result.style.color = "blue";
        result.innerHTML="Is a Normal Year"
      }
    }
}

document.getElementById("executebtn").addEventListener("click",displayLeapYearResult);
document.getElementById("clearbtn").addEventListener("click",clearEntry);
document.getElementById("randomyear").addEventListener("click",generateRandomYear);
