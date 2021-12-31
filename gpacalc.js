function CalculateGPA(classes, totalCredits, resultElementName) {
    //use Number wrapper on classes entered
    for(let i = 0; i < classes.length; i++) {
      classes[i] = Number(classes[i]);
    }
    
    //use Number wrapper on credits entered
    for(let i = 0; i < totalCredits.length; i++) {
      totalCredits[i] = Number(totalCredits[i]);
    }
    
    //calculate the average
    let sum = 0;
    let sumCredits = 0;
    
    //sum up all the credits entered
    for(let i = 0; i < totalCredits.length; i++) {
      if(!totalCredits[i].isNaN) {
        sumCredits += totalCredits[i];
      }
    }
    
    //update sum
    for(let i = 0; i < classes.length; i++) {
      if(!classes[i].isNaN) {
        sum += classes[i]*(totalCredits[i]/sumCredits);
      }
    }
    var average = Math.round((sum + Number.EPSILON) * 100) / 100
     
    var resultElement = document.getElementById(resultElementName);
    
    resultElement.innerHTML = average;
  }