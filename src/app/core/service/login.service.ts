import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

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
     this.http.get<any>(`${environment.baseUrl}login/oauth2/google`, httpOptions).subscribe(resp => {
      window.location.href = `${resp['url']}`;
     },
     error => {
     });
  }

  loginWithGithub(){
    this.http.get<any>(`${environment.baseUrl}login/oauth2/github`, httpOptions).subscribe(resp => {
      window.location.href = `${resp['url']}`;
     },
     error => {
     });
  }

  oauth(params: any, type: string):Observable<any>{
    return this.http.get(`${environment.baseUrl}login/oauth2/code/${type}`, {observe: 'response', params })
  }

}
