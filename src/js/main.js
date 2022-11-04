import { createContainer, createCard } from "./components/user.js";
import { sorted, noSorted } from "./func/sort.js";
import { mod } from "./components/modal-card.js";

const cardContainer = createContainer();

export async function createApp(container) {
    const input = document.querySelector('.form__search');
    const user = input.value.trim();
    let server = '';

    if (user.length != 0) {
        server = `http://127.0.0.1:3000?term=${user}`;
    } else {
        server = `http://127.0.0.1:3000`;
    }

    const response = await fetch(server);
    const cardItemList = await response.json();

    let idUser = -1;
    cardItemList.forEach(item => {
        const cardItemElement = createCard(item, ++idUser);
        cardContainer.append(cardItemElement);
    });
    container.append(cardContainer);
    // Открытие модального окна по клику на карточку
    mod(cardItemList);
    // Сортировка списка
    sorted(document.querySelector('.form'));
    noSorted(document.querySelector('.form__search'))
};

window.createApp = createApp;