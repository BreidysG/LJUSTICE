const seccionHeroes= document.getElementById("seleccion-heroe")
const seccionAtaques= document.getElementById("seleccion-ataque")
seccionAtaques.style.display= "none"
const seccionReiniciar= document.getElementById("seleccion-reiniciar")
seccionReiniciar.style.display= "none"
const seccionReglas= document.getElementById("reglas")

const contenedorTarjetas = document.getElementById("contenedor-tarjetas")
const botonSeleccionHeroe= document.getElementById("boton-seleccion-heroe")
const botonReiniciar= document.getElementById("boton-reiniciar")
const ataquesDelJugador= document.getElementById("mensaje-jugador")
const ataquesDelEnemigo= document.getElementById("mensaje-enemigo")
const puntajesDelJugador= document.getElementById("puntaje-jugador-p")
const puntajesDelEnemigo= document.getElementById("puntaje-enemigo-p")
const resultados = document.getElementById("resultado")
const contenedorAtaques= document.getElementById("contenedor-ataques")
const contenedorAtaquesEnemigo= document.getElementById("contenedor-ataques-enemigo")
const tarjetaJugadorIMG= document.getElementById("tarjetaIMG")
const tarjetaJugadorIMGenemigo = document.getElementById("tarjetaIMG-enemigo")

let botones= []
let botonesEnemigo= []
let arregloBotonesBueno= []
let ataqueJugadorArreglo= []
let ataqueEnemigoArreglo= []
let indices= []
let ataqueEnemigo
let ataquesEnemigo

let ataqueJugador
let botonLaser
let botonLaser2
let botonLaserEnemigo
let botonLaserEnemigo2
let botonArmas
let botonArmas2
let botonArmasEnemigo
let botonArmasEnemigo2
let botonLatigo
let botonLatigo2
let botonLatigoEnemigo
let botonLatigoEnemigo2
let botonMar 
let botonMar2
let botonMarEnemigo
let botonMarEnemigo2
let botonCañon
let botonCañon2
let botonCañonEnemigo
let botonCañonEnemigo2
let botonRayo
let botonRayo2
let botonRayoEnemigo
let botonRayoEnemigo2
let botonGolpe
let botonGolpeEnemigo
let botonPatada
let botonPatadaEnemigo
let botonCabezazo
let botonCabezazoEnemigo
let etiquetaSuperman
let etiquetaBatman
let etiquetaWoman
let etiquetaFlash
let etiquetaCyborg
let etiquetaAquaman
let heroes= []
let opcionDeHeroe
let opcionDeAtaque
let opcionDeAtaqueArreglo= []
let opcionDeAtaqueEnemigo= []
let heroeJugador
let heroeEnemigo
let tarjetaHeroeJugador
let tarjetaHeroeEnemigo
let contadorJ= 0
let contadorE= 0

class Heroe{
    constructor(nombre, foto, vida){
        this.nombre=nombre
        this.foto=foto
        this.vida=vida
        this.ataques= []
    }
}

let superman = new Heroe("Superman", "../LJUSTICE/assets/Superman.png", 5)
let batman = new Heroe("Batman", "../LJUSTICE/assets/Batman.png", 5)
let wonderwoman = new Heroe("WonderWoman", "../LJUSTICE/assets/WonderWoman.png", 5)
let aquaman = new Heroe("Aquaman", "../LJUSTICE/assets/Aquaman.png", 5)
let cyborg = new Heroe("Cyborg", "../LJUSTICE/assets/Cyborg.png", 5)
let flash = new Heroe("Flash", "../LJUSTICE/assets/Flash.png", 5)

