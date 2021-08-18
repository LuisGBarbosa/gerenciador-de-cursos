//Módulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

//Componentes
import { AppComponent } from './app.component';
import { CursoModule } from './cursos/curso-module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [ //Components
    AppComponent,
  ],
  imports: [  //Módulos
    BrowserModule,
    HttpClientModule,
    CursoModule,
    CoreModule,
    RouterModule.forRoot([
      {
        path: '', 
        redirectTo: 'cursos', 
        pathMatch: 'full'
      }
    ])

  ],
  // exports: [ RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
