export default class Pelicula {
  #codigo;
  #nombrePrenda;
  #descripcion;
  #imagen;
  #talles;
  #anioLanzamiento;
  #marca;
  #precio;
  constructor(
    codigo = uuidv4(),
    nombrePrenda,
    descripcion,
    imagen,
    talles,
    anioLanzamiento,
    marca,
    precio
  ) {
    this.#codigo = codigo;
    this.#nombrePrenda = nombrePrenda;
    this.#descripcion = descripcion;
    this.#imagen = imagen;
    this.#talles = talles;
    this.#anioLanzamiento = anioLanzamiento;
    this.#marca = marca;
    this.#precio = precio;
  }
  // creamos los getters y setters
  // getters
  get codigo() {
    return this.#codigo;
  }
  get nombrePrenda() {
    return this.#nombrePrenda;
  }
  get descripcion() {
    return this.#descripcion;
  }
  get imagen() {
    return this.#imagen;
  }
  get talles() {
    return this.#talles;
  }
  get anioLanzamiento() {
    return this.#anioLanzamiento;
  }
  get marca() {
    return this.#marca;
  }
  get precio() {
    return this.#precio;
  }

  // setters
  set codigo(codigo) {
    this.#codigo = codigo;
  }
  set nombrePrenda(nombrePrenda) {
    this.#nombrePrenda = nombrePrenda;
  }
  set descripcion(descripcion) {
    this.#descripcion = descripcion;
  }
  set imagen(imagen) {
    this.#imagen = imagen;
  }
  set talles(talles) {
    this.#talles = talles;
  }
  set anioLanzamiento(anioLanzamiento) {
    this.#anioLanzamiento = anioLanzamiento;
  }
  set marca(marca) {
    this.#marca = marca;
  }
  set precio(precio) {
    this.#precio = precio;
  }

  toJSON() {
    return {
      codigo: this.codigo,
      nombrePrenda: this.nombrePrenda,
      descripcion: this.descripcion,
      imagen: this.imagen,
      talles: this.talles,
      anioLanzamiento: this.anioLanzamiento,
      marca: this.marca,
      precio: this.precio,
    };
  }
}
