import { Carro } from '../carro/carro';

export class Agendamento{

    public carro: Carro;
    public precoTotal: number;
  
    public nome : string;
    public endereco: string;
    public email: string;
    public data: string = new Date().toISOString();

    public confirmado : boolean;
}