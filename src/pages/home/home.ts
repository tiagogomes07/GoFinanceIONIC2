import { Component, OnInit } from '@angular/core';
import { NavController,LoadingController, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { EscolhaPage }  from '../escolha/escolha';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  public carros;

   constructor(
     public navCtrl: NavController, 
     private _http: Http,
     private _loadingCtrl: LoadingController,
     private _alertCtrl: AlertController
    ) {}
    ngOnInit(){

  }


}
