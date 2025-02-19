

// pedimos la informacion al servidor con axios 
// el protocolo es http , es un mecanismo para intercambiar datos

axios.get("https://api.institutoalfa.org/api/songs")

// cuando la informacion esta ubicada , se activa el .then
// la funcion recibe una respuesta que se maneja a conveniencia

.then(function(respuesta) {

    // mostrar por consola
    console.log(respuesta)

    // ahora guardo en canciones lo que venga de respuesta

    const canciones = respuesta.data.songs
    
    // .map mapea , recorre  o descompone las canciones
    canciones.map(function (cancion){

        // lo que este aqui dentro se va a repetir en toda la lista

        console.log(cancion.title)
        document.getElementById('container').appendChild(CrearComponenteCancion(cancion))
    })

})

// crea un elemento cancion y la regresa 

function CrearComponenteCancion(cancion) {
    const li = document.createElement ('li')
    li.setAttribute('class', 'cancion')

    li.innerHTML = `<h3>${cancion.title}</h3>
    <p>${cancion.author}</p>
    
    `

    li.addEventListener("click",function () {
        // esto va a pasar cuando el usuario haga click
        document.getElementById("audio")
        .setAttribute("src", cancion.audio.url)

        document.getElementById("imagen")
        .setAttribute("src",cancion.image.url)

        document.getElementById("nombre")
        .innerHTML = cancion.title

        document.getElementById("autor")
        .innerHTML = cancion.author

        document.getElementById("album")
        .innerHTML = cancion.album

    })


    return li


}

// es una funcion que se usa solo una vez , por eso va aparte

const audio = document.getElementById('audio')

document.getElementById("play-pause").addEventListener ("click", function(){
   
    if (audio.paused){
        audio.play()
    }
    else {
        audio.pause()
    }
    
})
