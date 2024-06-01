/**
 * Write a function for loop that iterates from 1 to a given number. It then checks and outputs whether the number is even or odd.
 * @param {number} n The number to check.
 */

function evenOdd(n: number): void {
    for(let i = 1; i <= n; i++) {
        if(i % 2 == 0){
            console.log(i," = even");
        } else{
            console.log(i," = odd");
        }        
    }
}
evenOdd(20);