const defaultResult = 0;

let currentResult = defaultResult;
function getUserInput(){
    return parseInt(userInput.value);
}
function createAndWriteOperator(operator,resultBeforeCal,resultAfterCalc){
    const calDes = resultBeforeCal +operator + resultAfterCalc ;
    outputResult(currentResult , calDes );
}

function add(){
    const now = currentResult;
   currentResult = parseInt(currentResult) + getUserInput();
   createAndWriteOperator('+', currentResult.toString() ,getUserInput() );
}
function sub(){
    const now = currentResult;
    currentResult = currentResult - getUserInput();
    createAndWriteOperator('-', currentResult.toString() ,getUserInput() );
}
function mul(){
    const now = currentResult;
    currentResult = currentResult * getUserInput();
    createAndWriteOperator('mul', currentResult.toString() ,getUserInput() );
}
function div(){
    const now = currentResult;
    currentResult = currentResult / getUserInput();
    createAndWriteOperator('/', currentResult.toString() ,getUserInput() );
}
addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',sub);
multiplyBtn.addEventListener('click',mul);
divideBtn.addEventListener('click',div);

