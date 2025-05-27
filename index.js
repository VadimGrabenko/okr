// 1. Діалог з користувачем
function dialogWithUser() {
    // confirm() — виводить діалогове вікно з кнопками "ОК" та "Скасувати"
    if (confirm("Would you like to explore the digital library?")) {
        do {
            if (confirm("Are you interested in a specific type of library?")) {
                // prompt() — просить користувача ввести текстову відповідь
                let answer = prompt("Enter the type of library you're interested in (public, digital, children's):");
                if (answer) {
                    answer = answer.toLowerCase();
                    // Перевірка, який саме тип бібліотеки вибрав користувач
                    if (answer === "public") {
                        alert("Public libraries offer free access to knowledge and culture!");
                    } else if (answer === "digital") {
                        alert("Digital libraries provide e-books, audiobooks, and online research tools.");
                    } else if (answer === "children's" || answer === "childrens" || answer === "children") {
                        alert("Children's libraries are perfect for young readers with interactive materials!");
                    } else {
                        alert("We currently have no information about this library type, or it was entered incorrectly.");
                    }
                } else {
                    // Користувач натиснув Enter без введення тексту
                    alert("You didn't enter anything!");
                }
            } else {
                alert("No problem, take your time to browse.");
            }
        } while (!confirm("Would you like to end the dialog?"));
    }
}


// 2. Вивід інформації про розробника
function showDeveloperInfo() {
    // Отримання значень з полів вводу через getElementById
    const surname = document.getElementById("surnameInput").value;
    const name = document.getElementById("nameInput").value;
    let position = document.getElementById("positionInput").value;

    // Перевірка, чи введено обидва обов’язкові поля
    if (!surname || !name) {
        alert("Please enter both your surname and name.");
        return;
    }

    // Якщо поле "position" порожнє — встановлюється значення за замовчуванням
    if (!position) {
        position = "student";
    }

    // Вивід інформації про розробника
    alert(`Website developer: ${surname} ${name}\nPosition: ${position}`);
}


// 3. Порівняння двох рядків
function compareStrings() {
    // prompt() — користувач вводить два рядки
    const str1 = prompt("Enter the first string:");
    const str2 = prompt("Enter the second string:");

    // Якщо будь-яке поле скасоване — припиняємо функцію
    if (str1 === null || str2 === null) {
        alert("Comparison was cancelled.");
        return;
    }

    // Порівняння довжин рядків
    if (str1.length > str2.length) {
        alert(`The longer string is: ${str1}`);
    } else if (str2.length > str1.length) {
        alert(`The longer string is: ${str2}`);
    } else {
        alert("Both strings have the same length.");
    }
}


// 4. Зміна фону на 30 секунд
function changeBackgroundTemporarily() {
    // Зміна кольору фону за допомогою DOM
    document.body.style.backgroundColor = "brown";
    // Через 30 секунд фоновий колір повертається до стандартного
    setTimeout(() => {
        document.body.style.backgroundColor = "#E6D5B8";
    }, 30000);
}


// 5. Переадресація через location
function redirectToExternal() {
    // confirm() — підтвердження переходу
    if (confirm("Do you want to open page about digital libraries?")) {
        // location.href — переадресація на іншу сторінку
        location.href = "digital.html";
    }
}


