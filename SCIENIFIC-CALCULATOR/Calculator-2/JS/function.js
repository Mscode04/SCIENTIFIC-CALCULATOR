function clearScreen() {
    document.getElementById('screen').innerText = '0';
}

function display(x) {
  const display = document.getElementById('screen');
  if (display.innerText === '0') {
    display.innerText = x;
  } else {
    display.innerText += x;
  }
}

function result() {
    const display = document.getElementById('screen');
    try {
      display.innerText = eval(display.innerText);
    } 
    catch {
      display.innerText = 'Error';
    }
}