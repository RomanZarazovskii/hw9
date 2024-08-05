const input = document.querySelector('.bookmark__input');
const addBtn = document.querySelector('.add__button');
const list = document.querySelector('.bookmark__list');

let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

addBtn.addEventListener('click', onBtnClick);
input.addEventListener('keydown', onInputPress);

function onBtnClick() {
    const url = input.value.trim();
    if (url) {
        bookmarks.push(url);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        input.value = '';
        pushBookmarks();
    }
}

function onInputPress(e) {
    if (e.key === 'Enter') {
        e.preventDefault(); 
        const url = input.value.trim();
        if (url) {
            onBtnClick();
        }
    }
}

function pushBookmarks() {
    list.innerHTML = '';
    bookmarks.forEach((bookmark) => {
        const item = document.createElement('li');
        item.className = 'bookmark__item';
        item.insertAdjacentHTML('beforeend', `
            <a href="${bookmark}" target="_blank">${bookmark}</a>
            <button data-url="${bookmark}" class="delete__button">DELETE</button>
        `);
        list.appendChild(item);
    });

    const deleteBtns = list.querySelectorAll('.delete__button');
    deleteBtns.forEach((btn) => {
        btn.addEventListener('click', deleteBookmarks);
    });
}

function deleteBookmarks(e) {
    const url = e.target.getAttribute('data-url');
    bookmarks = bookmarks.filter(bookmark => bookmark !== url);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    pushBookmarks();
}

pushBookmarks();