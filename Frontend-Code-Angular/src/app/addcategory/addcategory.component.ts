import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileserviceService } from '../mobileservice.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit{

  pcId:any;
  pcName:any;
  
  constructor(private route:Router, private mobileser:MobileserviceService){ }

  ngOnInit(): void {
    
    
  }
  addcategory(addForm:any){
    
    
     console.log(addForm);

     this.mobileser.saveCategory(addForm).subscribe((response:any)=>{
      this.route.navigateByUrl("/categorytable");
     });
    
    this.pcId=this.pcId;
    this.pcName=this.pcName;
    
}
  }


