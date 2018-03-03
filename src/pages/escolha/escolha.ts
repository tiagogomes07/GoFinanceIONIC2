import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
//import { Console } from '@angular/compiler/src/private_import_core';
import { Carro } from '../../domain/carro/carro';
import { Acessorio} from '../../domain/carro/acessorio';
import { NavController } from 'ionic-angular';
import { CadastroPage} from '../cadastro/cadastro';

@Component({
    templateUrl:'escolha.html'
})

export class EscolhaPage{
    public carro : Carro;
    public acessorios: Acessorio[];
    private _precoTotal : number;

    constructor(public navParams: NavParams, public navCtrl: NavController){
        this.carro = this.navParams.get('carroSelecionado');
        this._precoTotal = this.carro.preco;
            //sintaxe com tipagem
        this.acessorios = [ 
          new Acessorio  ('Freio ABS',800),
          new Acessorio  ('Ar-Condicionado',1000),
          new Acessorio  ('MP3 Player',500)       
        ];
            //sintaxe alternativa sem tipagem
        /*
            this.acessorios = [ 
            {nome:'Freio ABS',preco:800},
            {nome:'Ar-Condicionado',preco:1000},
            {nome:'MP3 Player',preco:500}        
        ];
        */

        console.log(this.carro.nome);
    }

    get precoTotal(){
        return this._precoTotal;
    }

    atualizaTotal(ligado: boolean, acessorio: Acessorio){
        // ligado ?
        //     this._precoTotal += acessorio.preco:
            
        //     this._precoTotal -= acessorio.preco;
        if(ligado){
            this._precoTotal += acessorio.preco; 
            console.log("ligado +" + acessorio.preco );
        }else{
            this._precoTotal -= acessorio.preco;
            console.log("Desligado -" + acessorio.preco );
        }
    }


    avancaNoAgendamento(carro: Carro){
        console.log("avancaNoAgendamento");

        this.navCtrl.push(CadastroPage,{
            carro: this.carro,
            precoTotal: this._precoTotal
        });

        
    }
}