
  const todasGuardadas = sessionStorage.getItem("todasPeliculas");
  let todas = [];

  if (todasGuardadas) {
    todas = JSON.parse(todasGuardadas);
  }


  const pelicula = sessionStorage.getItem("peliculaFavorita");

  if (!todas.includes(pelicula)) {
    todas.push(pelicula);
  }

  sessionStorage.setItem("todasPeliculas", JSON.stringify(todas));

  window.onload = async () => {
    const app = document.getElementById("root");
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    app.appendChild(container);

    try {
      let response = await fetch("http://localhost:3031/api/movies");
      let peliculas = await response.json();

      let data = peliculas.data.filter(movie => todas.includes(movie.id.toString()));

      data.forEach((movie) => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");

        const h1 = document.createElement("h1");
        h1.textContent = movie.title;

        const p = document.createElement("p");
        p.textContent = `Rating: ${movie.rating}`;

        const duracion = document.createElement("p");
        duracion.textContent = `Duración: ${movie.length}`;

        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);
        if (movie.genre !== null) {
          const genero = document.createElement("p");
          genero.textContent = `Genero: ${movie.genre.name}`;
          card.appendChild(genero);
        }
        card.appendChild(duracion);
        const a = document.createElement("a");
        a.setAttribute("href", "formulario?id=" + movie.id);
        a.setAttribute("class", "botonAgregar");
        a.textContent = "Ver más";
        card.appendChild(a);
      });

    } catch (error) {
      console.error(error);
    }
  };


