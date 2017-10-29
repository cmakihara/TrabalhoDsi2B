import { Component, OnInit } from '@angular/core';
import { AgendaLService } from './agenda.service';
import { Agenda } from './agenda';

@Component({
  selector: 'app-listar',
  templateUrl: 'listar.component.html',
})
export class ListarComponent implements OnInit {
  public agendas: Agenda[] = [];
   public nome = '';
   public telefone = '';
   public endereco = '';
   public email = '';
   public celular = '';

   constructor(private agendaService: AgendaLService) { }

   public ngOnInit() {
     this.carregaTodos();
   }



   public carregaTodos(): void {
     this.agendaService.loadAgendas()
       .subscribe(res => {
         this.agendas = res;
         console.log('foi');
       },
       err => {
         console.log(err);
       });
   }



 }
