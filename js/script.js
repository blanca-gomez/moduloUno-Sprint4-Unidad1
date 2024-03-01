import peliculas from './peliculas.js'

//obtenemos el id de las películas de accion mediante DOM
let action = document.getElementById('genero-28');
//obtenemos el id de las películas de thriller mediante DOM
let thriller = document.getElementById("genero-53");
//obtenemos el id de las películas de thriller mediante DOM
let adventure = document.getElementById("genero-12");

//Obtenemos los Ids de todas las películas
const id = document.querySelectorAll('genre_ids');

//Obtenemos las películas que contienen id 28.
let generoActionFilms = peliculas.filter(peliculas => peliculas.genre_ids.includes(28))

//Obtenemos las películas que contienen id 53.
let generoThrillerFilms = peliculas.filter(peliculas => peliculas.genre_ids.includes(53));

//Obtenemos las películas que contienen id 12.
let generoAdventureFilms = peliculas.filter(peliculas => peliculas.genre_ids.includes(12));


//Recorremos la variable que contiene todas las películas con género acción.
//En cada vuelta de bucle creamos un nuevo elemento con cada película y lo metemos dentro de un div
//En cada vuelta de bucle indicamos el contenido que va a haber dentro de cada div. Accedemos a la propiedad title de cada una
//Al elemento action-container le agregamos un nodo hijo con appendChild
generoActionFilms.forEach(film => {
    const actionFilms = document.createElement('div');
    actionFilms.classList = ('actionFilm')
    const actionImage = document.createElement('img');
    actionImage.src = (`https://image.tmdb.org/t/p/w500${film.poster_path}`);
    actionImage.alt = film.title;
    
    const actionTitle = document.createElement('p');
    actionTitle.textContent = film.title;

    actionFilms.appendChild(actionImage);
    actionFilms.appendChild(actionTitle);

    action.appendChild(actionFilms);
});

//Recorremos la variable que contiene todas las películas con género Thriller
generoThrillerFilms.forEach(film => {
    const thrillerFilms = document.createElement('div');
    thrillerFilms.classList = ('thrillerFilm')
    const thrillerImage = document.createElement('img');
    thrillerImage.src = (`https://image.tmdb.org/t/p/w500${film.poster_path}`);
    thrillerImage.alt = film.title;

    const thrillerTitle = document.createElement('p');
    thrillerTitle.textContent =film.title;

    thrillerFilms.appendChild(thrillerImage);
    thrillerFilms.appendChild(thrillerTitle);

    thriller.appendChild(thrillerFilms);
});



//Recorremos la variable que contiene todas las películas con género Aventura
generoAdventureFilms.forEach(film => {
    const adventureFilms = document.createElement('div');
    adventureFilms.classList = ('adventureFilm');
    const adventureImage = document.createElement('img');
    adventureImage.src = (`https://image.tmdb.org/t/p/w500${film.poster_path}`);
    adventureImage.alt = film.title;

    const adventureTitle = document.createElement('p');
    adventureTitle.textContent = film.title;

    adventureFilms.appendChild(adventureImage);
    adventureFilms.appendChild(adventureTitle);
    
    adventure.appendChild(adventureFilms);
})