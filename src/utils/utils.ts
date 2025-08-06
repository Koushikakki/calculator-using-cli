export function validateNumberArray(input : number[]) : boolean{
    for (let value of input){
        if(isNaN(value)){
            return false;
        }
    }
    return true;
}