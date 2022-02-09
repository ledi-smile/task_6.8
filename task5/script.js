document.querySelector('input').addEventListener('keydown', copyText);

function copyText() {
   let textInput = document.querySelector('input').value;
   document.querySelector('#duplicateField').textContent = textInput;
}

document.querySelector('button').addEventListener('click', consoleText1);

function consoleText1(event) {
   let textInput = document.querySelector('input').value;
   console.log(textInput);
   document.querySelector('input').value = null;
   document.querySelector('#duplicateField').textContent = null;
   event.preventDefault();
}
