/*Takes two numbers - a whole and a part - and 
  calculates percentage*/

    


  //calculation function

  const calculatePercentage = function(part, whole){
      let percent = (part / whole) * 100;
      percent = percent.toFixed(2);
      return percent;
  }

  console.log(calculatePercentage(19, 37));