superman.ataques.push(
    {nombre: "🔥", id: "boton-laser", id2: "boton-laser-enemigo"},
    {nombre: "🔥", id: "boton-laser2", id2: "boton-laser-enemigo2"},
    {nombre: "👊", id: "boton-golpe", id2: "boton-golpe-enemigo"},
    {nombre: "🦶", id: "boton-patada", id2: "boton-patada-enemigo"},
    {nombre: "🤯", id: "boton-cabezazo", id2: "boton-cabezazo-enemigo"},
)
batman.ataques.push(
    {nombre: "🔫", id: "boton-armas", id2: "boton-armas-enemigo"},
    {nombre: "🔫", id: "boton-armas2", id2: "boton-armas-enemigo2"},
    {nombre: "👊", id: "boton-golpe", id2: "boton-golpe-enemigo" },
    {nombre: "🦶", id: "boton-patada", id2: "boton-patada-enemigo"},
    {nombre: "🤯", id: "boton-cabezazo",id2: "boton-cabezazo-enemigo"},
)
wonderwoman.ataques.push(
    {nombre: "🎗", id: "boton-latigo", id2: "boton-latigo-enemigo"},
    {nombre: "🎗", id: "boton-latigo2", id2: "boton-latigo-enemigo2"},
    {nombre: "👊", id: "boton-golpe", id2: "boton-golpe-enemigo" },
    {nombre: "🦶", id: "boton-patada", id2: "boton-patada-enemigo"},
    {nombre: "🤯", id: "boton-cabezazo", id2: "boton-cabezazo-enemigo"},
)
aquaman.ataques.push(
    {nombre: "🌊", id: "boton-mar", id2: "boton-mar-enemigo"},
    {nombre: "🌊", id: "boton-mar2", id2: "boton-mar-enemigo2"},
    {nombre: "👊", id: "boton-golpe", id2: "boton-golpe-enemigo"},
    {nombre: "🦶", id: "boton-patada", id2: "boton-patada-enemigo"},
    {nombre: "🤯", id: "boton-cabezazo", id2: "boton-cabezazo-enemigo"},
)
cyborg.ataques.push(
    {nombre: "☄", id: "boton-cañon", id2: "boton-cañon-enemigo"},
    {nombre: "☄", id: "boton-cañon2", id2: "boton-cañon-enemigo2"},
    {nombre: "👊", id: "boton-golpe", id2: "boton-golpe-enemigo"},
    {nombre: "🦶", id: "boton-patada", id2: "boton-patada-enemigo"},
    {nombre: "🤯", id: "boton-cabezazo", id2: "boton-cabezazo-enemigo"},
)
flash.ataques.push(
    {nombre: "⚡", id: "boton-rayo", id2: "boton-rayo-enemigo"},
    {nombre: "⚡", id: "boton-rayo2", id2: "boton-rayo-enemigo2"},
    {nombre: "👊", id: "boton-golpe", id2: "boton-golpe-enemigo"},
    {nombre: "🦶", id: "boton-patada", id2: "boton-patada-enemigo"},
    {nombre: "🤯", id: "boton-cabezazo", id2: "boton-cabezazo-enemigo"},
)
heroes.push(superman, wonderwoman,flash, cyborg,aquaman, batman)
function iniciarJuego(){
    for (let index = 0; index < heroes.length; index++) {
        opcionDeHeroe =
        `<input type="radio" name="heroe" id=${heroes[index].nombre}>
        <label class="tarjeta-de-heroe" for=${heroes[index].nombre}>
            <img src="${heroes[index].foto}" alt=${heroes.nombre}>
            <p class="titulo-heroes">${heroes[index].nombre}</p>
        </label>`
        
            contenedorTarjetas.innerHTML += opcionDeHeroe
    
        etiquetaAquaman= document.getElementById("Aquaman")
        etiquetaBatman= document.getElementById("Batman")
        etiquetaSuperman= document.getElementById("Superman")
        etiquetaCyborg= document.getElementById("Cyborg")
        etiquetaFlash= document.getElementById("Flash")
        etiquetaWoman= document.getElementById("WonderWoman")
    
        botonSeleccionHeroe.addEventListener("click", seleccionHeroe)
    }

}

function seleccionHeroe(){
    if(etiquetaAquaman.checked){
        heroeJugador= etiquetaAquaman.id
    }else if(etiquetaBatman.checked){
        heroeJugador= etiquetaBatman.id
    }else if(etiquetaCyborg.checked){
        heroeJugador= etiquetaCyborg.id
    }else if(etiquetaFlash.checked){
        heroeJugador= etiquetaFlash.id
    }else if(etiquetaSuperman.checked){
        heroeJugador= etiquetaSuperman.id
    }else if(etiquetaWoman.checked){
        heroeJugador= etiquetaWoman.id
    }else{
        alert("SELECCIONA UN HEROE!!")
    }
    extraerAtaquesHeroe(heroeJugador)
    seleccionAleatoriaEnemigo()
}

