let a = () => {
    return "26";
};
// this is an arrow function


// this will check only the value
if(a()==26){

    // this will check the value and type
    if(a()===26){
        console.log("Matched!")
    }
    else{
        console.log("Matched but the type is different!")
    }
}
else{
    console.log("Not Matched!")
}

console.log(Math.floor((Math.random() * 100)));