// 3. DOM маніпуляції
function showLibraryDomDemo() {
    // Відкриває нове порожнє вікно
    const demoWindow = window.open("", "", "width=900,height=600");

    // Через 1 сек — записуємо HTML в нове вікно
    setTimeout(() => {
        demoWindow.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Library DOM Demo</title>
                <style>
                    body {
                        background-color: #fff8dc;
                        font-family: Arial, sans-serif;
                        padding: 20px;
                        text-align: center;
                    }
                    .msg {
                        color: #5a3d2b;
                        font-size: 24px;
                        margin-top: 20px;
                    }
                    .note {
                        color: darkgreen;
                        font-size: 18px;
                        margin-top: 10px;
                    }
                    #attention {
                        color: crimson;
                        font-size: 18px;
                        margin: 8px;
                    }
                    img {
                        max-width: 80%;
                        border-radius: 10px;
                        margin-top: 15px;
                    }
                </style>
            </head>
            <body>
                <span id="attention">Attention</span>
            </body>
            </html>
        `);

        const doc = demoWindow.document;

        if (doc && doc.body) {
            // getElementById — доступ до елементу з id="attention"
            const attention = doc.getElementById("attention");

            // Створює і вставляє елемент перед attention
            setTimeout(() => {
                const bell = doc.createElement("span");
                bell.textContent = "🔔";
                attention.before(bell);
            }, 500);

            // Створює і вставляє елемент після attention
            setTimeout(() => {
                const warn = doc.createElement("span");
                warn.textContent = "❗";
                attention.after(warn);
            }, 1000);

            // Створює блок, додає текстовий вузол і вставляє його в body
            setTimeout(() => {
                const block = doc.createElement("div");
                const text = doc.createTextNode("Loading library information...");
                block.append(text);
                doc.body.appendChild(block);
            }, 2000);

            // Замінює блок абзацом з повідомленням
            setTimeout(() => {
                const paragraph = doc.createElement("p");
                paragraph.className = "msg";
                paragraph.textContent = "Welcome to the Digital Library!";
                doc.body.lastChild.replaceWith(paragraph);
            }, 3500);

            // Вставляє ще один абзац перед першим
            setTimeout(() => {
                const intro = doc.createElement("p");
                intro.className = "msg";
                intro.textContent = "You are viewing a dynamic DOM demonstration.";
                doc.body.prepend(intro);
            }, 4500);

            // Вставляє примітку після першого абзацу
            setTimeout(() => {
                const note = doc.createElement("p");
                note.className = "note";
                note.textContent = "A book image will appear shortly.";
                doc.body.querySelector(".msg").after(note);
            }, 6000);

            // Заміна примітки на зображення
            setTimeout(() => {
                const image = doc.createElement("img");
                image.src = "lab6/images.jpg"; // локальний шлях до зображення
                image.alt = "Library";
                doc.body.querySelector(".note").replaceWith(image);
            }, 7000);

            // Видалення всіх span-елементів
            setTimeout(() => {
                const spans = doc.querySelectorAll("span");
                spans.forEach(span => span.remove());
            }, 8000);

            // Закриває вікно після демонстрації
            setTimeout(() => {
                demoWindow.close();
            }, 10000);
        }
    }, 1000);
}


// LAB 7
// Функція, призначена як обробник події через атрибут onclick у HTML
// Виводить інформацію про обрану книгу у вигляді alert-повідомлення
function showBookInfo() {
    alert("This is 'Library Guide 2025' – a modern reference book.");
}

// Отримуємо кнопку з id="detailsBtn" для призначення обробника події через властивість
const detailsBtn = document.getElementById("detailsBtn");

// Змінна-селектор, щоб перемикати стан виведення інформації
let shown = false;

// Призначення функції-обробника через властивість onclick
detailsBtn.onclick = function () {
    if (!shown) {
        // Якщо ще не показано — виводимо детальну інформацію про книгу
        detailsBtn.innerHTML = "📖 Author: J. Smith<br>📅 Year: 2025<br>📘 Genre: Reference";
    } else {
        // Інакше — повертаємо кнопці початковий текст
        detailsBtn.innerHTML = "Show book details";
    }
    // Перемикаємо стан
    shown = !shown;
};

// Окрема функція — обробник події, яка виводить місце розташування бібліотеки
function showLibraryLocation() {
    alert("Our library is located in Kyiv, Central Street, 15.");
}

// Ще одна функція-обробник — виводить години роботи бібліотеки
function showLibraryHours() {
    alert("Library is open from 9:00 to 18:00, Mon–Fri.");
}

// Отримуємо кнопку з id="moreBtn" для додавання обробників через addEventListener
const moreBtn = document.getElementById("moreBtn");

// Призначаємо одній події click два різні обробники
// Обидві функції виконаються при натисканні
moreBtn.addEventListener("click", showLibraryLocation);
moreBtn.addEventListener("click", showLibraryHours);

// Об’єкт, який реалізує метод handleEvent — альтернативний спосіб обробки подій
const handlerObject = {
    handleEvent(event) {
        // Виводимо підтвердження з id елемента, на якому відбулася подія
        const proceed = confirm("handleEvent: Clicked element — " + event.currentTarget.id);

        // Якщо користувач натискає "Cancel" — обробник видаляється
        if (!proceed) {
            event.currentTarget.removeEventListener("click", handlerObject);
            alert("Handler removed. This dialog will not appear again.");
        }
    }
};

// Призначаємо подію click обʼєкту handlerObject через addEventListener
moreBtn.addEventListener("click", handlerObject);

// Отримуємо список з id="bookList" для делегування подій
const bookList = document.getElementById("bookList");

// Призначаємо один обробник на весь список (а не на кожен елемент)
// Це приклад делегування події (через event.target)
bookList.onclick = function (event) {
    const target = event.target;

    // Перевірка: клік має бути по <dt>, <dd> або <b>
    if (target.tagName === "DT" || target.tagName === "DD" || target.tagName === "B") {
        // Знімаємо попереднє підсвічування з усіх елементів
        const allItems = bookList.querySelectorAll("dt, dd, dt > b");
        allItems.forEach(el => el.classList.remove("highlight"));

        // Якщо клікнули по <b> всередині <dt> — підсвічуємо <dt>
        if (target.tagName === "B" && target.parentElement.tagName === "DT") {
            target.parentElement.classList.add("highlight");
        } else {
            // Інакше — підсвічуємо обраний елемент
            target.classList.add("highlight");
        }
    }
};

// Обʼєкт з можливими поведінками для кнопок меню (приклад проектування "Поведінка")
const behaviors = {
    // Поведінка "navigate" — переходить за URL з data-url
    navigate: (element) => {
        const url = element.dataset.url;
        if (url) {
            window.location.href = url;
        }
    }
};

// Один обробник click на все меню — делегування подій
document.querySelector('.main-menu').addEventListener('click', function (event) {
    // Знаходимо найближчу кнопку з атрибутом data-behavior
    const button = event.target.closest('button[data-behavior]');
    if (!button) return; // Якщо не клік по кнопці — нічого не робимо

    // Зчитуємо тип поведінки з data-behavior
    const behaviorName = button.dataset.behavior;

    // Отримуємо відповідну функцію з обʼєкта behaviors
    const behaviorFn = behaviors[behaviorName];

    if (behaviorFn) {
        behaviorFn(button); // Виконуємо поведінку
    } else {
        console.warn('Unknown behavior:', behaviorName); // Якщо немає такої поведінки — повідомляємо в консоль
    }
});

// LAB 8
// --- Підсвічування кнопок (mouseover, mouseout, event.target, event.relatedTarget)
document.querySelectorAll('.highlight-btn').forEach(btn => {
    btn.addEventListener('mouseover', function(event) {
        if (!event.relatedTarget || !btn.contains(event.relatedTarget)) {
            btn.classList.add('hovered');
        }
    });
    btn.addEventListener('mouseout', function(event) {
        if (!event.relatedTarget || !btn.contains(event.relatedTarget)) {
            btn.classList.remove('hovered');
        }
    });
});


// --- Drag and drop для картинки
const img = document.getElementById('puzzleImg');
let isDragging = false;
let shiftX, shiftY;

img.addEventListener('mousedown', function(event) {
    isDragging = true;
    const rect = img.getBoundingClientRect();
    shiftX = event.clientX - rect.left;
    shiftY = event.clientY - rect.top;
    img.style.zIndex = 1000;
    img.style.transition = 'none'; // Вимкнути transition на час перетягування
    event.preventDefault();
});

document.addEventListener('mousemove', function(event) {
    if (!isDragging) return;
    let newLeft = event.pageX - shiftX;
    let newTop = event.pageY - shiftY;
    // Обмеження: картинка не виходить за межі вікна
    const container = img.parentElement;
    const contRect = container.getBoundingClientRect();
    const imgWidth = img.offsetWidth, imgHeight = img.offsetHeight;
    // координати всередині контейнера
    newLeft = Math.max(0, Math.min(newLeft, contRect.width - imgWidth));
    newTop = Math.max(0, Math.min(newTop, contRect.height - imgHeight));
    img.style.left = newLeft + 'px';
    img.style.top = newTop + 'px';
});

document.addEventListener('mouseup', function() {
    if (isDragging) {
        isDragging = false;
        img.style.zIndex = '';
        img.style.transition = 'box-shadow 0.3s';
    }
});
