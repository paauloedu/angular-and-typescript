import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component'; // É preciso importar pq o TS não conseguiria encontrar
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SucessAlertComponent } from './sucess-alert/sucess-alert.component';
import { FormsModule } from '@angular/forms';
import { UserTwoBindingComponent } from './user-two-binding/user-two-binding.component';

/* Decorator do meu AppModule
 * Existem 4 PROPRIEDADES sendo passadas
 * bootstrap: responsável por dizer ao Angular
 * "Qual componente você deve reconhecer no momento que o aplicativo inicia"
 */
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SucessAlertComponent,
    UserTwoBindingComponent,
  ], // Aqui eu especifico que o ServerComponent existe. Apenas Criá-lo não é suficiente
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
