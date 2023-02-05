const root = document.getElementById("root");
root.style.margin = "0 auto";
root.style.marginTop = "10%";
root.style.borderRadius = "20px";
root.style.border = "3px solid black";
root.style.padding = "0 36px";
root.style.display = "flex";
root.style.flexDirection = "column";
root.style.gap = "36px";
root.style.width = "600px";
root.style.height = "500px";
root.style.backgroundColor = "#d5d5d5";

// btn
const deleteAll = document.createElement("button"); // создаем новый элемент <button>
const textButton = document.createTextNode("Delete All"); // создаем в нем текст
deleteAll.appendChild(textButton); // добавляем этот текст элементу <button>
root.appendChild(deleteAll); // присваиваем элемент <button> корневому элементу
deleteAll.classList.add("deleteAll-btn"); //создаем класс для элемента <button>

// input
const inputToDo = document.createElement("input"); // создаем новый элемент <input>
root.appendChild(inputToDo); //присваиваем элемент <input> корневому элементу
inputToDo.classList.add("input-to-do"); // создаем новый элемент <input>
inputToDo.placeholder = "Enter todo ..."; // пишем текст в плейсхолдер

// btn 2
const addBtn = document.createElement("button"); //создаем новый элемент <button>
const textButtonTwo = document.createTextNode("Add"); // создаем текстовое содержимое
addBtn.appendChild(textButtonTwo); // добавляем текстовое содержимое элементу <button>
root.appendChild(addBtn); // присваиваем элемент <button> корневому элементу
addBtn.classList.add("add-btn"); //создаем класс для элемента <button>

// wrap (div)
const divWrap = document.createElement("div"); //создаем новый элемент <div>
root.appendChild(divWrap); // присваиваем элемент <div> корневому элементу
divWrap.appendChild(deleteAll); // присваиваем элемент <div> корневому элементу
divWrap.appendChild(inputToDo); // присваиваем элемент <div> корневому элементу
divWrap.appendChild(addBtn); // присваиваем элемент <div> корневому элементу
divWrap.classList.add("wrap"); //создаем класс для элемента <div>

// div innerBig
const divInnerBig = document.createElement("div"); //создаем новый элемент <div>
root.appendChild(divInnerBig); // присваиваем элемент <div> корневому элементу
divInnerBig.classList.add("innerBig"); //создаем класс для элемента <div>

// btnEnter
const enter = document.createElement("button"); //создаем новый элемент <button>
divInnerBig.appendChild(enter); // присваиваем элемент <button> корневому элементу
const textButtonEnter = document.createTextNode("v"); // добавляем текстовое содержимое элементу <button>
enter.appendChild(textButtonEnter); // присваиваем элемент <button> корневому элементу
enter.classList.add("enterBnt"); //создаем класс для элемента <button>

// input
const todoText = document.createElement("input"); // создаем новый элемент <input>
divInnerBig.appendChild(todoText); // присваиваем элемент <input> корневому элементу
todoText.setAttribute(`type`, `text`); // присваиваем атрибуты <input>
todoText.classList.add("todoText"); // создаем класс для элемента <input>
todoText.placeholder = "Todo text"; // пишем текст в плейсхолдер

// btnClose inner
const closeBtn = document.createElement("button"); //создаем новый элемент <button>
divInnerBig.appendChild(closeBtn); // присваиваем элемент <button> корневому элементу
const textCloseBtn = document.createTextNode("x"); // добавляем текстовое содержимое элементу <button>
closeBtn.appendChild(textCloseBtn); // присваиваем элемент <button> корневому элементу
closeBtn.classList.add("closeBtn"); //создаем класс для элемента <button>

// date
const dateInput = document.createElement("input"); //создаем новый элемент <input>
divInnerBig.appendChild(dateInput); // присваиваем элемент <input> корневому элементу
dateInput.setAttribute(`type`, `text`); // присваиваем атрибуты <input>
dateInput.placeholder = "Date"; // пишем текст в плейсхолдер
dateInput.classList.add("date-input"); //создаем класс для элемента <input>

// div innerBig
const divInnerBig2 = document.createElement("div"); //создаем новый элемент <div>
root.appendChild(divInnerBig2); // присваиваем элемент <div> корневому элементу
divInnerBig2.classList.add("innerBig2"); //создаем класс для элемента <div>

// btnEnter
const enter2 = document.createElement("button"); //создаем новый элемент <button>
divInnerBig2.appendChild(enter2); // присваиваем элемент <button> корневому элементу
const textButtonEnter2 = document.createTextNode("v"); // добавляем текстовое содержимое элементу <button>
enter2.appendChild(textButtonEnter2); // присваиваем элемент <button> корневому элементу
enter2.classList.add("enterBnt"); // создаем класс для элемента <button>

// input
const todoText2 = document.createElement("input"); //создаем новый элемент <input>
divInnerBig2.appendChild(todoText2); // присваиваем элемент <input> корневому элементу
todoText2.setAttribute(`type`, `text`); // присваиваем атрибуты <input>
todoText2.classList.add("todoText"); //создаем класс для элемента <input>
todoText2.placeholder = "Todo text"; // пишем текст в плейсхолдер

// btnClose inner
const closeBtn2 = document.createElement("button"); //создаем новый элемент <button>
divInnerBig2.appendChild(closeBtn2); // присваиваем элемент <button> корневому элементу
const textCloseBtn2 = document.createTextNode("x"); // добавляем текстовое содержимое элементу <button>
closeBtn2.appendChild(textCloseBtn2); // присваиваем элемент <button> корневому элементу
closeBtn2.classList.add("closeBtn"); // создаем класс для элемента <button>

// date
const dateInput2 = document.createElement("input"); //создаем новый элемент <input>
divInnerBig2.appendChild(dateInput2); // присваиваем элемент <input> корневому элементу
dateInput2.classList.add("date-input"); //создаем класс для элемента <input>
dateInput2.setAttribute(`type`, `text`); // присваиваем атрибуты <input>
dateInput2.placeholder = "Date"; // пишем текст в плейсхолдер
