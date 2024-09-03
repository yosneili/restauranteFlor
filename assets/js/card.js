function crearTarjetaProyecto(proyect) {
    return `
      <div class="col-md-4 mb-4">
        <div class="project card">
          <img src="${proyect.image}" class="card-img-top" alt="${proyect.title}">
          <div class="card-body">
            <h5 class="card-title">${proyect.name}</h5>
            <p class="card-text">${proyect.description}</p>
            <a href="${proyect.link}" target="_blank" class="btn btn-primary">Ver proyecto</a>
          </div>
        </div>
      </div>
    `;
  }

  const projectSeccion = document.querySelector('#project')

const arrayProject = [
{name: "", title: "", image: "", description:"", link: "",},
{name: "", title: "", image: "", description:"", link: "",},
{name: "", title: "", image: "", description:"", link: "",},
]
arrayProject.forEach(proyect => {
    const tarjetaHTML = crearTarjetaProyecto(proyect);
    if(projectSeccion != null){
      projectSeccion.innerHTML += tarjetaHTML
  }
  });