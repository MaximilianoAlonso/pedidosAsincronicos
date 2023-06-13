window.onload = async () => {
  const $ = (id) => document.getElementById(id);
  const urlBase = "http://localhost:3031/api/movies/";

  document
    .querySelector(".formulario")
    .addEventListener("submit", async (e) => {
      e.preventDefault();

      try {
        let response = await fetch(urlBase + "create", {
          method: "POST",
          body: JSON.stringify({
            title: $("title").value,
            rating: $("rating").value,
            awards: $("awards").value,
            release_date: $("release_date").value,
            length: $("length").value,
            genre_id: $("genre_id").value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        let result = await response.json();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    });
//traigo los generos para el select del form
  try {
    let response = await fetch("http://localhost:3031/api/genres");
    let generos = await response.json();

    let data = generos.data;
 let select = document.querySelector("#genre_id")
  data.forEach(genero => {
  select.innerHTML += `<option value="${genero.id}"> ${genero.name}</option>`

    });


  } catch (error) {
    console.error(error);
  }
};
