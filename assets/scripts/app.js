const defaultResult = 0;
let logEntries =[];
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
   currentResult += getUserInput();
   createAndWriteOperator('+', now.toString() ,getUserInput() );
   logEntries.push('+');
   const addiition = {
       currentResult:currentResult
   };
   logEntries.push(addiition);
   console.log(addiition);
}

function sub(){
    const now = currentResult;
    currentResult = currentResult - getUserInput();
    createAndWriteOperator('-', now.toString() ,getUserInput() );
    logEntries.push('-');
    logEntries.push(getUserInput());
   console.log(logEntries);
}
function mul(){
    const now = currentResult;
    currentResult = currentResult * getUserInput();
    createAndWriteOperator('mul', now.toString() ,getUserInput() );
}
function div(){
    const now = currentResult;
    currentResult = currentResult / getUserInput();
    createAndWriteOperator('/', now.toString() ,getUserInput() );
}
addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',sub);
multiplyBtn.addEventListener('click',mul);
divideBtn.addEventListener('click',div);
//added comment 
