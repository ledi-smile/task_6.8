const cosoleLog = document.querySelector('#consoleLog');
cosoleLog.addEventListener('click', () => {
   alert('Метод для вывода сообщений в браузерную консоль')
})

const Alert = document.querySelector('#alert');
Alert.addEventListener('click', () => {
   alert('Простой способ вывести информацию. Показывает диалоговое окно с кнопкой OK')
})

const Prompt = document.querySelector('#prompt');
Prompt.addEventListener('click', () => {
   alert('"собрат" функции alert(). Отображает диалоговое окно с запросом на ввод текста.')
})