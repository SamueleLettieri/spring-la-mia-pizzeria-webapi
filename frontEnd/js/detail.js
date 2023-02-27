const URLParams = new URLSearchParams(window.location.search);
const pizzaId = URLParams.get("id");


axios.get(`http://localhost:8080/api/pizze/${pizzaId}`)
.then((resalt) => {
    console.log(resalt.data);
    let pizza = resalt.data;
    console.log(pizza);
    document.querySelector("#name").innerHTML += pizza.name;

    document.querySelector("#img").innerHTML += `<img src="${pizza.photo}" alt="" class="w-50">` ;

    document.querySelector("#desrizione").innerHTML += pizza.description;

    pizza.ingredientis.forEach(ingrediente => {
        document.querySelector("#ingredienti").innerHTML += `
        <h4> ${ingrediente.name} </h4>
        `;
    });

    document.querySelector("#prezzo").innerHTML += `${pizza.price}€`;

    pizza.offerteSpecialis.forEach(offerte => {
        document.querySelector("#offerte").innerHTML += `
        <tr>
            <td>${offerte.title}</td>
            <td>${offerte.dateStart}</td>
            <td>${offerte.dateEnd}</td>
            <td>
                <a href="'/offerte/edit/' + *{id}"  class="btn btn-primary">Modifica</a>
            </td>
        </tr>
        `;
    });
}).catch((error) => {
    console.warn(error);
})