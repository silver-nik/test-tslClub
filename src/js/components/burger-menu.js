document.querySelector('.burger_btn').addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelector('.header').classList.toggle('open');
})