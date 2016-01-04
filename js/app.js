$(document).ready(function() {


//create event listener for click on button
    $('#entry').on('submit',function(event){
        event.preventDefault();
        var number=$('#number').val();
        $('.output').html("");
        Result(number);
    });
      
 
//Main FizzBuzz Function
function Result(i) {
  
     while (i <= 100) {

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
       i++;
       } 
    };
});