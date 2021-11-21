import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GymnaseService {

  private baseURL = 'http://localhost:8080/gymnase';
  
  constructor(private http : HttpClient) { }

  getGymnaseList() : Observable<any>{
    return this.http.get(`${this.baseURL}`);
    //public getGymnaseList() : Observable<Gymnase[]>{
    // return this.http.get<Gymnase[]>(`${this.baseURL}`);

  } 
  getGymnase(id: string): Observable<any> {
    return this.http.get(`${this.baseURL}/${id}`);
  }
  deleteGymnase(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`, { responseType: 'text' });
  }

}
