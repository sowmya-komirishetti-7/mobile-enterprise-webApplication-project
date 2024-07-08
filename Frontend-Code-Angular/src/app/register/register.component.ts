import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { MobileserviceService } from '../mobileservice.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  userObj: User = new User();
  
   onSuccess:boolean=false;

  constructor(private router:Router,private mobileser:MobileserviceService, private toaster:ToastrService)
  {

  }
  ngOnInit(): void {

  }
  addUser()

  {
    if(this.userObj.uName && this.userObj.uPassword && this.userObj.uPhn && this.userObj.uEmail && this.userObj.uAddress){
          this.mobileser.createUser(this.userObj).subscribe((data:any)=> {
             if(data=='Success'){
              // this.onSuccess=true;
              
              // alert("Successfully Registered..")
              Swal.fire('Thank you...', 'You Registered succesfully!', 'success')
      setTimeout(() => {
        this.onSuccess=false;
        
        this.router.navigateByUrl('login');
      }, 500);
             }
       else{
         alert(data);
       }
     console.log(this.userObj);
    },
   (error) => {
    console.log(error);
    alert(error.message);
   }
    
  );
}
  
else{
  //alert("Please fill all the fields...")
this.toaster.error("Please fill all the fields...", "Something is wrong")
setTimeout(() => {
  
}, 400);
}
  }
    onSubmit(){
  console.log(this.userObj);
  this.addUser();

}
  }



