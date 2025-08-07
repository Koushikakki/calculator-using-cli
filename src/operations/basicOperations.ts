export class Calculator {
    add (numberArray : number[]): number {
        let result : number = 0;
        for (let sum of numberArray){
            result += sum;
        }
        return result;
    }
    subtract(numberArray :number[]) : number {
        let result : number = numberArray[0];
        for(let i = 1 ;i < numberArray.length; i++){
            result-=numberArray[i];
        }
        return result;
    }
    
}
