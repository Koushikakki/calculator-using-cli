import * as readline from "readline-sync";
import { Calculator } from "./operations/basicOperations";

const calculator = new Calculator();

function main(): void {
    console.log("=========== Calculator ===========");

    while (true) {
        console.log("\nChoose an operation:");
        console.log("1. Addition");
        console.log("0. Exit");

        const choice: string = readline.question("Enter your choice: ");

        switch (choice) {
            case '1': {
                const num1: number = parseFloat(readline.question("Enter first number: "));
                const num2: number = parseFloat(readline.question("Enter second number: "));
                const result: number = calculator.add(num1, num2);
                console.log(`Result: ${result}`);
                break;
            }
            case '0': {
                console.log("Exiting calculator. Goodbye!");
                process.exit(0); 
            }
            default:
                console.log("Invalid operator. Please enter a valid option.\n");
        }
    }
}

main();
