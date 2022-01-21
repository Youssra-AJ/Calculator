//Adition function:

function add(num1, num2) {
    return num1 + num2
}

//Substraction function;

function substract(num1, num2) {
    return num1 - num2
}

//Multiplication function:

function multiply(num1, num2) {
    return num1 * num2
}

//Division function:

function divide(num1, num2) {
    return num1 / num2
}

//Create a function called 'operate' that takes an operator(?)
//and 2 numbers and then calls one of the above functions
//on the numbers. Meaning, this function 'operate' should
//be able to either add/substract/multiply/divide any 2 
//given numbers.

function operate() {
    let num1 = ""
    let num2 = ""
    if (num1 + num2) {
        return add()
    } else if (num1 - num2) {
        return substract()
    } else if (num1 * num2) {
        return multiply()
    } else (num1 / num2) 
        return divide()
}

console.log(operate())

//Now mving to HTML/CSS, create your calculator with 
//HTML buttons for each digit, each operation (functions above),
//and equals sign. Fill in the buttons with some light 
//styling to get a picture of what you're building. 
//Don't worry about the JS part of this.
//Add "clear" button.



//Create the functions that populate the display when
//you click the number buttons. Meaning, you should 
//make the functionality that displays whatever user 
//clicks on. Add 'display value' as variable and store it
//in global scope to use for next steps.




//After you create the code that populates the display,
//it's times to make the calculator do its job.
//When the operate() function has been called, your
//display should show the 'solution'. Stitch it all 
//together.




//Store all the values and call the operate() function
//on them.
















//BUGS TO LOOK OUT FOR: 
//Users should be able to string together several
//operations and get the answer right.
//Round answers that have long decimals cause we don't
//want them to take up screen space.
//Display an error message if the user tries to divide by
//zero! Don't let it crush your calculator!
