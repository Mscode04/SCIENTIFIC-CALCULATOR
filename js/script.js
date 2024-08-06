let current='';
      
let Operator='';
let firstnumber='';

function clearScreen(){
  current= '';
  Operator= '';
  first= '';
  document.getElementById('screen').value = '';
}

function display(x) {
  current+= x;
  document.getElementById('screen').value = current;
}

function operator(op) {
if( current==""){
  
}
  if (operator !='') {
      result();
  }

  firstnumber= current;
  Operator = op;
  current='';
  document.getElementById('screen').value = '';
}

function result() {
  if (firstnumber =='' || Operator =='' || current==''){
    return;
  }
  try {
      const expression = (firstnumber+Operator+current);
      const result = eval(expression);
      document.getElementById('screen').value = result;
      Operator = '';
      firstOperand = '';
      current=" "
  } catch {
      document.getElementById('screen').value = 'Error';
  }
}