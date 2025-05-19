// 1. Діалог з користувачем
function dialogWithUser() {
    if (confirm("Would you like to explore the digital library?")) {
        do {
            if (confirm("Are you interested in a specific type of library?")) {
                let answer = prompt("Enter the type of library you're interested in (public, digital, children's):");
                if (answer) {
                    answer = answer.toLowerCase();
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
    const surname = document.getElementById("surnameInput").value;
    const name = document.getElementById("nameInput").value;
    let position = document.getElementById("positionInput").value;

    if (!surname || !name) {
        alert("Please enter both your surname and name.");
        return;
    }

    if (!position) {
        position = "student";
    }

    alert(`Website developer: ${surname} ${name}\nPosition: ${position}`);
}

// 3. Порівняння двох рядків
function compareStrings() {
    const str1 = prompt("Enter the first string:");
    const str2 = prompt("Enter the second string:");

    if (str1 === null || str2 === null) {
        alert("Comparison was cancelled.");
        return;
    }

    if (str1.length > str2.length) {
        alert(`The longer string is: ${str1}`);
    } else if (str2.length > str1.length) {
        alert(`The longer string is: ${str2}`);
    } else {
        alert("Both strings have the same length.");
    }
}

// 1. Зміна фону на 30 секунд
function changeBackgroundTemporarily() {
    document.body.style.backgroundColor = "brown"; // коричневий
    setTimeout(() => {
        document.body.style.backgroundColor = "#E6D5B8"; // повернення до початкового
    }, 30000);
}

// 2. Переадресація через location
function redirectToExternal() {
    if (confirm("Do you want to open page about digital libraries?")) {
        location.href = "digital.html";
    }
}

// 3. DOM маніпуляції
function showLibraryDomDemo() {
    const demoWindow = window.open("", "", "width=900,height=600");

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
            const attention = doc.getElementById("attention");

            // 🔔 before
            setTimeout(() => {
                const bell = doc.createElement("span");
                bell.textContent = "🔔";
                attention.before(bell);
            }, 500);

            // ❗ after
            setTimeout(() => {
                const warn = doc.createElement("span");
                warn.textContent = "❗";
                attention.after(warn);
            }, 1000);

            // 📚 append block with text
            setTimeout(() => {
                const block = doc.createElement("div");
                const text = doc.createTextNode("Loading library information...");
                block.append(text);
                doc.body.appendChild(block);
            }, 2000);

            // replace text node with styled paragraph
            setTimeout(() => {
                const paragraph = doc.createElement("p");
                paragraph.className = "msg";
                paragraph.textContent = "Welcome to the Digital Library!";
                doc.body.lastChild.replaceWith(paragraph);
            }, 3500);

            // prepend introductory text
            setTimeout(() => {
                const intro = doc.createElement("p");
                intro.className = "msg";
                intro.textContent = "You are viewing a dynamic DOM demonstration.";
                doc.body.prepend(intro);
            }, 4500);

            // insert note after first paragraph
            setTimeout(() => {
                const note = doc.createElement("p");
                note.className = "note";
                note.textContent = "A book image will appear shortly.";
                doc.body.querySelector(".msg").after(note);
            }, 6000);

            // replace note with image
            setTimeout(() => {
                const image = doc.createElement("img");
                image.src = "lab6/images.jpg";
                image.alt = "Library";
                doc.body.querySelector(".note").replaceWith(image);
            }, 7000);

            // remove spans
            setTimeout(() => {
                const spans = doc.querySelectorAll("span");
                spans.forEach(span => span.remove());
            }, 8000);

            // auto-close window
            setTimeout(() => {
                demoWindow.close();
            }, 10000);
        }
    }, 1000);
}
