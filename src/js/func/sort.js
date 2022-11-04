import { createApp } from "../main.js";

export function sorted(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        clearPage();
        createApp(document.getElementById('maket'));
    })
}

export function noSorted(input) {
    input.addEventListener('input', (e) => {
        e.preventDefault();
        if (input.value == 0) {
            clearPage();
            createApp(document.getElementById('maket'));
        }
    })
}

export function clearPage() {
    const container = document.querySelector(".card__container");

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}