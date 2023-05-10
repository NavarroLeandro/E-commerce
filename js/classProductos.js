function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

export default class Productoo{
    #codigo;
    #nombrePrenda;
    #descripcion;
    #imagen;
    #talles;
    #anioLanzamiento;
    #marca;
    #precio;
    #stock;
    #categoria;
    constructor(codigo = uuidv4(),nombrePrenda, descripcion, imagen, talles, anioLanzamiento, marca, precio, stock, categoria){
        this.#codigo = codigo;
        this.#nombrePrenda = nombrePrenda;
        this.#descripcion = descripcion;
        this.#imagen = imagen;
        this.#talles = talles;
        this.#anioLanzamiento = anioLanzamiento;
        this.#marca = marca;
        this.#precio = precio;
        this.#stock = stock;
        this.#categoria = categoria;
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
    get stock() {
        return this.#stock;
    }
    get categoria() {
        return this.#categoria;
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
    set stock(stock) {
        this.#stock = stock;
    }
    set categoria(categoria) {
        this.#categoria = categoria;
    }


    toJSON(){
        return {
            codigo: this.codigo,
            nombrePrenda: this.nombrePrenda,
            descripcion: this.descripcion,
            imagen: this.imagen,
            talles: this.talles,
            anioLanzamiento: this.anioLanzamiento,
            marca: this.marca,
            precio: this.precio,
            stock: this.stock,
            categoria: this.categoria
        }
    }
}