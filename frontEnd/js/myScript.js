elencoPizze();


function elencoPizze(){
    axios.get("http://localhost:8080/api/pizze")
    .then((result) => {
        console.log(result.data)
        document.querySelector("#pizze").innerHTML += '';
        result.data.forEach(pizze => {
            document.querySelector("#pizze").innerHTML += `
            <tr >
                <td > <a href="./detail.html?id=${pizze.id}">${pizze.name}</a></td>
                <td> ${pizze.description}</td>
                <td >
                    <img alt="logo" src="${pizze.photo}" class="w-50" >
                </td>
                <td>${pizze.price}€</td>
                <td >
                    <a href=""  class="btn btn-primary">Modifica</a>
                    <a onclick="deletePizza(${pizze.id})" class="btn btn-danger">Elimina</a>
                </td>
            </tr>
            `;
        });
    }).catch((error) => {
        console.warn(error)
    })
    
}



function deletePizza(pizzaId) {
    const risposta = confirm("sei sicuro?");

    if(risposta){
        axios.delete('http://localhost:8080/api/pizze/delete/' + pizzaId)
        .then((result) => {
            pizzaList();
        }).catch((error) => {
            console.warn(error);
        })
    }
        
}

