// Definindo a classe pai (superclasse)
class Animal {
    constructor(nome) {
      this.nome = nome;
    }
  
    fazerBarulho() {
      alert(`${this.nome} faz um barulho.`);
    }
  }
  
  // Definindo a classe filha (subclasse) que herda de Animal
  class Cachorro extends Animal {
    constructor(nome, raca) {
      super(nome); // Chama o construtor da classe pai
      this.raca = raca;
    }
  
    latir() {
      alert(`${this.nome} (${this.raca}) late: Au! Au!`);
    }
  }
  
  // Criando uma instância da classe Cachorro
  const meuCachorro = new Cachorro("laik", "vira-lata");
  
  // Chamando métodos da classe pai e da classe filha
  meuCachorro.fazerBarulho(); // Saída: laik faz um barulho.
  meuCachorro.latir(); // Saída: laik (vira-lata) late: Au! Au!
  