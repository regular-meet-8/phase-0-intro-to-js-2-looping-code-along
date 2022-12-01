// Code your solutions in this file
function writeCards(name, event){
    const newArray = [];

    for(let i =0; i<name.length; i++){
        const outPut = `Thank you, ${name[i]}, for the wonderful ${event} gift!`
        newArray.push(outPut)

    }return newArray;
} 
    function countDown(n){
        
        do{
            console.log(n)
            n--;
        }while(n >= 0)

    }