import { Component } from '@angular/core';
import { NavController, NavParams, Alert } from 'ionic-angular';
import { Carro } from '../../domain/carro/carro';
//import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular/components/alert/alert';
import { HomePage } from '../home/home';
import { Agendamento } from '../../domain/agendamento/agendamento';
import { AgendamentoService } from '../../domain/agendamento/agendamento-service';

/*
  Generated class for the Cadastro page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'cadastro.html'
})
export class CadastroPage {

  // public carro: Carro;
  // public precoTotal: number;

  // public nome : string;
  // public endereco: string;
  // public email: string;
  // public data: string = new Date().toISOString();
  private _alerta: Alert;
  private _agendamento: Agendamento = new Agendamento();
  //private _agendamentoService = new AgendamentoService(Agendamento);

  constructor(public navCtrl: NavController, public navParams: NavParams, private service:AgendamentoService, private _Alertctrl:AlertController) {

    this._agendamento.carro = this.navParams.get('carro');
    this._agendamento.precoTotal = this.navParams.get('precoTotal');
   
    this._alerta = this._Alertctrl.create({
      title:'Aviso',
      buttons: [{text:'Ok',handler:() =>this.navCtrl.setRoot(HomePage) }] 
    });
  }
  //este componente é semelhante ao ngOnInit(), no entanto só carrega na primeira vez
  ionViewDidLoad(){
    console.log('ionViewDidLoad CadastroPage');
  };

  agenda(){
    //criando uma validacao simples
    if(!this._agendamento.nome || !this._agendamento.endereco || !this._agendamento.email){

      this._Alertctrl.create({
        title: 'Preenchimento obrigatório',
        subTitle: 'Você deve preencher todas as informações',
        buttons:[{ text: 'Ok'}]
      }).present();
      return;
    }


    this.service.agenda(this._agendamento)
    .then( confirmado =>{
        confirmado?
        this._alerta.setSubTitle('Agendamento Reliazado com Sucesso'):
        this._alerta.setSubTitle('Houve um erro ao realizar o agendamento');
     this._alerta.present()  
    }).catch( err =>{
      console.log(err);
      this._alerta.setSubTitle(err.message);
      this._alerta.present();
    })
    // .then(() => {
    //    this._alerta.setSubTitle('Agendamento Reliazado com Sucesso');
    //    this._alerta.present()  
    // })
    // .catch(erro => {
    //   this._alerta.setSubTitle('Houve um erro ao realizar o agendamento');
    //   this._alerta.present()  
    // });
  }

}
