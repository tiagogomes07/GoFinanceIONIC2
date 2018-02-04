import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { AgendamentosPage } from '../pages/agendamentos/agendamentos';
import { LancamentoPage } from '../pages/lancamento/lancamento';
import { ChartJsPage } from '../pages/chart-js/chart-js';
import { ExtratoPage } from '../pages/extrato/extrato';
import { MeuPerfilPage } from '../pages/meu-perfil/meu-perfil';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;


  public paginas = [
    { titulo: 'Lançamento', component: LancamentoPage },
    { titulo: 'Graficos', component: ChartJsPage },
    { titulo: 'Extrato', component: ExtratoPage },
    { titulo: 'Meu Perfil', component: MeuPerfilPage }
    
  ];

  //Pega a tag nav em app.html
  @ViewChild(Nav)public nav:Nav;


  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  abrePagina(pagina){
    this.nav.push(pagina.component);
  }
}
