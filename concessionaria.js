class veiculo{
    constructor(marca,nodelo,ano){
        this.marca;
        this.modelo;
        this.ano;
    }
}
let marca = prompt("marca");
let modelo = prompt("modelo");
let ano = parseInt (prompt("ano"));
const veiculo1 = new veiculo (marca,modelo,ano);
alert (veiculo.marca + "\n" +  veiculo1.modelo + "\n" + veiculo1.ano);