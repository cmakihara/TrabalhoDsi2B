import { Component, OnInit } from '@angular/core';
import { AgendaService } from './agenda.service';
import { Agenda } from './agenda';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  public agendas: Agenda[] = [];
   public nome = '';
   public telefone = '';
   public endereco = '';
   public email = '';
   public celular = '';

   constructor(private agendaService: AgendaService) { }

   public ngOnInit() {
     this.carregaTodos();
   }

   public salvarAgenda(): void {
     console.log('oi');

     const agenda = new Agenda();
     agenda.nome = this.nome;
     agenda.telefone = this.telefone;
     agenda.endereco = this.endereco;
     agenda.email = this.email;
     agenda.celular = this.celular;

     this.agendaService.addAgenda(agenda)
       .subscribe(res => {
         console.log(res);
         this.carregaTodos();
       },
       err => {
         console.log(err);
       });

   }

   public apagarAgenda(id: number): void {
     this.agendaService.removeAgenda(id)
       .subscribe(res => {
         console.log(res);
         this.carregaTodos();
       },
       err => {
         console.log(err);
       });
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
