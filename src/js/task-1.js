const form = document.querySelector('.todo__form');
const selectedTodos = JSON.parse(localStorage.getItem('selectedTodos')) || {};

form.addEventListener('change', onInputChange);

initForm();

function onInputChange(e) {
    selectedTodos[e.target.name] = e.target.checked;
    localStorage.setItem('selectedTodos', JSON.stringify(selectedTodos));
}

function initForm() {
    const checkedItems = localStorage.getItem('selectedTodos');

    if (checkedItems) {
        const parsedItems = JSON.parse(checkedItems); 
        Object.entries(parsedItems).forEach(([name, checked]) => { 
            const checkbox = form.querySelector(`input[name="${name}"]`);
            if (checkbox) {
                checkbox.checked = checked;
            }
        });
    }
}