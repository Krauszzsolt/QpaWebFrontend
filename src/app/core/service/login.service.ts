import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse, HttpParams } from '@angular/common/http';
import { throwError, Observable} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { error } from 'protractor';

const baseUrl =  'http://localhost/server/'
const httpOptions = {
  headers: new HttpHeaders({
    "Return-Api-Oauth-Redirection-Response" : ''
  }),
  observe: 'response' ,


} as any;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginWithGoogle(){



     this.http.get<any>(`${baseUrl}login/oauth2/google`, httpOptions).subscribe(resp => {

      window.location.href = `${resp['url']}`;

     },
     error => {
       console.log(error)
     });
  }

  loginWithGithub(){
    this.http.get<any>(`${baseUrl}login/oauth2/github`, httpOptions).subscribe(resp => {

      window.location.href = `${resp['url']}`;

     },
     error => {
       console.log(error)
     });
  }

  oauth(params: any, type: string):Observable<any>{
    return this.http.get(`${baseUrl}login/oauth2/code/${type}`, {observe: 'response', params })


  }

}
