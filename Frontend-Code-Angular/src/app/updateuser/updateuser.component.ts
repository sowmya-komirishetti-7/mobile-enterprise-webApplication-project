import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MobileserviceService } from '../mobileservice.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent  implements OnInit{

  uId:any;
  uName:any;
  uPassword:any
  uType:any;
  uPhn:any;
  uEmail:any;
  uAddress:any
  @ViewChild('updateForm') updateForm: NgForm | undefined;
  constructor(private router:Router, private empser:MobileserviceService, private route:ActivatedRoute){ 
    this.uId = this.route.snapshot.paramMap.get('uId');
    this.getUserById();
  }

  ngOnInit(): void {
    
    
  }
 updateuser(uObj:any){
  console.log(uObj);
     
     this.empser.updateUser(uObj).subscribe((response:any)=>{
      this.router.navigateByUrl("cruduser");
     });

 }
 getUserById(){
  this.empser.getUserById(this.uId).subscribe((response:any)=>{
    this.uId=this.uId;
    this.uName=this.uName;
    this.uPassword=this.uPassword;
    this.uType=this.uType;
    this.uPhn=this.uPhn;
    this.uEmail=this.uEmail;
    this.uAddress=this.uAddress;
    this.updateForm?.setValue(response);
  })

}


}
