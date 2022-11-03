let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
};

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
};



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
        alert(`debes apostar gallina`)
    }

    apuesta = parseInt(apuesta)

    while (apuesta > 1 && estado != false) {

        let aleatorio = 1 + (parseInt(Math.random() * 2))
       

        if (carasello == aleatorio) {

            mony = mony + apuesta
            console.log(mony)
            cont = cont + 1

            res.innerHTML = `<p class="resultado">ganaste, monto actual: $${mony} <p class="resultado">jugaste ${cont} veces</p>`
            
        } else {

            mony = mony - apuesta
            console.log(mony)
            cont = cont + 1

            res.innerHTML = `<p class="resultado">perdiste, monto actual: $${mony} <p class="resultado">jugaste ${cont} veces</p>`
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



