import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  errorSesion: boolean = false;
  formLogin: FormGroup = new FormGroup({ });
  
  constructor(private autService: AuthService, 
    private cookie: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      });
  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value;
    this.autService.sendCredentials(email, password)
    .subscribe((response) => {
      console.log('Sesion iniciada correctamente 🔥🔥');
      const { tokenSession, data } = response;
      this.cookie.set('token', tokenSession, 4, '/');
      this.router.navigate(['/', '/tracks']);
    },
    err => {
      this.errorSesion = true;
      console.log('Ocurrio un error con tu email o password 😒😒');
    });
  }

}
