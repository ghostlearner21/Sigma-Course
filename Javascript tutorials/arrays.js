let myArray = [1, 2, 3, 4, 5, 6, 7];

function myFunction(element){
    if(element%2===0){
        return true;
    }
    return false;
}

function expoFunction(element){
    return element**2;
}

function addition(num1 , num2){
    return num1+num2;
}

console.log("New filtered Arrays : "+ myArray.filter(myFunction));
console.log("New maped array : "+myArray.map(expoFunction));
console.log("my array sum : "+myArray.reduce(addition));
