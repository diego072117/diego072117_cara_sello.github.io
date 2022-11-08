

const ul = document.querySelector("ul");

function frames(){
    const animacion = ul.animate([
        //Keyframes
        {transform: "TranslateY(0px)"},
        {transform: "TranslateY(-100px)"}
    ],{
        //options
        easing: "linear",
        iterations: 0.1,
        duration: 200 //milisegundos
    });

    return animacion.finished;
}

function displace(){
    frames()
    .then((res)=>{
        console.log(res);
        ul.appendChild(document.querySelectorAll("ul > li")[0])
    })
}

setInterval(()=>{
    displace();
}, 1000)





let btn = document.getElementById("btn")

let mony = 0,
    cont = 0


function carasello() {

    let apuesta = document.getElementById("apostar").value
    let carasello = document.getElementById("carasello").value
    let res = document.getElementById("res")

    let estado = true

    if (apuesta < 1) {
        Swal.fire(`debes apostar gallina`)
    }

    if (carasello == 0) {
        Swal.fire(`debes elegir una opcion`)
    }


    apuesta = parseInt(apuesta)

    while (apuesta > 1 && estado != false && carasello != 0) {

        let aleatorio = 1 + (parseInt(Math.random() * 2))
       

        if (carasello == aleatorio) {

            mony = mony + apuesta
            console.log(mony)
            cont = cont + 1

            res.innerHTML = `<p class="ganaste resultado">Ganaste</p><p class="resultado"> monto actual: $${mony} <p class="resultado">jugaste ${cont} veces</p>`
            
        } else {

            mony = mony - apuesta
            console.log(mony)
            cont = cont + 1

            res.innerHTML = `<p class="perdiste resultado">Perdiste</p><p class="resultado"> monto actual: $${mony} <p class="resultado">jugaste ${cont} veces</p>`
        }


        estado = false

    };

}



btn.addEventListener('click', carasello)

let btnsalir = document.getElementById("btn-salir")

function terminar(){

    mony = 0
    cont = 0

    res.innerHTML = ``

}
btnsalir.addEventListener('click', terminar)
