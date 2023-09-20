class veiculo{
  constructor(marca,modelo,ano){
this.marca=marca;
this.modelo=modelo;
this.ano=ano;
  } 
}
class carro extends veiculo{
    constructor(marca,modelo,ano,hp){
        super(marca,modelo,ano);
        this.hp=hp;
    }
}
class moto extends veiculo{
    constructor(marca,ano,modelo,cc){
        super(marca,ano,modelo);
        this.cc=cc;
    }
    informarCilindradas(){
        alert(`${this.cc} (${this.raca}) late: Au! Au!`);
    }
}s