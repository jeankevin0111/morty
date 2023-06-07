class CharacterLoader {
    constructor() {
      this.botonVerMas = document.getElementById("ver-mas");
      this.numero = 12;
      this.main = document.querySelector('main');
  
      this.llamada = this.llamada.bind(this);
      this.html = this.html.bind(this);
      this.verMas = this.verMas.bind(this);
  
      this.botonVerMas.addEventListener("click", this.verMas);
      this.html();
    }
  
    llamada() {
      const URL = fetch('https://rickandmortyapi.com/api/character');
      return URL.then(response => response.json());
    }
  
    html() {
      this.llamada().then(data => {
        this.main.innerHTML = '';
  
        data.results.slice(0, this.numero).forEach(element => {
          const personaje = document.createRange().createContextualFragment(`
            <div id="todos">
              <div class="zapatos-todos" id="listazapatos">
                <div class="zapatos">
                  <div class="zapatos-imagen">
                    <img src="${element.image}" alt="zapato">
                  </div>
                  <div class="zapatos-info">
                    <h5 class="des">NOMBRE</h5>
                    <div class="nombre-contenedor">
                      <h2 class="zapatos-nombre">${element.name}</h2>
                    </div>
                    <h5 class="des">Descripción</h5>
                    <div class="zapatos-tipos">
                      <p class="precio">${element.status}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `);
          this.main.appendChild(personaje);
        });
      });
    }
  
    verMas() {
      if (this.botonVerMas.innerText == "Ver mas") {
        this.numero = 20;
        this.botonVerMas.innerText = "Ver menos";
      } else {
        this.numero = 12;
        this.botonVerMas.innerText = "Ver mas";
      }
  
      this.html();
    }
  }
  
const characterLoader = new CharacterLoader();
  
        