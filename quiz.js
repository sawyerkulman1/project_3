/**
 *   @author Sawyer, Kulman (sawyerkulman@gmail.com)
 *   @version 0.0.1
 *   @summary Quiz || created: 10.31.2016
 *   @todo
 */  //lines 1-6 are multiline comments

"use strict"; //strict Mode is a feature that allows you to place a function/program in a strict operating mode, strict context limits certain things from being taken
const PROMPT = require('readline-sync'); //allows the code to read input and assign it to variables

let continueResponse; //Declares a global variable,continueResponse which is on its own line which is in boolean form
let currentMonth, currentGrade, currentClassroom, upperTuition; //Declares the global variables currentMonth, currentGrade, currentClassroom and upperTuition which are number values
const MAX_GRADE = 8,
    MAX_MONTH = 9,
    MAX_CLASSROOM = 3,
    KDG_TUITION = 80; //13-16 initializes global constants and gives them values

function main() { //defines the main dispatch method does the actions in order
    process.stdout.write('\x1Bc'); //Clears the screen
    setContinueResponse(); //Calls the continueResponse method which sets the value of continueResponce
    while (continueResponse === 1) { //Creates a while loop that runs the things inside of the parenthesis as long as continueresponce===1
        setCurrentMonth(); //Calls currentMonth
        setCurrentGrade(); //Calls currentGrade
        setCurrentClassroom(); //Calls currentClassroom
        processPaymentCoupons(); //Calls processPaymentCoupons
        setContinueResponse(); //Calls continueResponse
        for (let i = 0; i < MAX_CLASSROOM; i++) { //Creates a for loop that will run the code a number of times until the code reaches a point where the i is equal to max_classroom
            printGoodbye();//calls print goodbye
        }
    }
}

main(); //Calls main method

function setContinueResponse() { //begins the method to set the variable
    if (continueResponse != null) { //tests if continueResponse is null and if it is then it runs the code
        continueResponse = -1; //sets continueResponse equal to -1
        while (continueResponse !== 0 && continueResponse !== 1) { //tests if continueResponse = 0 or 1 and as long as they dont,it runs the code on the next line
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `)); //if the above line is true this will ask the user to enter a value to determine if they want to continue
        }
    } else { //if the if statement above isnt true this runs the code on the next line
        continueResponse = 1; //sets continue response to 1
    }
}

function setCurrentMonth() { //begins the method
    if (currentMonth != null && currentMonth <= MAX_MONTH) { //checks if continueResponse is null and if it is runs the code
        currentMonth++; //adds one to the current value of continueResponse
    } else { //if currentMonth does not equal null and its less than the constant MAX_MONTH then it runs the statement
        currentMonth = 1; //sets currentMonth to 1
    }
}

function setCurrentGrade() { //begins to set currentgrade
    if (typeof currentGrade !=='undefined' && currentGrade <= MAX_GRADE) { //if currentGrade is not null and is also less than the value of MAX_GRADE, then the code runs
        currentGrade++; //adds one value to currentGrade
    } else { //if currentGrade is null or is more than the value MAX_GRADE then this code runs
        currentGrade = 0; //sets the value of the variable currentGrade to 0
    }
    }

function setCurrentClassroom() { //function to set the value for current classroom
    if (typeof currentClassroom !=='undefined' && currentClassroom <= MAX_CLASSROOM) { //if currentClassroom is not null and its less than max classroom then the code runs
        currentClassroom++; //adds one unit to Currentclassroom
    } else { //if currentClassroom is null or is more than the value of max classroom then the code runs
        currentClassroom = 1; //sets variable currentClassroom to 1
    }
}

function setUpperTuition() { //function to set the value for uppertuition
    const BASE_TUITION = 60; //initializes the constant BASE_TUITION with a value of 60
    upperTuition = BASE_TUITION * currentGrade; //sets the upper tuition by multiplying the BASE_TUITION value by the currentGrade value
}

function processPaymentCoupons() { //begins the method to find out what processpaymentcoupons equals
    while (currentGrade <= MAX_GRADE) { //while currentGrade is less than or = to the value of constant MAX_GRADE it runs the code inside  the loop
        while (currentClassroom <= MAX_CLASSROOM) {  //while the value of currentClassroom is less than or equal to the value MAX_CLASSROOM it runs the code inside of the loop
            while (currentMonth <= MAX_MONTH) {  //while the value of currentmonth is less than or = to the value of MAX_MONTH it runs the code inside of the loop
                if (currentGrade == 0) { //tests if current grade = 0 and if its true then runs the statement
                    console.log(`\n\tThe tuition for month: ${currentMonth}, for classroom: ${currentClassroom}, of grade: ${currentGrade} is: \$${KDG_TUITION}.`); //this will display the tuition for the month and for the classroom grade
                } else { //if current grade is not equal to 0 it runs the code inside the else statement
                    setUpperTuition(); //calls setUpperTuition method
                    console.log(`\n\tThe tuition for month: ${currentMonth}, for classroom: ${currentClassroom}, of grade: ${currentGrade} is: \$${upperTuition}.`); //this will display the tuition for the month and for the classroom grade
                }
                setCurrentMonth(); //runs the method
            }
            setCurrentClassroom(); //runs method
            setCurrentMonth(); //runs  the method
        }
        setCurrentGrade(); //runs the method
        setCurrentClassroom(); //runs the method
    }
}

function printGoodbye() { //begins the method to print goodbye
    console.log(`\tGoodbye.`); //displays the word goodbye
}


