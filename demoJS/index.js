const appState = {
    books: [
        { name: 'Book 1', description: "description1" },
        { name: 'Book 2', description: "description2" },
        { name: 'Book 3', description: "description3" },
        { name: 'Book 4', description: "description4" },
        { name: 'Book 5', description: "description5" },
        { name: 'Book 6', description: "description6" },
    ],
    selectedIndex: -1, //Vi tri cua element dang duoc chon
    isInputFormOpen: false,
}

const list = document.querySelector('.list')
const bookDetail = document.querySelector('.book-detail')
const inputForm = document.querySelector('.input-form')
const addElement = document.querySelector('.add-element')
const submitAddElement = document.querySelector('.submit-add-element')
const deleteElement = document.querySelector('.delete-element')
const items = document.getElementsByClassName('item')
const inputName = document.querySelector('.name')
const description = document.querySelector('.description')

function main() {
    renderList()
        // renderDetails() ???
    renderForm()

    addElement.addEventListener('click', () => {
        appState.isInputFormOpen = true;
        appState.selectedIndex = -1; //Bo chon book hien tai neu co

        renderDetails()
        renderForm()
        renderList()
    });

    submitAddElement.addEventListener('click', () => {
        if (!inputName.value) {
            alert('Name not entered')
        } else if (!description.value) {
            alert('Description not entered')
        } else {
            const existsIndex = appState.books.findIndex(book => book.name === inputName.value)
            if (existsIndex !== -1) {
                alert('Name already exist')
            } else {
                addToDataList({ name: inputName.value, description: description.value })
                appState.isInputFormOpen = false;
                renderList()
                renderForm()
                setTimeout(() => alert('Add success'), 100)
            }
        }
    })

    deleteElement.addEventListener('click', () => {
        if (appState.selectedIndex !== -1) {
            deleteFromDataList()
            appState.selectedIndex = -1;
            renderList();
            // renderForm();
            renderDetails();
        } else {
            alert('Choose which book you want to delete')
        }
    })
}

function renderList() {
    let content = '';

    for (let i = 0; i < appState.books.length; i++) {
        content += `<li class="item">${appState.books[i].name}</li>`
    }

    content = `<ul>${content}</ul>`
    list.innerHTML = content;

    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', function() {
            items[i].style.backgroundColor = 'rgb(170, 241, 202)'
                // Set mau trang cho tat ca ngoai tru thang dang duoc chon
            if (appState.selectedIndex !== -1 && appState.selectedIndex !== i) {
                items[appState.selectedIndex].style.backgroundColor = '#fff'
            }

            appState.selectedIndex = i; // Hien dang chon cai nay
            appState.isInputFormOpen = false;

            renderDetails()
            renderForm() //Hide form sau khi chon elemet
        })
    }
}

function renderForm() {
    inputName.value = ''
    description.value = ''
    if (appState.isInputFormOpen) {
        inputForm.style.display = 'block'
    } else {
        inputForm.style.display = 'none'
    }
}

function renderDetails() {
    // Render detail book dang duoc chon
    if (appState.selectedIndex !== -1) {
        bookDetail.innerHTML = `<b>${appState.books[appState.selectedIndex].name}<br><br>${appState.books[appState.selectedIndex].description}</b>`
    } else {
        bookDetail.innerHTML = ''
    }
}

function addToDataList(item) {
    appState.books.push(item)
}

function deleteFromDataList() {
    let result = confirm('Want to delete?')
    if (result) {
        appState.books.splice(appState.selectedIndex, 1) // Remove 1 item ngay tai vi tri appState.selectedIndex
    }
}

main();