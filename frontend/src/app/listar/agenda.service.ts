import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Agenda } from './agenda';

@Injectable()
export class AgendaLService {

  private agendasUrl = 'http://localhost:4200/api/agenda';

  constructor(private http: Http) { }


  public loadAgendas(): Observable<Agenda[]> {
    return this.http.get(`${this.agendasUrl}`)
      .map((res: Response) => res.json());
  }

}
