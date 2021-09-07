console.log("Hola")

fetch("https://reqres.in/api/users?page=1")
    .then(respuesta => respuesta.json())
    .then(resJson => {
        let personas = $('#registros')

        resJson.data.forEach(element => {
            let card = $('<div class="col-sm-6">' +
                '<div class="card" style="width: 18rem;">' +
                `<img class="card-img-top" src="${element.avatar}" alt="Card image cap">` +
                '<div class="card-body">' +
                `<h5 class="card-title">${element.first_name + " " + element.last_name}</h5>` +
                `<div class="card-text">${element.email}</div>` +
                '<a href="#" class="btn btn-danger">Hacer match ♥</a>' +
                "</div>" +
                "</div>" +
                "</div>");
            personas.append(card)
        })
        console.log(resJson)
    });

$("body").on("click", "#uno", function () {
    console.log("uno")

    document.getElementById("registros").innerHTML = "";

    fetch("https://reqres.in/api/users?page=1")
        .then(respuesta => respuesta.json())
        .then(resJson => {
            let personas = $('#registros')

            resJson.data.forEach(element => {
                let card = $('<div class="col-sm-6">' +
                    '<div class="card" style="width: 18rem;">' +
                    `<img class="card-img-top" src="${element.avatar}" alt="Card image cap">` +
                    '<div class="card-body">' +
                    `<h5 class="card-title">${element.first_name + " " + element.last_name}</h5>` +
                    `<div class="card-text">${element.email}</div>` +
                    '<a href="#" class="btn btn-danger">Hacer match ♥</a>' +
                    "</div>" +
                    "</div>" +
                    "</div>");
                personas.append(card)
            })
            console.log(resJson)
        });

});

$("body").on("click", "#dos", function () {
    console.log("dos")

    document.getElementById("registros").innerHTML = "";

    fetch("https://reqres.in/api/users?page=2")
        .then(respuesta => respuesta.json())
        .then(resJson => {
            let personas = $('#registros')

            resJson.data.forEach(element => {
                let card = $('<div class="col-sm-6">' +
                    '<div class="card" style="width: 16rem;">' +
                        `<img class="card-img-top" src="${element.avatar}" alt="Card image cap">` +
                        '<div class="card-body">' +
                            `<h5 class="card-title">${element.first_name + " " + element.last_name}</h5>` +
                            `<div class="card-text">${element.email}</div>` +
                                '<a href="#" class="btn btn-danger">Hacer match ♥</a>' +
                            "</div>" +
                        "</div>" +
                    "</div>");
                personas.append(card)
            })
            console.log(resJson)
        });
});

$("body").on("click", "#registrar", function () {
    let data = {name: $('#name').val(), job: $('#job').val()}
    console.log(data)
    fetch("https://reqres.in/api/users", {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
            
        },
        body: JSON.stringify(data)
    })
        .then(respuesta => respuesta.json())
        .then(resJson => {
            let personas = $('#registros')
            let image = ""
            let apel = $('#apel').val()
            let email = $('#email').val()
            console.log(resJson)

            if($("#radio1").is(':checked')) {  
                image = "http://pm1.narvii.com/7616/f23a85453a6321b62b382290371583eb2824498fr1-300-300v2_uhq.jpg"  
            } else if($("#radio2").is(':checked')) {  
                image = "https://pm1.narvii.com/7630/ecaaf844b01d0350336febddfddd7bd14819fd98r1-300-300v2_hq.jpg" 
            }

            let card = $('<div class="col-sm-6">' +
                    '<div class="card" style="width: 16rem;">' +
                        `<img class="card-img-top" src="${image}" alt="Card image cap">` +
                        '<div class="card-body">' +
                            `<h5 class="card-title">${resJson.name + " " + apel}</h5>` +
                            `<div class="card-text">${email}</div>` +
                                '<a href="#" class="btn btn-danger">Hacer match ♥</a>' +
                            "</div>" +
                        "</div>" +
                    "</div>");
            personas.append(card)
        });
});
