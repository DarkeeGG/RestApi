'use strict';

const baseURL = 'https://api.nbp.pl/api/exchangerates/tables/'

const getCurrency = async (table) => {


    try {
        const response = await fetch(`${baseURL}${table}`);
        const data = await response.json();
        return data;
    }
    catch (err) {
        console.log(`To jest błąd ${err}`);
    }

}

getCurrency('b').then(data => {

    console.log(data);
    const [currencies] = data;

    const { rates } = currencies;

    rates.forEach((element, i) => {

        const tr = document.createElement('tr');
        tr.innerHTML =
            `<td>${++i}</td>
            <td>${element.currency}</td>
            <td>${element.mid}</td>
            `;
        document.querySelector('table tbody').appendChild(tr);
    })
});



