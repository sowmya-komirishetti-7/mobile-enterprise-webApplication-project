import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileserviceService } from '../mobileservice.service';
import { User } from '../user';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  user:User = new User();
  uName = localStorage.getItem('uName');
  ngOnInit(): void {
   
  }
constructor(private route: Router,private mobileservice:MobileserviceService, private authService: SocialAuthService){

}
  productlist(){
      this.route.navigateByUrl("/productlist");
  }
  pay(){
    this.route.navigateByUrl("/payment")
  }
  onLogout():void {
    this.authService.signOut();
    this.route.navigate(['/login']);
  }

}