function extraerAtaquesHeroe(heroeJugador){
    console.log("Hola el numero es:"+a)
    console.log("Entre a la funcion")
    let ataques
    let heroe= "Jugador"
    let tarjetaJugador
    for (let index = 0; index < heroes.length; index++) {
        if(heroeJugador===heroes[index].nombre){
            ataques=heroes[index].ataques
            tarjetaJugador=heroes[index].foto
        }
        
    }
   
    mostrarTarjetas(tarjetaJugador, heroeJugador, tarjetaJugadorIMG) 
    mostrarAtaques(ataques, contenedorAtaques, heroe)
      
}

function seleccionAleatoriaEnemigo(){
    let enemigoAleatorio = aleatorio(0, heroes.length -1)
    let enemigo= "Enemigo"
   
    let tarjetaEnemigo
    for (let index = 0; index < heroes.length; index++) {
        if(enemigoAleatorio===index){
            heroeEnemigo= heroes[index].nombre
            ataquesEnemigo= heroes[index].ataques
            tarjetaEnemigo= heroes[index].foto
        }      
    }   
    mostrarTarjetas(tarjetaEnemigo, heroeEnemigo, tarjetaJugadorIMGenemigo)
    mostrarAtaques(ataquesEnemigo, contenedorAtaquesEnemigo, enemigo)    
}

function mostrarTarjetas(foto, nombre, etiqueta){
    let tarjeta = `<div id="tarjeta-heroe-seleccion" class="tarjeta-de-heroe">
    <img src=${foto} alt=${nombre}>
    <p class="titulo-heroes">${nombre}</p>
    </div>`
    etiqueta.innerHTML=tarjeta
}

function mostrarAtaques(ataques, contenedor, jugador ){
    let idAtaqueJugador
    let nombreAtaqueJugador
    let idAtaqueEnemigo
    let nombreAtaqueEnemigo

    if(jugador==="Jugador"){
        for (let index = 0; index < ataques.length; index++) {
            opcionDeAtaque = `<button id=${ataques[index].id} class="botones-ataques">${ataques[index].nombre}</button>
            `
            contenedor.innerHTML += opcionDeAtaque
            
            idAtaqueJugador= ataques[index].id
            nombreAtaqueJugador= ataques[index].nombre
           
            opcionDeAtaqueArreglo.push(idAtaqueJugador, nombreAtaqueJugador)
    }
    }else if(jugador==="Enemigo"){
        for (let index = 0; index < ataques.length; index++) {
            opcionDeAtaque = `<button id=${ataques[index].id2} class="botones-ataques">${ataques[index].nombre}</button>
            `
            contenedor.innerHTML += opcionDeAtaque

        idAtaqueEnemigo= ataquesEnemigo[index].id2
        nombreAtaqueEnemigo= ataquesEnemigo[index].nombre

        opcionDeAtaqueEnemigo.push(idAtaqueEnemigo, nombreAtaqueEnemigo)
    }
    
      
    seccionHeroes.style.display= "none"
    seccionAtaques.style.display= "flex"

    crearEventosBotones()
    numerosAleatoriosSinRepetir(0, 4, 5)
}
}

function aleatorio(min, max){
    return Math.floor(Math.random()* (max-min+1) + min)
}


