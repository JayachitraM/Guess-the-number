import React from "react";
function Result({secretNum,term}){
    let result;
    if(term){
    if(term>secretNum){
    result="Higher";
    }
    else if(term<secretNum){
        result="lower";
    }
    else if(term == secretNum){
        result="Correct";
    }
    else{
        result="Please enter a valid number";
    }
    
  }


    return <h3> you guessed :{result}</h3>
  
}
export default Result;