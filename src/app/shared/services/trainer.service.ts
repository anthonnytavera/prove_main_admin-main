import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trainer } from '../models/trainer';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private _url = 'api/list_trainers.json';
  private _http = inject(HttpClient);

  getAll(): Observable<Trainer[]> {
    return this._http.get<Trainer[]>(this._url);
  }
}