function crearEventosBotones(){
    opcionDeAtaqueArreglo.forEach(element => {
        if(element == "boton-laser"){
            botonLaser= document.getElementById("boton-laser")
            botones.push(botonLaser)
       }if(element == "boton-laser2"){
        botonLaser2= document.getElementById("boton-laser2")
        botones.push(botonLaser2)
       }else if(element == "boton-armas"){
            botonArmas= document.getElementById("boton-armas")
            botones.push(botonArmas)
       }else if(element == "boton-armas2"){
        botonArmas2= document.getElementById("boton-armas2")
        botones.push(botonArmas2)
       }else if(element == "boton-cañon"){
            botonCañon= document.getElementById("boton-cañon")
            botones.push(botonCañon)
       }else if(element == "boton-cañon2"){
        botonCañon2= document.getElementById("boton-cañon2")
        botones.push(botonCañon2)
       }else if(element == "boton-latigo"){
            botonLatigo= document.getElementById("boton-latigo")
            botones.push(botonLatigo)
       }else if(element == "boton-latigo2"){
        botonLatigo2= document.getElementById("boton-latigo2")
        botones.push(botonLatigo2)
       }else if(element == "boton-mar"){
            botonMar= document.getElementById("boton-mar")
            botones.push(botonMar)
       }else if(element == "boton-mar2"){
        botonMar2= document.getElementById("boton-mar2")
        botones.push(botonMar2)
       }else if(element  == "boton-rayo"){
            botonRayo= document.getElementById("boton-rayo")
            botones.push(botonRayo)
       }else if(element  == "boton-rayo2"){
        botonRayo2= document.getElementById("boton-rayo2")
        botones.push(botonRayo2)
       }else if(element == "boton-golpe"){
            botonGolpe= document.getElementById("boton-golpe")
            botones.push(botonGolpe)
       }else if(element == "boton-patada"){
            botonPatada= document.getElementById("boton-patada")
            botones.push(botonPatada)
       }else if(element == "boton-cabezazo"){
            botonCabezazo= document.getElementById("boton-cabezazo")
            botones.push(botonCabezazo)
       }

    });

    //ENEMIGO LUEGO HACER UNA FUNCION PARA ESTAS DOS PARTES:

    opcionDeAtaqueEnemigo.forEach(element => {
        if(element == "boton-laser-enemigo"){
            botonLaserEnemigo= document.getElementById("boton-laser-enemigo")
            botonesEnemigo.push(botonLaserEnemigo)
       }if(element == "boton-laser-enemigo2"){
        botonLaserEnemigo2= document.getElementById("boton-laser-enemigo2")
        botonesEnemigo.push(botonLaserEnemigo2)
       }else if(element == "boton-armas-enemigo"){
            botonArmasEnemigo= document.getElementById("boton-armas-enemigo")
            botonesEnemigo.push(botonArmasEnemigo)
       }else if(element == "boton-armas-enemigo2"){
        botonArmasEnemigo2= document.getElementById("boton-armas-enemigo2")
        botonesEnemigo.push(botonArmasEnemigo2)
       }else if(element == "boton-cañon-enemigo"){
            botonCañonEnemigo= document.getElementById("boton-cañon-enemigo")
            botonesEnemigo.push(botonCañonEnemigo)
       }else if(element == "boton-cañon-enemigo2"){
        botonCañonEnemigo2= document.getElementById("boton-cañon-enemigo2")
        botonesEnemigo.push(botonCañonEnemigo2)
       }else if(element == "boton-latigo-enemigo"){
            botonLatigoEnemigo= document.getElementById("boton-latigo-enemigo")
            botonesEnemigo.push(botonLatigoEnemigo)
       }else if(element == "boton-latigo-enemigo2"){
        botonLatigoEnemigo2= document.getElementById("boton-latigo-enemigo2")
        botonesEnemigo.push(botonLatigoEnemigo2)
       }else if(element == "boton-mar-enemigo"){
            botonMarEnemigo= document.getElementById("boton-mar-enemigo")
            botonesEnemigo.push(botonMarEnemigo)
       }else if(element == "boton-mar-enemigo2"){
        botonMarEnemigo2= document.getElementById("boton-mar-enemigo2")
        botonesEnemigo.push(botonMarEnemigo2)
       }else if(element  == "boton-rayo-enemigo"){
            botonRayoEnemigo= document.getElementById("boton-rayo-enemigo")
            botonesEnemigo.push(botonRayoEnemigo)
       }else if(element  == "boton-rayo-enemigo2"){
        botonRayoEnemigo2= document.getElementById("boton-rayo-enemigo2")
        botonesEnemigo.push(botonRayoEnemigo2)
       }else if(element == "boton-golpe-enemigo"){
            botonGolpeEnemigo= document.getElementById("boton-golpe-enemigo")
            botonesEnemigo.push(botonGolpeEnemigo)
       }else if(element == "boton-patada-enemigo"){
            botonPatadaEnemigo= document.getElementById("boton-patada-enemigo")
            botonesEnemigo.push(botonPatadaEnemigo)
       }else if(element == "boton-cabezazo-enemigo"){
            botonCabezazoEnemigo= document.getElementById("boton-cabezazo-enemigo")
            botonesEnemigo.push(botonCabezazoEnemigo)
       }

    });
    console.log(botones)

    botones.forEach(boton => {
        if(boton){
            boton.addEventListener("click", (e)=>{
                if(e.target.textContent === "🔥"){
                    ataqueJugador= "🔥"
                    boton.style.background = "#112f58"
                    boton.disabled = true
                }else if(e.target.textContent === "👊"){
                    ataqueJugador= "👊"
                    boton.style.background = "#112f58" 
                    boton.disabled = true
                }else if(e.target.textContent === "🦶") {
                    ataqueJugador= "🦶"
                    boton.style.background = "#112f58" 
                    boton.disabled = true
                }else if(e.target.textContent === "🤯") {
                    ataqueJugador= "🤯"
                    boton.style.background = "#112f58" 
                    boton.disabled = true
                }else if(e.target.textContent === "🔫") {
                    ataqueJugador= "🔫"
                    boton.style.background = "#112f58" 
                    boton.disabled = true
                }
                else if(e.target.textContent === "🎗") {
                    ataqueJugador= "🎗"
                    boton.style.background = "#112f58" 
                    boton.disabled = true
                }
                else if(e.target.textContent === "🌊") {
                    ataqueJugador= "🌊"
                    boton.style.background = "#112f58" 
                    boton.disabled = true
                }else if(e.target.textContent === "☄") {
                    ataqueJugador= "☄"
                    boton.style.background = "#112f58" 
                    boton.disabled = true
                }else if(e.target.textContent === "⚡") {
                    ataqueJugador= "⚡"
                    boton.style.background = "#112f58" 
                    boton.disabled = true
                }   
                ataqueAleatorioEnemigo()
        })
        }
    });
}

