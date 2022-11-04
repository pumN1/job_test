export function createContainer() {
    const containerCard = document.createElement('ul');
    containerCard.classList.add('card__container');
    return containerCard
}

export function createCard(res, idUser) {
    const card = document.createElement('li');
    card.classList.add('card');
    card.setAttribute('id', idUser)

    const userName = document.createElement('h2');
    userName.classList.add('user');
    userName.textContent = res.name;

    const info = document.createElement('div');
    info.classList.add('info');
    const userPhone = document.createElement('div');
    userPhone.classList.add('phone');
    userPhone.textContent = res.phone;
    const userEmail = document.createElement('a');
    userEmail.classList.add('email');
    userEmail.setAttribute('href', `email:${res.email}`)
    userEmail.textContent = res.email;

    card.append(userName)
    info.append(userPhone)
    info.append(userEmail)
    card.append(info)

    return card
}
