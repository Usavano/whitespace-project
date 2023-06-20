const cards = [...document.getElementsByClassName('card')];
cards.forEach(el => {
    el.addEventListener ('click', () => {
        cards.forEach(item => {
            if (item !== el) {
                item.classList.remove('active');
            }
        })
        el.classList.add('active');
    });
});
