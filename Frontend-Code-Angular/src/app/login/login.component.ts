import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileserviceService } from '../mobileservice.service';
import { User } from '../user';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  un:any;
  pwd:any;
  users: User[]=[];
  user: any;
  loggedIn: any;
  loggedOut: any;
 
  constructor(private route:Router, private mobileser:MobileserviceService, private toastr: ToastrService,private authService: SocialAuthService){ }

  ngOnInit(): void {
     this.authService.authState.subscribe((user) => {
       this.user = user;
       if(user) {
        this.login(user);
       }       
     });
    
  }
  login(loginform: any) {
    let invalidCredentials = true;
    this.mobileser.getAllUsers().subscribe((data: any) => {
      this.users = data;
      if(loginform?.idToken) {
        invalidCredentials = false;
        let user = this.users[0];
         this.mobileser.userDetails = user;
         localStorage.setItem('uName', user.uName);
         localStorage.setItem('uEmail', user.uEmail);
         localStorage.setItem('uPhn', user.uPhn);
         localStorage.setItem('uAddress', user.uAddress);  
        
        
         if  (user.uName == 'ADMIN' && loginform.pwd == 'ADMIN') {
          
          this.route.navigateByUrl('adminpage');
        
         }
        else {
          
           this.route.navigateByUrl('userpage');
        }
      } else {
        this.users.forEach((user) => {
          if (
            loginform.un == user.uName &&
            loginform.pwd == this.decryptPassword(user.uPassword) 
          ) {
             invalidCredentials = false;
             this.mobileser.userDetails = user;
             localStorage.setItem('uName', user.uName);
             localStorage.setItem('uEmail', user.uEmail);
             localStorage.setItem('uPhn', user.uPhn);
             localStorage.setItem('uAddress', user.uAddress);  
           
            
             if  (user.uName == 'ADMIN' && loginform.pwd == 'ADMIN') {
              
              this.route.navigateByUrl('adminpage');
            
             }
            else {
              
               this.route.navigateByUrl('userpage');
            }
          }
        });
      }
    
      if (invalidCredentials) {
        Swal.fire("Invalid Credentials");
        
      }
    
    });
  
 
 
  }

  decryptPassword(encryptedString: string):string {
    let decryptedString: string = '';
    if(encryptedString) {
      try {
        return atob(atob(encryptedString.split('').reverse().join('')));
      } catch (error: any) {
        alert(error);
      }
    }
    return decryptedString;
  }

  onClick(){
    this.route.navigateByUrl("register")
  }
  signInWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}