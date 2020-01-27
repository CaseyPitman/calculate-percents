/*Takes two numbers - a whole and a part - and 
  calculates percentage*/

  //calculation function
  const calculatePercentage = function(part, whole){
    let percent = (part / whole) * 100;
    percent = percent.toFixed(2);
    let result = document.getElementById("result");
    result.value = percent;
    return percent;
  }

  //executive function
  const execute =function(){
    let wholeAmount = document.getElementById("whole").value;
    let partAmount = document.getElementById("partial").value;
    calculatePercentage(partAmount, wholeAmount);
    return;
  }

//button to run the calculation
  const findPercent=document.getElementById("find-percent");
  findPercent.addEventListener("click", execute);

//function resets the fields
  const resetFields = function(){
    let wholeAmount = document.getElementById("whole");
    let partAmount = document.getElementById("partial");
    let result = document.getElementById("result");
    wholeAmount.value="";
    partAmount.value="";
    result.value="";
    return;
  }

//defines reset button and calls reset function
  const reset=document.getElementById("reset");
  reset.addEventListener("click", resetFields);

  
  
