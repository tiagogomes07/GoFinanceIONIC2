import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Agendamento } from '../agendamento/agendamento';
//import { Storage} from '@ionic/storage';
import { AgendamentoDAO} from '../agendamento/agendamento-dao';

@Injectable()
export class AgendamentoService{

    constructor(private _http: Http, private _dao: AgendamentoDAO){}

    agenda(agendamento : Agendamento){
      
      let api = `https://aluracar.herokuapp.com/salvarpedido?carro=${agendamento.carro.nome}&nome=${agendamento.nome}&preco=${agendamento.precoTotal}&endereco=${agendamento.endereco}&email=${agendamento.email}&dataAgendamento=${agendamento.data}`;
      
      return  this._dao.EhAgendamentoDuplicado(agendamento)
            .then(existe =>{
                if(existe) throw new Error('Agendamento Duplicado');
                return  this._http
                    .get(api)
                    .toPromise()
                    .then( () => agendamento.confirmado = true, err => console.log(err) )
                    .then( () => this._dao.salva(agendamento))
                    .then( () => agendamento.confirmado);
            })


        
    }
}