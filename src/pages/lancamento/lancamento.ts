import { Component, OnInit } from '@angular/core';
import { NavParams, Loading } from 'ionic-angular';
import { NavController,LoadingController, AlertController } from 'ionic-angular';
import { DateTime } from 'ionic-angular/components/datetime/datetime';
import { ApiService } from '../../service/api';
import { Lancamento } from '../../domain/lancamento';

@Component({
    templateUrl:'lancamento.html'
})

export class LancamentoPage implements OnInit{

    Tipos: any[];

    public lancamento: Lancamento;
    public tiposet:string;
    public  _alertCtrl: AlertController;
    public alert:any

    constructor( private servico : ApiService, private _loadingCtrl: LoadingController,  public  alertCtrl :  AlertController ){

        this.Tipos = ["Agua","Luz","Iptu","Gasolina","Refeição","Lazer"];        
        this.lancamento = new Lancamento();
        console.log("constructor");
    }
    ngOnInit(){
       
    };

    public create(){

        var alert = this.alertCtrl.create({
            title: 'Ok!',
            subTitle: 'Salvo com sucesso',            
          });

        let result = this.servico.AnyData(this.lancamento,'http://54.86.140.78/lancamentos/create','POST');
        result.then(  function(){               
                alert.present();
            });

    }


    
}