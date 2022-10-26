const firstTask = document.querySelector('.first-btn')
const secondTask = document.querySelector('.second-btn')
const thirdTask = document.querySelector('.third-btn')
const fourthTask = document.querySelector('.fourth-btn')
const fifthTask = document.querySelector('.fifth-btn')
const sixthTask = document.querySelector('.sixth-btn')

firstTask.addEventListener('click', () => {
    const firstLine = document.getElementById('string-1')
    const secondLine = document.getElementById('string-2')
    const thirdLine = document.getElementById('string-3')
    const fourthLine = document.getElementById('string-4')
    const fifthLine = document.getElementById('string-5')
    const sixthLine = document.getElementById('string-6')
    alert('Check it in console!')
    console.log('\n', thirdLine.innerText, '\n', fifthLine.innerText, '\n', secondLine.innerText, '\n',
        sixthLine.innerText, '\n', fourthLine.innerText, '\n', firstLine.innerText)
})

secondTask.addEventListener('click', () => {
    const elems = document.getElementsByClassName('element');
    for (let i = 0; i < elems.length; i++) {
        if (i < 3) elems[i].style.color = 'red';
        else elems[i].style.color = 'green';
    }
})
thirdTask.addEventListener('click', () => {
    const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
    const list = document.querySelector("#todo-list");
    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");
        list.append(li);
        li.innerText = tasks[i];
        li.classList.add("task");
    }
})

fourthTask.addEventListener('click', () => {
    const p = document.querySelectorAll("article p");
    for (let i = 0; i < p.length; i++) {
        const hr = document.createElement("hr");
        p[i].after(hr);
    }
})
fifthTask.addEventListener("click", () => {
    const items = document.querySelectorAll(".item");
    const div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = 'Canned Fish <span class="qty">x 4</span>';

    const parent = items[0].parentNode;

    for (let i = 0; i < items.length; i++) {
        if (items[i].innerHTML.includes("Cola 1.5 l")) {
            items[i].remove();
        }

        if (items[i].innerHTML.includes("Chocolate bar")) {
            parent.replaceChild(div, items[i]);
        }
    }
});
sixthTask.addEventListener("click", () => {
    const list = document.querySelector(".list");
    while (true) {
        const item = prompt("Enter the item", "");
        if (item === "" || !item) {
            break;
        }
        const li = document.createElement("li");
        li.innerText = item;
        list.append(li);
    }
});
