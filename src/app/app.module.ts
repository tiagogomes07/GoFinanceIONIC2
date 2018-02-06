import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EscolhaPage }  from '../pages/escolha/escolha';
import { CadastroPage} from '../pages/cadastro/cadastro';
import { AgendamentoService } from '../domain/agendamento/agendamento-service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Storage} from '@ionic/storage';
import { AgendamentoDAO } from '../domain/agendamento/agendamento-dao';
import { AgendamentosPage } from '../pages/agendamentos/agendamentos';
import { LancamentoPage } from '../pages/lancamento/lancamento';
import { ChartJsPage } from '../pages/chart-js/chart-js';
import { ExtratoPage } from '../pages/extrato/extrato';
import { MeuPerfilPage } from '../pages/meu-perfil/meu-perfil';
import { ApiService } from '../service/api';

function provideStorage(){

  return new Storage(['indexeddb'],{
    name: 'aluracar',
    storeName:'agendamentos'
  });

}

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    EscolhaPage,
    CadastroPage,
    AgendamentosPage,
    LancamentoPage,
    ChartJsPage,
    ExtratoPage,
    MeuPerfilPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EscolhaPage,
    CadastroPage,
    AgendamentosPage,
    LancamentoPage,
    ChartJsPage,
    ExtratoPage,
    MeuPerfilPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, 
    AgendamentoService, ApiService,  
    { provide: Storage, useFactory: provideStorage},
    AgendamentoDAO
  ]
})
export class AppModule {}
