import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api;
  constructor(private http: HttpClient) { }

  public sendCredentials(email: string, password: string): Observable<any> {
    const body = {
      email,
      password
    }

    return this.http.post(`${this.URL}/auth/login`, body)
  }

}
