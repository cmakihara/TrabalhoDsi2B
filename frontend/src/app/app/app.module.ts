import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { ListarComponent } from './listar/listar.component'
import { AddComponent } from './add/add.component'
import { MenuComponent } from './menu/menu.component';
import { ApagarComponent }  from './apagar/apagar.component'
import { EditComponent } from './edit/edit.component'
import { AgendaService } from './agenda/agenda.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddComponent,
    ApagarComponent,
    EditComponent,
    ListarComponent
  ],
  
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [AgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
