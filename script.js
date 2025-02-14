const cancion = {
    _id: '1',
    author: 'Molotov',
    title: 'give me the power',
    duracion: '4:10',
    audio: {
        _id: '',
        url: '',
        filename: ''

    },
    image: {
        _id: '',
        url: '',
        filename: ''
    }

}
function CrearComponenteCancion(song) {
    const li = document.createElement ('li')
    li.setAttribute('class', 'cancion')

    li.innerHTML = `<h3>${song.title}</h3>
    <p>${song.author}</p>
    
    `


    return li


}

console.log(
    CrearComponenteCancion(cancion)
)