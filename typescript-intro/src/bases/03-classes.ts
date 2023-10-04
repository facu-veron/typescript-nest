export class Pokemon {
  public id: number;
  public name: string;

  constructor(id: number, name: string) {
    (this.id = id), (this.name = name);

    console.log("Constrctor llamado");
  }
}

export const charmander = new Pokemon(1, "Charmander");

// Forma corta de definir clases

export class Saiyajin {
  // El this hace referencia a la instancia sonGoku
  get imageURL(): string {
    return `https://drangonball.com/${this.id}.jpg`;
  }
  constructor(
    // Solo de lectura. Este atributo no se puede modificar.
    public readonly planet: string,
    public id: number,
    public name: string // public imageURL: string
  ) {}

  // Si no tiene la palabra public o private por defecto es public.
  // Si el metodo es private solo se podra acceder a el dentro de la misma clase.
  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  //   En programación, un método asíncrono es una función que se ejecuta de manera concurrente o en paralelo con respecto al flujo principal de ejecución de un programa
  async getPowers() {
    return 5;
  }
}

export const sonGoku = new Saiyajin("Tierra", 2, "Son Goku");
console.log(sonGoku.imageURL);
/* console.log(sonGoku.scream());
console.log(sonGoku.speak()); */
console.log(await sonGoku.getPowers());
