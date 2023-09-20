class pessoa{
    constructor(nome,CPF){
this.nome;
this.CPF;
    }
}
class discentes extends pessoa{
    constructor(nome,matricula,curso){
        super(nome);
        this.matricula:matricula;
        this.curso=curso;

    }
}