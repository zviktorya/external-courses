document.getElementById('search').onkeyup = debounce(filterList, 1000);

function debounce(fn, wait) {
    let timeout = null;
    return function () {
        let context = this;
        let args = arguments;

        clearTimeout(timeout);
        timeout = setTimeout(function () {
            fn.apply(context, args);
        }, wait);
    };
}

function filterList(event) {
    const pattern = event.target.value;
    const filteredFruits = fruits.filter(function (fruit) {
        return fruit.toLowerCase().indexOf(pattern.toLowerCase()) !== -1;
    });
    renderList(filteredFruits);
}

function renderList(list) {
    let elementHtml = '<ul>';
    if (list.length > 0) {
        list.forEach(function (item) {
            elementHtml += `<li>${item}</li>`;
        });
    } else {
        elementHtml += '<li>Нет совпадений</li>';
    }

    elementHtml += '</ul>';
    document.getElementById('list').innerHTML = elementHtml;
}

const fruits = [
    'Авокадо‎',
    'Апельсины‎',
    'Бананы‎',
    'Груши',
    'Инжир',
    'Персики',
    'Яблоки'
];

renderList(fruits);
