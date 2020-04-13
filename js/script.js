const button = document.getElementById('burger-button');
const list = document.getElementById('burger-list');
const listItems = list.getElementsByTagName('a');

button.addEventListener('click', () => {
    list.classList.toggle("head__menu_active");
});

Array.from(listItems).forEach( (el) => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        let blockId = el.getAttribute('href');
        document.querySelector(blockId).scrollIntoView({ behavior: 'smooth' });
        list.classList.remove("head__menu_active");
    })
});

