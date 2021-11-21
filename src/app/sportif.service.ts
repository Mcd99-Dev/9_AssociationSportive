import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SportifService {

  private baseURL = 'http://localhost:8080/sportif';
  
  constructor(private http : HttpClient) { }
  getSportifList() : Observable<any>{
    return this.http.get(`${this.baseURL }`);
  } 
  getSportif(id: string): Observable<any> {
    return this.http.get(`${this.baseURL}/${id}`);
  }
  deleteSportif(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`, { responseType: 'text' });
  }
}
