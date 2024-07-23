let textValue = ''

function addNumber(number){
    textValue += number;
    updateText() ;
}

function addOperator(operador){
    textValue += operador;
    updateText();
}

function addDecimal(decimal){
    textValue =+ '.';
    updateText();
}

function clearText(){
    textValue = '';
    updateText();
}

function delText(){
    textValue = textValue.substring(0 , textValue.length - 1);
    updateText();
}

function updateText(){
    document.querySelector('#display').value = textValue;
}

function calculate(){
    textValue = eval(textValue)
    updateText();
}