const form = document.querySelector('.feedback__form');

form.addEventListener('submit', onFormSubmit);

getLocalStorage();

function onFormSubmit(e) {
    e.preventDefault();

    const formData = {
        name: e.target.name.value,
        message: e.target.message.value
    }

    console.log(formData);

    localStorage.setItem('feedbackData', JSON.stringify(formData));
    form.reset();
};

function getLocalStorage() {
    const savedData = localStorage.getItem('feedbackData');

    if (savedData) {
        const newData = JSON.parse(savedData);
        form.elements.name.value = newData.name;
        form.elements.message.value = newData.message;
    }
}