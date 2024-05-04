// Faulty calculator which gives 10% wrong outputs

function calculator(operand1, operand2, operation){
    
    let cal_confidence = Math.floor(Math.random() * 100);
    console.log(`confidence level is ${cal_confidence}%`);

    // confidence is low --> now it will perform wrong calculations
    if(cal_confidence<=10){
        operation = faulty_operations[operation];
    }    
    console.log(calculation(operand1, operand2, operation));

}

// made a key-value pair object to store faulty operations
let faulty_operations = {
    "+":"-",
    "-":"/",
    "*":"+",
    "/":"**"
}

function calculation(operand1, operand2, operation){
    if(operation=="+"){
        return operand1+operand2;
    }
    else if(operation=="-"){
        return operand1-operand2;
    }
    else if(operation=="*"){
        return operand1*operand2;
    }
    else if(operation=="/"){
        return operand1/operand2;
    }
    else if(operation == "**"){
        return operand1**operand2;
    }
    else{
        return null;
    }
}

calculator(2,8,"/");