import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Member } from '../models/member';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private _url = 'api/list_members.json'; 
  private _http = inject(HttpClient);

  getAll(): Observable<Member[]> {
    return this._http.get<Member[]>(this._url);
  }
}
