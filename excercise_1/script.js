// Use conditions to check if a given number is even. If so , print with console.log “ The Number (TheNumberYouWrote) is even ". If the number is not even, print " The Number (TheNumberYouWrote) is not even".

let number = +prompt("Enter the number");

if(!number){
    console.log("It is not a number");
}else if(number % 2 === 0){
    console.log(`The number ${number} is even`);
}else{
    console.log(`The number ${number} is odd !`);
}