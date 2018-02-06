import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { DateTime } from 'ionic-angular/components/datetime/datetime';
import { ApiService } from '../../service/api';
import { Lancamento } from '../../domain/lancamento';


@Component({
    templateUrl:'lancamento.html'
})

export class LancamentoPage{

    Tipos: any[];

    public lancamento: Lancamento;
    public tiposet:string;

    constructor( private servico : ApiService ){

        this.Tipos = ["Agua","Luz","Iptu","Gasolina"];
        
        this.lancamento = new Lancamento();
        console.log("constructor");
    }


    public create(){

       

        //this.lancamento.Descricao = this.lancamento.Tipo + this.lancamento.Descricao;
        this.lancamento.Valor = parseFloat(this.lancamento.ValorStr); 

        this.servico.AnyData(this.lancamento,'http://localhost:56071/api/lancamento/create','POST');

        console.log("Create");
        //console.log(this.lancamento.Data);
        console.log(this.tiposet);
        //console.log(this.lancamento.Descricao);
        //console.log(this.lancamento.ValorStr);
    }
    
}