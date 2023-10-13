class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default:
        ataque = "não possui ataque definido";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

const heroi1 = new Heroi("Herói 1", 30, "mago");
const heroi2 = new Heroi("Herói 2", 40, "guerreiro");
const heroi3 = new Heroi("Herói 3", 50, "monge");
const heroi4 = new Heroi("Herói 4", 60, "ninja");


heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();

