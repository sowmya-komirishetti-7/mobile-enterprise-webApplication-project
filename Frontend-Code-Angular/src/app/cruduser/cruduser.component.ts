import { Component, OnInit } from '@angular/core';
import { MobileserviceService } from '../mobileservice.service';

@Component({
  selector: 'app-cruduser',
  templateUrl: './cruduser.component.html',
  styleUrls: ['./cruduser.component.css']
})
export class CruduserComponent implements OnInit{
  user:any;
  constructor(private mobileser:MobileserviceService){}

  ngOnInit(): void {
    this.getAllUsers();
    
  }
  
  getAllUsers(){
    return this.mobileser.getAllUsers().subscribe((data:any)=>{
      this.user=data;
      console.log(data);
    })
    
  }
  deleteUser(uId:string){
    if(!(confirm('Are you sure you want to delete this user'))) {
      //return false;
    } 
    else{
      
       this.mobileser.deleteUser(uId).subscribe((response: string)=>{
        alert(response);
       this.getAllUsers();
     });
    }
     
  }


}