function numerosAleatoriosSinRepetir(min, max, cantidad) { 
    let i
    while (indices.length<cantidad) {
        let num = aleatorio(min, max);
        if (indices.indexOf(num)==-1) {
            indices.push(num);
            console.log(num)
        }
    }i++
    console.log(indices)
}



function ataqueAleatorioEnemigo(){
        let ataque
        let identificador
        let a, b, c, d, e
        a= indices[0]
        b= indices[1]
        c= indices[2]
        d= indices[3]
        e= indices[4]

        console.log("a: "+a)
        console.log(b)
        console.log(c)
        console.log("d: "+d)
        if(ataqueEnemigoArreglo.length== 0){
            if(ataquesEnemigo[a]){
                ataque = ataquesEnemigo[a].nombre
                identificador= ataquesEnemigo[a].id2
                botonesEnemigo[a].style.background = "crimson"  
                botonesEnemigo[a].disabled = true    
            }
        }else if(ataqueEnemigoArreglo.length== 1){
            if(ataquesEnemigo[b]){
                ataque = ataquesEnemigo[b].nombre
                identificador= ataquesEnemigo[b].id2
                botonesEnemigo[b].style.background = "#crimson"  
                botonesEnemigo[b].disabled = true    
            }    
        }else if(ataqueEnemigoArreglo.length == 2){
            if(ataquesEnemigo[c]){
                 ataque = ataquesEnemigo[c].nombre
                 identificador= ataquesEnemigo[c].id2
                 botonesEnemigo[c].style.background = "#crimson"  
                 botonesEnemigo[c].disabled = true    
             } 
        }else if(ataqueEnemigoArreglo.length == 3){
             if(ataquesEnemigo[d]){
                ataque = ataquesEnemigo[d].nombre
                identificador= ataquesEnemigo[d].id2
                botonesEnemigo[d].style.background = "#crimson"  
                botonesEnemigo[d].disabled = true    
             }  
        }else if(ataqueEnemigoArreglo.length == 4){
            if(ataquesEnemigo[e]){
               ataque = ataquesEnemigo[e].nombre
               identificador= ataquesEnemigo[e].id2
               botonesEnemigo[e].style.background = "#crimson"  
               botonesEnemigo[e].disabled = true    
            }  
       }
        console.log(ataqueEnemigoArreglo)
        console.log(ataque)
        console.log(identificador)

        switch (ataque) {
            case "🔥":
                ataqueEnemigo= "🔥"
                break;
            case "👊":
                ataqueEnemigo= "👊"
                break;
            case "🦶":
                ataqueEnemigo= "🦶"
                break;
            case "🤯":
                ataqueEnemigo= "🤯"
                break;
            case "🔫":
                ataqueEnemigo= "🔫"
                break;
            case "🎗":
                ataqueEnemigo= "🎗"
                break;
            case "🌊":
                ataqueEnemigo= "🌊"
                break;
            case "☄":
                ataqueEnemigo= "☄"
                break;
            case "⚡":
                ataqueEnemigo= "⚡"
                break;
            default:
                break;
        }
        
        combate(ataqueJugador, ataqueEnemigo)
   }
    

    function combate(ataqueJugador, ataqueEnemigo){
        let resultado

        if(ataqueJugadorArreglo.length<=5 && ataqueEnemigoArreglo.length <=5){
            if(ataqueJugador===ataqueEnemigo){
                resultado= "Empate"
            }else if(ataqueJugador== "👊" && ataqueEnemigo== "🤯"){
                resultado="GANASTE"
            }else if(ataqueJugador== "🦶" && ataqueEnemigo== "👊"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "🦶" && ataqueEnemigo== "🤯"){
                    resultado= "GANASTE"
            }else if(ataqueJugador== "🔥" && ataqueEnemigo == "👊"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "🔥" && ataqueEnemigo == "🤯"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "🔥" && ataqueEnemigo == "🦶"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "🔥" && ataqueEnemigo == "🎗"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "🔥" && ataqueEnemigo == "🌊"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "🔥" && ataqueEnemigo == "⚡"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "🔥" && ataqueEnemigo == "☄"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "🔥" && ataqueEnemigo == "🔫"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "🎗" && ataqueEnemigo == "👊"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "🎗" && ataqueEnemigo == "🤯"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "🎗" && ataqueEnemigo == "🦶"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "🎗" && ataqueEnemigo == "🌊"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "🎗" && ataqueEnemigo == "⚡"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "🎗" && ataqueEnemigo == "☄"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "🎗" && ataqueEnemigo == "🔫"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "🌊" && ataqueEnemigo == "👊"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "🌊" && ataqueEnemigo == "🤯"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "🌊" && ataqueEnemigo == "🦶"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "🌊" && ataqueEnemigo == "⚡"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "🌊" && ataqueEnemigo == "☄"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "🌊" && ataqueEnemigo == "🔫"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "⚡" && ataqueEnemigo == "👊"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "⚡" && ataqueEnemigo == "🤯"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "⚡" && ataqueEnemigo == "🦶"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "⚡" && ataqueEnemigo == "☄"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "⚡" && ataqueEnemigo == "🔫"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "☄" && ataqueEnemigo == "👊"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "☄" && ataqueEnemigo == "🤯"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "☄" && ataqueEnemigo == "🦶"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "☄" && ataqueEnemigo == "🔫"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "🔫" && ataqueEnemigo == "👊"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "🔫" && ataqueEnemigo == "🤯"){
                resultado= "GANASTE"
            }else if(ataqueJugador== "🔫" && ataqueEnemigo == "🦶"){
                resultado= "GANASTE"
            }else{
                resultado= "PERDISTE"
            }
        ataqueJugadorArreglo.push(ataqueJugador)
        ataqueEnemigoArreglo.push(ataqueEnemigo)
        console.log(ataqueJugadorArreglo)
        console.log(ataqueEnemigoArreglo)
        console.log(resultado)

        if(resultado==="GANASTE"){
            puntajesDelJugador.innerHTML = contadorJ+1
            contadorJ++
        }else if(resultado==="PERDISTE"){
            puntajesDelEnemigo.innerHTML = contadorE+1
            contadorE++
        }

        crearMensaje()
        
        reiniciarJuego(contadorJ, contadorE)
        }

    function crearMensaje(){
        let ataqueDelJugador= document.createElement("p")
        let ataqueDelEnemigo= document.createElement("p")

        ataqueDelJugador.innerHTML = ataqueJugador
        ataqueDelEnemigo.innerHTML = ataqueEnemigo

        ataquesDelJugador.appendChild(ataqueDelJugador)
        ataquesDelEnemigo.appendChild(ataqueDelEnemigo)


    }
    
    function reiniciarJuego(contadorJ, contadorE){
        if(ataqueJugadorArreglo.length===5 && ataqueEnemigoArreglo.length===5){
            seccionReiniciar.style.display = "flex"
            if(contadorJ>contadorE){
                resultados.innerHTML = "GANASTE EL JUEGO"
            }else if(contadorJ<contadorE){
                resultados.innerHTML = "PERDISTE EL JUEGO"
            }else{
                resultados.innerHTML = "FUE UN EMPATE"
            }
            botonReiniciar.addEventListener("click", function reinicio() {
                location.reload()
            })
        }
    }
}

let a= 5


window.addEventListener("load", iniciarJuego)
