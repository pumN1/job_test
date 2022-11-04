export function createModal() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('id', 'ex1')
    return modal
}

export function createCardUser(res) {
    const card = document.createElement('div');
    card.classList.add('card', 'card--modal');

    const userName = document.createElement('h2');
    userName.classList.add('user');
    userName.textContent = res.name;

    function createColumn(str, classed) {
        const column = document.createElement('td');
        column.classList.add(classed);
        column.innerHTML = str;

        return column
    }

    const table = document.createElement('table');
    table.classList.add('table');
    const tbody = document.createElement('tbody');
    tbody.insertRow().append(createColumn('Телефон:', 'td1'), createColumn(`<a href="${res.phone}">${res.phone}</a>`, 'td2'));
    tbody.insertRow().append(createColumn('Почта:', 'td1'), createColumn(`<a href="${res.email}">${res.email}</a>`, 'td2'));
    tbody.insertRow().append(createColumn('Адрес:', 'td1'), createColumn(res.address, 'td2'));
    tbody.insertRow().append(createColumn('Дата приема:', 'td1'), createColumn(res.hire_date, 'td2'));
    tbody.insertRow().append(createColumn('Должность:', 'td1'), createColumn(res.position_name, 'td2'));
    tbody.insertRow().append(createColumn('Подразделение:', 'td1'), createColumn(res.department, 'td2'));
    const tableFoot = table.createTFoot();

    tableFoot.insertRow().append(createColumn('Дополнительная информация:', 'td3'));
    tableFoot.insertRow().append(createColumn('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic veniam incidunt ipsa reiciendis, quos atque inventore quidem, quibusdam porro labore possimus deserunt a iusto sit tenetur ipsam! In, iure fugiat.', 'td4'));
    tableFoot.querySelectorAll('td').forEach(td => {
        td.setAttribute('colSpan', '2');
    })

    card.append(userName)
    table.append(tbody)
    table.append(tableFoot)
    card.append(table)

    return card
}

export function mod(cardUser) {
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', async (el) => {
            const user = el.currentTarget.getAttribute('id')
            const modal = createModal()
            const newCard = createCardUser(cardUser[user])
            modal.append(newCard);
            // $(modal).modal({
            //     closeClass: 'icon-remove',
            //     closeText: 'X'
            // });
            $(modal).modal({
                closeClass: 'icon-remove',
                closeText: 'X'
            });
        })

    })
}
