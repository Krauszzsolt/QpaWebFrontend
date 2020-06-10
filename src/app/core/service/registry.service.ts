import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse, HttpParams } from '@angular/common/http';
import {  Observable} from 'rxjs';
import { environment } from 'src/environments/environment';


const httpOptions = {  headers: new HttpHeaders({  }),  observe: "response"} as any;

@Injectable({
  providedIn: 'root'
})
export class RegistryService {

  status: number;
  constructor(private http: HttpClient) { }

  register(email: string): Observable<any>{

   return this.http.post<any>(`${environment.baseUrl}api/noAuthRequired/registerByEmail/submitEmail?email=${email}`,null, httpOptions );
}

  verify(id: number, key: string): Observable<any> {

    return this.http.post<any>(`${environment.baseUrl}api/noAuthRequired/registerByEmail/verifyEmail?id=${id}&key=${key}`,null,httpOptions) ;
  }

}
