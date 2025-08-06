export class Calculator {
    add (numberArray : number[]): number {
        let result : number = 0;
        for (let sum of numberArray){
            result += sum;
        }
        return result;
    }
}