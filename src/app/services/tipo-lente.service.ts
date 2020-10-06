import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { TipoLente } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TipoLenteService {

  private url: string;

  constructor(private http: HttpClient) { 
    this.url = environment.apiUrl + 'tipo-lente';
  }

  getAll(): Observable<TipoLente[]> {
    let apiURL = this.url; 
    return this.http.get<TipoLente[]>(apiURL);
  }
  
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

}
