import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { RegistryService } from '../../service/registry.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginComponent implements OnInit {

  id: number;
  key: string;
  isAuth: boolean;
  isReg: boolean;

  constructor(
    private registerService: RegistryService,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService

    ) {
    this.isAuth = false;
    this.isReg = false;
   }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      if(!params['scope'] && !params['key'] && params['code']){
        this.loginService.oauth(params, "github").subscribe(resp => {
          if(resp.status == 200) {
            console.log("navigate")
            this.router.navigate(['login/layout'])
          }
        }, error => {
          console.log(error);
        })
      }
      else if(params['scope']){
        this.loginService.oauth(params, "google").subscribe(resp => {
          if(resp.status == 200) {
            console.log("navigate")
            this.router.navigate(['login/layout'])
          }
        }, error => {
          console.log(error);
        })
      }
      this.id = params['id'];
      this.key = params['key'];
    });

    if(this.id && this.key){
      this.registerService.verify(this.id, this.key).subscribe(resp => {
        if(resp.status == 200) this.isAuth = true;
      });
      }
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  register(email: string) {
    this.registerService.register(email).subscribe();
  }

  loginGoogle(){
    this.loginService.loginWithGoogle()
  }

  loginGithub(){
    this.loginService.loginWithGithub()
  }

}
