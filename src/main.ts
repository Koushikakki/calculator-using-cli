import * as readline from "readline-sync";
import { Calculator } from "./operations/basicOperations";

const calculator = new Calculator();

function main() : void {
    console.log("===========Calculator===========");
    console.log("\n Choose an operator :");
    console.log("1. Addition");
    console.log("0. Exit");

    while(true){
        const choice : string = readline.question("Enter your choice:");

        switch (choice){
            case '1' : {
                const num1 : number = parseInt(readline.question("Enter first number : "));
                const num2 : number = parseInt(readline.question("Enter second number : "));
                let result : number = calculator.add(num1 , num2);
                console.log(`Result : ${result}`);
                break;
            }
            case '0': {
                console.log("Exiting calculator");
                process.exit(0); 
            }
            default : 
                console.log("Invalid Operator");
        }

    }

}

main();