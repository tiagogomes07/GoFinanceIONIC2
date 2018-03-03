export class Lancamento{

    public data:Date;
    public tipoDC:number;
    public descricao:string;
    public valor:number;
    public historico:string;
    public Conta_Id:number;
    public Login_Id:number;
    public Recurso_Id:number;
    public saldoAntes:number;
    public saldoAtual:number;

    constructor(){
        this.Conta_Id = 0;
        this.Login_Id = 0;
        this.Recurso_Id = 0;
        this.tipoDC = 0;
        this.saldoAntes = 0;
        this.saldoAtual = 0
    }
}