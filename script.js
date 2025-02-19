

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

function CrearComponenteCancion(song) {
    const li = document.createElement ('li')
    li.setAttribute('class', 'cancion')

    li.innerHTML = `<h3>${song.title}</h3>
    <p>${song.author}</p>
    
    `


    return li


}

// aqui añadimos un componente al reproductor
