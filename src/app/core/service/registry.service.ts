import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse, HttpParams } from '@angular/common/http';
import { throwError, Observable} from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

const baseUrl =  'http://localhost/server/'
const httpOptions = {  headers: new HttpHeaders({  }),  observe: "response"} as any;


@Injectable({
  providedIn: 'root'
})
export class RegistryService {

  status: number;
  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);

    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  register(email: string): Observable<any>{

   return this.http.post<any>(`${baseUrl}api/noAuthRequired/registerByEmail/submitEmail?email=${email}`,null, httpOptions );
}

  verify(id: number, key: string): Observable<any> {


    return this.http.post<any>(`${baseUrl}api/noAuthRequired/registerByEmail/verifyEmail?id=${id}&key=${key}`,null,httpOptions) ;

  }


}
