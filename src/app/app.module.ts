import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
<<<<<<< HEAD
import { EmpresasComponent } from './empresas/empresas.component';
=======
import { ClientesComponent } from './clientes/clientes.component';
>>>>>>> abraham.carranza

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
<<<<<<< HEAD
    EmpresasComponent
=======
    ClientesComponent
>>>>>>> abraham.carranza
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
