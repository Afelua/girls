var form_button = document.getElementById("button"); // получили кнопку

function Validate(event){
  event.preventDefault(); // перестает происходить перезагрузка страницы, отменить действия браузера по умолчанию
  var form_name = document.getElementById("name"); // получили инпут

  var value = form_name.value; // получаем значение из инпута, то, что ввел пользователь

  if (!value){ // идет проверка, есть ли значение
      form_name.style.border = "1px solid red"; // окрасили границу инпута, задали CSS стили через JS
    } else {
            form_name.style.border = "1px solid gray"; // окрасили границу инпута, задали CSS стили через JS
          }
          console.log(value);
        }

form_button.addEventListener("click", Validate); // написали лисенер, который слушает, нажата кнопка или нет


// display: block - отобразить элемент elem.style.display = "block"
// display: none - скрыть элемент elem.style.display = "none"
