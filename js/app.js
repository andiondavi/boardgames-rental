function changeStatus(id) {
    let chosenGame = document.getElementById(`game-${id}`);
    let image = chosenGame.querySelector('.dashboard__item__img');
    let button = chosenGame.querySelector('.dashboard__item__button');
    let gameName = chosenGame.querySelector('.dashboard__item__name');

    if (image.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Are you sure you want to return the game ${gameName.textContent}?`)) {
            image.classList.remove('dashboard__item__img--rented');
            button.classList.remove('dashboard__item__button--return');
            button.textContent = 'Rent';
        }
    } else {
        image.classList.add('dashboard__item__img--rented');
        button.classList.add('dashboard__item__button--return');
        button.textContent = 'Return';
    }
}