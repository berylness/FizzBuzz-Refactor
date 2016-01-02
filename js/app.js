$(document).ready(function() {


//Section of Code to validate number or display an alert
function takeNumber() {

    //user enters a value 
     $('#number').keydown(function (event)) {
        if (event.keyCode == 13) {
            event.preventDefault();
            $('#submit').click();
        }
    }


    //check that input value is a number
     function notNumber(Result) {
        if (isNaN(number)) {
            alert("Please type in a whole number");
            start();
            }
        }
        
    //check that input value is not a decimal
     function notDecimal(Result){
        if (Result % 1 != 0) {
            alert("No decimals, please"); 
            start();
            }
        }

    //convert any input that is a string to a number
     var fix = parseInt(Result);

}); 

//Main FizzBuzz Function
function Result() {
  
     for (var i = 1; i <= 100; ++i) {

        //number is divisible by 3 and 5, display "fizzbuzz"
        if (i % 3 === 0 && i % 5 === 0) {
            $(".output").append('fizzbuzz' + '<br/>');
        } 
        //number is divisible by 3, display "fizz"
        else if (i % 3 === 0) {
            $(".output").append('fizz' + '<br/>');
        }
        //number is divisible by 5, display "buzz"
        else if (i % 5 === 0) {
            $(".output").append('buzz' + '<br/>');
        } 
         //number is not divisible by 3 or 5, display given number 
        else {
            $(".output").append(i + " " + '<br/>');
       }
    } 
});