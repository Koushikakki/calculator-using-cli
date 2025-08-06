import * as readline from "readline-sync";
import { Calculator } from "./operations/basicOperations";
import { validateNumberArray } from "./utils/utils";

const calculator = new Calculator();

function main(): void {
    console.log("=========== Calculator ===========");

    while (true) {
        console.log("\nChoose an operation:");
        console.log("1. Addition");
        console.log("0. Exit");
        const choice :string =readline.question("choose an option ");

        switch (choice){
            case '1' : {
                const inputString : string = (readline.question("Enter numbers : "));
                if(inputString === ""){
                    console.log("input is empty");
                    break;
                }
                const stringArray : string[] = inputString.trim().split(/\s+/);
                const numberArray : number[] = stringArray.map(Number);
                if(!validateNumberArray(numberArray)){
                    console.log("Invalid input has entered");
                    break;
                }
                const result : number = calculator.add(numberArray);

                console.log("Result : ",result);

                break;
            }
            case '0': {
                console.log("Exiting calculator");
                process.exit(0);
            }
            default:
                console.log("Invalid operator. Please enter a valid option.\n");
        }
    }
}

main();
